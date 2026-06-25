/**
 * js/engine/plan-generator.js
 * ─────────────────────────────────────────────────────────────────────────
 * Orquestador principal del plan nutricional diario.
 *
 * Responsabilidades:
 *  - Definir las 4 tomas del día (desayuno, comida, cena, snack)
 *  - Llamar a dish-selector.js para elegir el plato de cada toma
 *  - Aplicar la regla del 25% de kcal máximas por ítem
 *  - Rebalancear el plan completo para acercarlo a los objetivos
 *    de proteína y calorías del perfil calculado
 *
 * Depende de:
 *   js/data/dishes.js          (DISH_DB, referenciada indirectamente)
 *   js/core/utils.js           (round1, round2)
 *   js/core/meal-helpers.js    (getMealTotals, sumMeals, spentMeal,
 *                               estimateMealPrep, mergeDuplicateFoods,
 *                               removeLeastUsefulItem)
 *   js/engine/dish-selector.js (pickDish, buildMealFromDish,
 *                               enforce25PercentRule)
 *
 * Expone (global):
 *   generateDietPlan(profile, data) → { meals, total }
 * ─────────────────────────────────────────────────────────────────────────
 */

// ── Definición de las tomas del día ──────────────────────────────────────

/**
 * Ratio de calorías y presupuesto por toma.
 * breakfast 27% / comida 33% / cena 25% / snack 15%.
 */
var MEAL_DEFS = [
  { key: "breakfast", label: "Desayuno", category: "desayuno", ratio: 0.27 },
  { key: "lunch",     label: "Comida",   category: "comida",   ratio: 0.33 },
  { key: "dinner",    label: "Cena",     category: "cena",     ratio: 0.25 },
  { key: "snack",     label: "Snacks",   category: "snack",    ratio: 0.15 }
];

// ── Punto de entrada principal ────────────────────────────────────────────

/**
 * Genera el plan nutricional completo del día.
 *
 * Flujo:
 *  1. Para cada toma, calcula el objetivo calórico/macro parcial
 *  2. Llama a pickDish() para elegir el plato más diverso
 *  3. Construye el meal con buildMealFromDish()
 *  4. Aplica la regla del 25% (enforce25PercentRule)
 *  5. Rebalancea el plan global (rebalancePlan)
 *
 * @param {object} profile  - salida de calculateProfile()
 *   { bmr, tdee, calories, protein, fats, carbs }
 * @param {object} data     - salida de readForm()
 *   { budget, cookTime, taste, weight, goal, ... }
 * @returns {{ meals: object[], total: object }}
 */
function generateDietPlan(profile, data) {
  // Estado de diversidad compartido entre todas las tomas del día
  var usedState = {
    usedNames:  [],   // nombres de platos ya elegidos
    usedProts:  [],   // mainProt ya usados
    usedTastes: []    // tastes ya usados
  };

  // Construir las 4 tomas
  var meals = MEAL_DEFS.map(function (def) {
    var target = {
      kcal:    profile.calories * def.ratio,
      protein: profile.protein  * def.ratio,
      carbs:   profile.carbs    * def.ratio,
      fat:     profile.fats     * def.ratio
    };

    var dish = pickDish(def.category, data, usedState);

    // Fallback: si no hay plato disponible (presupuesto/tiempo muy restrictivos),
    // relajar restricciones y volver a intentar
    if (!dish) {
      var relaxedData = Object.assign({}, data, {
        cookTime: Math.max(data.cookTime, 30),
        budget:   data.budget * 1.3
      });
      dish = pickDish(def.category, relaxedData, usedState);
    }

    // Fallback final: primer plato de la categoría sin restricciones
    if (!dish) {
      dish = DISH_DB.find(function (d) { return d.category === def.category; });
    }

    return buildMealFromDish(dish, def.key, def.label, target);
  });

  // Regla del 25%: ningún ítem puede superar ese porcentaje de las kcal totales
  var roughTotal = sumMeals(meals);
  enforce25PercentRule(meals, roughTotal.kcal || profile.calories);

  // Rebalanceo fino para acercar al perfil objetivo
  var total = rebalancePlan(meals, profile);

  return { meals: meals, total: total };
}

