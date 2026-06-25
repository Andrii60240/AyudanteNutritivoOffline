/**
 * js/app.js
 * ─────────────────────────────────────────────────────────────────────────
 * Punto de entrada de la aplicación. Conecta el DOM con la lógica de
 * los demás módulos. Debe cargarse ÚLTIMO (depende de todo lo anterior).
 *
 * Responsabilidades:
 *  - Capturar referencias al DOM
 *  - Inicializar los módulos de render (initRenderRefs / initInsightRefs)
 *  - Manejar el submit del formulario → calcular perfil → generar plan → render
 *  - Botones "Ejemplo alto en proteína" y "Resetear"
 *  - Mostrar/ocultar el spinner mientras se calcula
 *
 * Depende de:
 *   js/core/calculator.js   (readForm, validateInput, calculateProfile)
 *   js/engine/plan-generator.js (generateDietPlan)
 *   js/ui/render.js         (initRenderRefs, renderSummary, renderMeals)
 *   js/ui/render-insights.js(initInsightRefs, renderInsights, renderWarnings, showWarning)
 *   js/data/dishes.js       (DISH_DB, solo para el contador informativo)
 * ─────────────────────────────────────────────────────────────────────────
 */

document.addEventListener("DOMContentLoaded", function () {

  // ── Referencias al DOM ───────────────────────────────────────────────
  var form          = document.getElementById("plannerForm");
  var fillExampleBtn= document.getElementById("fillExampleBtn");
  var resetBtn      = document.getElementById("resetBtn");
  var spinnerWrap   = document.getElementById("spinnerWrap");
  var statusText    = document.getElementById("statusText");
  var foodCountEl   = document.getElementById("foodCount");
  var mealsContainer= document.getElementById("mealsContainer");
  var warningBox    = document.getElementById("warningBox");
  var insightsList  = document.getElementById("insightsList");

  var summaryEls = {
    calories:    document.getElementById("sumCalories"),
    caloriesSub: document.getElementById("sumCaloriesSub"),
    protein:     document.getElementById("sumProtein"),
    proteinSub:  document.getElementById("sumProteinSub"),
    carbs:       document.getElementById("sumCarbs"),
    carbsSub:    document.getElementById("sumCarbsSub"),
    fats:        document.getElementById("sumFats"),
    fatsSub:     document.getElementById("sumFatsSub")
  };

  // ── Inicializar módulos de render ────────────────────────────────────
  initRenderRefs({ mealsContainer: mealsContainer, summaryEls: summaryEls });
  initInsightRefs({ warningBox: warningBox, insightsList: insightsList });

  // ── Contador informativo de la base de platos ────────────────────────
  if (foodCountEl && typeof DISH_DB !== "undefined") {
    foodCountEl.textContent = DISH_DB.length;
  }

  // ── Helpers de UI ─────────────────────────────────────────────────────

  function showSpinner() {
    if (spinnerWrap) spinnerWrap.classList.add("active");
    if (statusText)  statusText.textContent = "";
  }

  function hideSpinner() {
    if (spinnerWrap) spinnerWrap.classList.remove("active");
  }

  function clearOutput() {
    summaryEls.calories.textContent    = "-";
    summaryEls.caloriesSub.textContent = "Esperando cálculo";
    summaryEls.protein.textContent     = "-";
    summaryEls.proteinSub.textContent  = "Esperando cálculo";
    summaryEls.carbs.textContent       = "-";
    summaryEls.carbsSub.textContent    = "Esperando cálculo";
    summaryEls.fats.textContent        = "-";
    summaryEls.fatsSub.textContent     = "Esperando cálculo";

    mealsContainer.innerHTML =
      '<div class="meal-card">' +
        '<div class="meal-head">' +
          '<h3>Sin plan todavía</h3>' +
          '<div class="meal-kcal">0 kcal</div>' +
        '</div>' +
        '<div class="meal-body">Introduce tus datos y pulsa <strong>Generar plan</strong>.</div>' +
      '</div>';

    insightsList.innerHTML = "";
    warningBox.classList.remove("show");
    warningBox.textContent = "";
    if (statusText) statusText.textContent = "";
  }

  // ── Generar el plan (flujo principal) ────────────────────────────────

  function handleSubmit(event) {
    event.preventDefault();

    var data = readForm();
    var error = validateInput(data);

    if (error) {
      showWarning(error);
      return;
    }

    showSpinner();

    // setTimeout para permitir que el spinner se pinte antes del cálculo
    // (el cálculo es síncrono y rápido, pero así se ve el feedback visual)
    setTimeout(function () {
      try {
        var profile = calculateProfile(data);
        var result  = generateDietPlan(profile, data);

        renderSummary(profile, result.total);
        renderMeals(result.meals);
        renderInsights(profile, result, data);
        renderWarnings(profile, result, data);

        if (statusText) {
          statusText.textContent = "Plan generado correctamente.";
        }
      } catch (err) {
        console.error(err);
        showWarning("Ha ocurrido un error generando el plan. Revisa los datos introducidos.");
      } finally {
        hideSpinner();
      }
    }, 50);
  }

  // ── Botón: ejemplo alto en proteína ───────────────────────────────────

  function fillExample() {
    document.getElementById("age").value      = 27;
    document.getElementById("sex").value      = "male";
    document.getElementById("weight").value   = 82;
    document.getElementById("height").value   = 180;
    document.getElementById("activity").value = "1.55";
    document.getElementById("workouts").value = 5;
    document.getElementById("goal").value     = "bulk";
    document.getElementById("budget").value   = 10;
    document.getElementById("cookTime").value = "35";
    document.getElementById("taste").value    = "mixed";
  }

  // ── Botón: resetear ───────────────────────────────────────────────────

  function resetAll() {
    form.reset();
    clearOutput();
  }

  // ── Listeners ─────────────────────────────────────────────────────────

  form.addEventListener("submit", handleSubmit);
  if (fillExampleBtn) fillExampleBtn.addEventListener("click", fillExample);
  if (resetBtn)       resetBtn.addEventListener("click", resetAll);

});
