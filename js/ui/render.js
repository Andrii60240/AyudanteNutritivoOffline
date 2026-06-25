/**
 * js/ui/render.js
 * ─────────────────────────────────────────────────────────────────────────
 * Capa de presentación: dibuja en el DOM las tarjetas de resumen de macros
 * y las tarjetas de cada toma del día.
 *
 * Depende de:
 *   js/core/utils.js        (round0, round1, round2, escapeHtml)
 *   js/core/meal-helpers.js (getMealTotals)
 *
 * Inicialización obligatoria:
 *   Llamar a initRenderRefs(refs) desde js/app.js antes de cualquier render.
 *
 * Expone (globales):
 *   initRenderRefs(refs)      – conecta las referencias DOM
 *   renderSummary(profile, total) – actualiza las 4 tarjetas de macros
 *   renderMeals(meals)            – construye las tarjetas de cada toma
 * ─────────────────────────────────────────────────────────────────────────
 */

// Referencias al DOM — se rellenan desde app.js mediante initRenderRefs().
// Se declaran aquí como let de módulo para que renderSummary y renderMeals
// las vean sin necesidad de recibirlas como parámetros en cada llamada.
var mealsContainer, summaryEls;

/**
 * Conecta las referencias a los nodos DOM necesarios para este módulo.
 * Debe llamarse una sola vez al inicio, antes de cualquier render.
 *
 * @param {object} refs
 * @param {HTMLElement} refs.mealsContainer  – contenedor del grid de comidas
 * @param {HTMLElement} refs.summaryEls      – objeto con referencias a las
 *                                             tarjetas de resumen de macros
 */
function initRenderRefs(refs) {
  mealsContainer = refs.mealsContainer;
  summaryEls     = refs.summaryEls;
}

// ── Resumen de macros ─────────────────────────────────────────────────────

/**
 * Actualiza las 4 tarjetas del resumen de macros (objetivo vs. plan real).
 *
 * @param {object} profile  – salida de calculateProfile()
 * @param {object} total    – salida de sumMeals() (totales del plan generado)
 */
function renderSummary(profile, total) {
  summaryEls.calories.textContent    = round0(profile.calories) + " kcal";
  summaryEls.caloriesSub.textContent = "Real plan: " + round0(total.kcal) + " kcal";

  summaryEls.protein.textContent    = round0(profile.protein) + " g";
  summaryEls.proteinSub.textContent = "Real plan: " + round0(total.protein) + " g";

  summaryEls.carbs.textContent    = round0(profile.carbs) + " g";
  summaryEls.carbsSub.textContent = "Real plan: " + round0(total.carbs) + " g";

  summaryEls.fats.textContent    = round0(profile.fats) + " g";
  summaryEls.fatsSub.textContent = "Real plan: " + round0(total.fat) + " g";
}

// ── Tarjetas de comidas ───────────────────────────────────────────────────

/**
 * Construye el HTML completo del grid de comidas y lo inserta en el DOM.
 * Cada toma genera una tarjeta con: nombre del plato, lista de ingredientes
 * con macros, y un footer con los totales de la toma.
 *
 * @param {object[]} meals  – array de objetos meal (salida de generateDietPlan)
 */
function renderMeals(meals) {
  mealsContainer.innerHTML = meals.map(function (meal) {
    var total = getMealTotals(meal);
    return renderMealCard(meal, total);
  }).join("");
}

/**
 * Genera el HTML de una tarjeta individual de toma.
 * @param {object} meal
 * @param {object} total  – { kcal, protein, carbs, fat, cost }
 * @returns {string}
 */
function renderMealCard(meal, total) {
  return (
    '<div class="meal-card">' +
      '<div class="meal-head">' +
        '<h3>' + escapeHtml(meal.label) + '</h3>' +
        '<div class="meal-kcal">' + round0(total.kcal) + ' kcal</div>' +
      '</div>' +
      '<div class="meal-body">' +
        '<div class="meal-items">' +
          meal.items.map(renderFoodRow).join("") +
        '</div>' +
        renderMealFooter(total, meal.prep) +
      '</div>' +
    '</div>'
  );
}

/**
 * Genera el HTML de una fila de ingrediente dentro de una tarjeta.
 * @param {object} item  – { name, grams, protein, carbs, fat, kcal, cost }
 * @returns {string}
 */
function renderFoodRow(item) {
  return (
    '<div class="food-row">' +
      '<div class="food-main">' +
        '<div class="food-name">' + escapeHtml(item.name) + '</div>' +
        '<div class="food-meta">' +
          round0(item.grams) + ' g' +
          ' &mdash; P ' + round1(item.protein) + ' g' +
          ' / C ' + round1(item.carbs) + ' g' +
          ' / G ' + round1(item.fat) + ' g' +
        '</div>' +
      '</div>' +
      '<div class="food-right">' +
        '<div>' + round0(item.kcal) + ' kcal</div>' +
        '<div>&euro;' + round2(item.cost) + '</div>' +
      '</div>' +
    '</div>'
  );
}

/**
 * Genera el HTML del footer de una tarjeta de toma (5 columnas de totales).
 * @param {object} total  – { protein, carbs, fat, cost }
 * @param {number} prep   – minutos de preparación
 * @returns {string}
 */
function renderMealFooter(total, prep) {
  return (
    '<div class="meal-footer">' +
      '<div>Prote&iacute;na<strong>' + round0(total.protein) + ' g</strong></div>' +
      '<div>Carbs<strong>'           + round0(total.carbs)   + ' g</strong></div>' +
      '<div>Grasas<strong>'          + round0(total.fat)     + ' g</strong></div>' +
      '<div>Coste<strong>&euro;'     + round2(total.cost)    + '</strong></div>' +
      '<div>Prep<strong>'            + (prep || 0)           + ' min</strong></div>' +
    '</div>'
  );
}