// ── Rebalanceador ─────────────────────────────────────────────────────────

/**
 * Ajusta iterativamente el plan para acercarlo a los objetivos de
 * proteína y calorías del perfil, sin añadir platos nuevos.
 *
 * Estrategia:
 *  - Si faltan proteínas: escala el ítem más proteico de comida/cena
 *  - Si faltan calorías:  escala el ítem con más carbos de comida
 *  - Si sobran calorías:  reduce el ítem menos eficiente del meal más calórico
 *
 * Máximo 12 iteraciones para evitar bucles infinitos.
 *
 * @param {object[]} meals
 * @param {object}   profile  - { calories, protein, carbs, fats }
 * @returns {{ kcal, protein, carbs, fat, cost }}
 */
function rebalancePlan(meals, profile) {
  var loops = 0;

  while (loops < 12) {
    loops++;
    var total = sumMeals(meals);
    var pGap  = profile.protein  - total.protein;
    var cGap  = profile.carbs    - total.carbs;
    var kGap  = profile.calories - total.kcal;

    // Convergencia: gaps dentro de tolerancia aceptable
    if (Math.abs(kGap) < 150 && pGap < 18 && cGap < 30) break;

    var lunch  = meals.find(function (m) { return m.key === "lunch";  });
    var dinner = meals.find(function (m) { return m.key === "dinner"; });

    // Escalar proteína principal si hay déficit
    if (pGap > 15 && lunch)  scaleMainProteinUp(lunch,  Math.min(40, pGap * 2));
    if (pGap > 25 && dinner) scaleMainProteinUp(dinner, Math.min(40, (pGap - 15) * 2));

    // Escalar carbohidratos si hay déficit
    if (cGap > 25 && lunch) {
      var carbItem = lunch.items.find(function (i) { return i.carbs > 5; });
      if (carbItem) scaleItemUp(carbItem, Math.min(60, cGap * 1.5));
    }

    // Reducir si hay exceso calórico
    if (kGap < -180) {
      var richest = meals.slice().sort(function (a, b) {
        return getMealTotals(b).kcal - getMealTotals(a).kcal;
      })[0];
      removeLeastUsefulItem(richest);
    }

    // Recalcular totales de cada meal tras los ajustes
    meals.forEach(function (m) {
      mergeDuplicateFoods(m);
      m.total = getMealTotals(m);
      m.spent = round2(spentMeal(m));
      m.prep  = estimateMealPrep(m);
    });
  }

  return sumMeals(meals);
}

// ── Funciones de escala ───────────────────────────────────────────────────

/**
 * Aumenta la cantidad del ítem más proteico de un meal.
 * Busca el ítem con mayor contenido de proteína y le añade
 * hasta 60 g extra para cubrir el déficit indicado.
 *
 * @param {object} meal
 * @param {number} addProteins  - gramos de proteína que faltan
 */
function scaleMainProteinUp(meal, addProteins) {
  // Encontrar el ítem con más proteína por gramo
  var best = null;
  var bestRatio = 0;
  meal.items.forEach(function (item) {
    if (item.grams <= 0) return;
    var ratio = item.protein / item.grams;
    if (ratio > bestRatio) { bestRatio = ratio; best = item; }
  });
  if (!best || best.grams >= 350) return;

  var addG = Math.min(60, Math.round(addProteins / Math.max(bestRatio, 0.01)));
  scaleItemUp(best, addG);
}

/**
 * Incrementa los gramos de un ítem y recalcula sus macros proporcionalmente.
 *
 * @param {object} item     - ítem de meal.items
 * @param {number} addGrams - gramos a añadir
 */
function scaleItemUp(item, addGrams) {
  if (!item || item.grams <= 0) return;
  var factor = (item.grams + addGrams) / item.grams;
  item.grams   = Math.round(item.grams * factor);
  item.kcal    = round1(item.kcal    * factor);
  item.protein = round1(item.protein * factor);
  item.carbs   = round1(item.carbs   * factor);
  item.fat     = round1(item.fat     * factor);
  item.cost    = round2(item.cost    * factor);
}
