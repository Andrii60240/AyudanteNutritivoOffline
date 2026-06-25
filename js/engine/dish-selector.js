/**
 * js/engine/dish-selector.js
 * ─────────────────────────────────────────────────────────────────────────
 * Motor de selección de platos con algoritmo de diversidad.
 *
 * Responsabilidades:
 *  - Filtrar DISH_DB por categoría, tiempo de preparación y presupuesto
 *  - Puntuar cada plato según diversidad (premia fuentes proteicas nuevas,
 *    mainProt no repetidos, variedad de sabores)
 *  - Seleccionar el plato más diverso para cada toma del día
 *  - Escalar las porciones al objetivo calórico de la toma
 *  - Aplicar la regla del 25% máximo de calorías por alimento/plato
 *
 * Depende de:
 *   js/data/dishes.js       (DISH_DB)
 *   js/core/utils.js        (round1, round2)
 *   js/core/meal-helpers.js (getMealTotals, spentMeal, estimateMealPrep,
 *                            mergeDuplicateFoods, addFood)
 *
 * Expone (globales):
 *   pickDish(category, data, usedState)
 *     → selecciona el mejor plato y actualiza usedState
 *   buildMealFromDish(dish, mealKey, mealLabel, target)
 *     → construye un objeto meal a partir del plato elegido
 *   enforce25PercentRule(meals, totalKcal)
 *     → garantiza que ningún ítem supere el 25% de kcal diarias
 * ─────────────────────────────────────────────────────────────────────────
 */

// ── Filtros ───────────────────────────────────────────────────────────────

/**
 * Devuelve platos de DISH_DB válidos para la toma, el tiempo y el presupuesto.
 *
 * @param {string} category      - "desayuno" | "comida" | "cena" | "snack"
 * @param {number} maxPrep       - minutos máximos de preparación
 * @param {number} budgetLimit   - € máximos para esta toma
 * @param {string} taste         - preferencia global "sweet"|"savory"|"mixed"
 * @returns {object[]}           - subconjunto de DISH_DB
 */
function filterDishes(category, maxPrep, budgetLimit, taste) {
  return DISH_DB.filter(function (dish) {
    if (dish.category !== category)    return false;
    if (dish.prep > maxPrep)           return false;
    if (dish.cost > budgetLimit * 1.4) return false;
    // sabor: nunca bloquear totalmente, solo reducir ruido en casos extremos
    if (taste === "sweet"  && dish.taste === "savory" && category === "desayuno") return false;
    if (taste === "savory" && dish.taste === "sweet"  && category === "cena")     return false;
    return true;
  });
}

// ── Puntuación de diversidad ──────────────────────────────────────────────

/**
 * Calcula la puntuación de diversidad de un plato dado el estado de uso.
 *
 * Premia:
 *   + mainProt no visto hoy          (+5)
 *   + nombre no visto hoy            (+3)
 *   + sabor diferente a los previos  (+1)
 *   + pequeña variación aleatoria    (+0–1) para evitar menús idénticos
 *
 * Penaliza:
 *   - mismo mainProt que ya apareció  (-3 por cada repetición)
 *   - mismo nombre de plato           (-10, casi descarta el plato)
 *
 * @param {object}   dish
 * @param {object}   usedState  - { usedNames[], usedProts[], usedTastes[] }
 * @returns {number}
 */
function diversityScore(dish, usedState) {
  let score = Math.random();                          // tiebreak aleatorio

  const protCount = usedState.usedProts.filter(function (p) {
    return p === dish.mainProt;
  }).length;

  if (protCount === 0)            score += 5;         // primera vez este mainProt
  else                            score -= protCount * 3; // penaliza repetición

  if (usedState.usedNames.indexOf(dish.name) === -1) score += 3;  // plato nuevo
  else                                               score -= 10; // ya aparece hoy

  const tasteCount = usedState.usedTastes.filter(function (t) {
    return t === dish.taste;
  }).length;
  if (tasteCount === 0) score += 1;                  // sabor no visto aún

  return score;
}

// ── Selección principal ───────────────────────────────────────────────────

/**
 * Elige el plato más diverso para una categoría dada.
 * Actualiza usedState in-place con el plato elegido.
 *
 * @param {string} category
 * @param {object} data       - { cookTime, budget, taste }
 * @param {object} usedState  - { usedNames[], usedProts[], usedTastes[] }
 * @returns {object}          - plato de DISH_DB, o null si no hay candidatos
 */
function pickDish(category, data, usedState) {
  const budgetMap = {
    desayuno: data.budget * 0.22,
    comida:   data.budget * 0.33,
    cena:     data.budget * 0.28,
    snack:    data.budget * 0.17
  };

  const candidates = filterDishes(
    category,
    data.cookTime,
    budgetMap[category] || data.budget * 0.25,
    data.taste
  );

  if (candidates.length === 0) return null;

  // Ordenar por puntuación de diversidad y tomar el primero
  const ranked = candidates.slice().sort(function (a, b) {
    return diversityScore(b, usedState) - diversityScore(a, usedState);
  });

  const chosen = ranked[0];

  // Actualizar estado de uso
  usedState.usedNames.push(chosen.name);
  usedState.usedProts.push(chosen.mainProt);
  usedState.usedTastes.push(chosen.taste);

  return chosen;
}

// ── Construcción del meal ─────────────────────────────────────────────────

/**
 * Convierte un plato de DISH_DB en un objeto meal listo para renderizar.
 * Escala la ración al objetivo calórico de la toma (±30 % como máximo).
 *
 * @param {object} dish       - plato de DISH_DB
 * @param {string} mealKey    - "breakfast" | "lunch" | "dinner" | "snack"
 * @param {string} mealLabel  - "Desayuno" | "Comida" | "Cena" | "Snacks"
 * @param {object} target     - { kcal, protein, carbs, fat }
 * @returns {object}          - meal con items, total, spent, prep
 */
function buildMealFromDish(dish, mealKey, mealLabel, target) {
  // Factor de escala: ajusta la ración para acercarla al objetivo calórico
  const rawScale   = target.kcal / Math.max(dish.kcal, 1);
  const scaleFactor = Math.min(1.35, Math.max(0.70, rawScale));

  const meal = {
    key:   mealKey,
    label: mealLabel + " — " + dish.name,
    items: []
  };

  // Añadir cada ingrediente visible del plato, escalado
  dish.items.forEach(function (ingredient) {
    meal.items.push({
      name:    ingredient.name,
      grams:   Math.round(ingredient.g * scaleFactor),
      // Macros proporcionales al plato completo escalado
      kcal:    round1(dish.kcal    * scaleFactor * (ingredient.g / totalItemGrams(dish))),
      protein: round1(dish.protein * scaleFactor * (ingredient.g / totalItemGrams(dish))),
      carbs:   round1(dish.carbs   * scaleFactor * (ingredient.g / totalItemGrams(dish))),
      fat:     round1(dish.fat     * scaleFactor * (ingredient.g / totalItemGrams(dish))),
      cost:    round2(dish.cost    * scaleFactor * (ingredient.g / totalItemGrams(dish))),
      prep:    dish.prep,
      ready:   false,
      taste:   dish.taste
    });
  });

  meal.total = getMealTotals(meal);
  meal.spent = round2(spentMeal(meal));
  meal.prep  = dish.prep;
  return meal;
}

/**
 * Suma los gramos totales de los ingredientes de un plato.
 * Se usa como denominador para distribuir macros proporcionalmente.
 * @param {object} dish
 * @returns {number}
 */
function totalItemGrams(dish) {
  return dish.items.reduce(function (sum, ing) { return sum + ing.g; }, 0) || 1;
}

// ── Regla del 25% ────────────────────────────────────────────────────────

/**
 * Garantiza que ningún ítem individual supere el 25% de las kcal diarias.
 * Si lo supera, reduce ese ítem proporcionalmente.
 *
 * @param {object[]} meals
 * @param {number}   totalKcal - total de kcal del día
 */
function enforce25PercentRule(meals, totalKcal) {
  const cap = totalKcal * 0.25;
  meals.forEach(function (meal) {
    meal.items.forEach(function (item) {
      if (item.kcal > cap) {
        const f     = cap / item.kcal;
        item.grams   = round1(item.grams   * f);
        item.kcal    = round1(item.kcal    * f);
        item.protein = round1(item.protein * f);
        item.carbs   = round1(item.carbs   * f);
        item.fat     = round1(item.fat     * f);
        item.cost    = round2(item.cost    * f);
      }
    });
    meal.total = getMealTotals(meal);
    meal.spent = round2(spentMeal(meal));
  });
}
