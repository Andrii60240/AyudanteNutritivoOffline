/**
 * js/data/dishes.js
 * ─────────────────────────────────────────────────────────────────────────
 * Base de datos de PLATOS COMPLETOS.
 *
 * Cada entrada representa un plato real con sus macros por ración,
 * coste estimado (€, supermercado España), tiempo de preparación,
 * categoría, fuente proteica principal y lista de ingredientes visibles.
 *
 * NO contiene ninguna lógica: solo datos.
 * Consumido por: js/engine/dish-selector.js
 *
 * Campos de cada plato:
 *   name      – nombre del plato
 *   category  – "desayuno" | "comida" | "cena" | "snack"
 *   kcal      – calorías totales de la ración
 *   protein   – proteínas (g)
 *   carbs     – carbohidratos (g)
 *   fat       – grasas (g)
 *   cost      – coste en € de la ración
 *   prep      – minutos de preparación
 *   mainProt  – fuente proteica principal (diversidad)
 *   taste     – "sweet" | "savory" | "mixed"
 *   items     – array [{name, g}] mostrado en la tarjeta de comida
 * ─────────────────────────────────────────────────────────────────────────
 */

var DISH_DB = [

  // ══════════════════════════════════════════════════════
  //  DESAYUNOS  (60 platos)
  // ══════════════════════════════════════════════════════

  // — Porridges & avena —
  { name:"Porridge de avena con plátano y miel",         category:"desayuno", kcal:420, protein:18, carbs:68, fat:7,  cost:0.85, prep:5,  mainProt:"avena",    taste:"sweet",
    items:[{name:"Avena",g:80},{name:"Plátano",g:100},{name:"Miel",g:15},{name:"Leche semidesnatada",g:200}] },
  { name:"Porridge de avena con frutos rojos y skyr",    category:"desayuno", kcal:390, protein:22, carbs:58, fat:5,  cost:1.10, prep:5,  mainProt:"avena",    taste:"sweet",
    items:[{name:"Avena",g:70},{name:"Skyr natural",g:150},{name:"Frutos rojos congelados",g:80}] },
  { name:"Porridge de avena con mantequilla de cacahuete", category:"desayuno", kcal:480, protein:20, carbs:60, fat:16, cost:0.90, prep:5, mainProt:"avena",   taste:"sweet",
    items:[{name:"Avena",g:80},{name:"Mantequilla de cacahuete",g:25},{name:"Leche semidesnatada",g:200},{name:"Plátano",g:80}] },
  { name:"Overnight oats con yogur y manzana",           category:"desayuno", kcal:410, protein:19, carbs:62, fat:7,  cost:0.95, prep:3,  mainProt:"avena",    taste:"sweet",
    items:[{name:"Avena",g:70},{name:"Yogur griego ligero",g:150},{name:"Manzana",g:100}] },
  { name:"Avena con huevo y canela",                     category:"desayuno", kcal:430, protein:24, carbs:55, fat:10, cost:0.80, prep:8,  mainProt:"huevo",    taste:"sweet",
    items:[{name:"Avena",g:60},{name:"Huevos enteros",g:100},{name:"Leche semidesnatada",g:150}] },

  // — Tostadas —
  { name:"Tostadas con aguacate y huevo escalfado",      category:"desayuno", kcal:445, protein:19, carbs:38, fat:22, cost:1.30, prep:10, mainProt:"huevo",    taste:"savory",
    items:[{name:"Pan integral",g:80},{name:"Aguacate",g:80},{name:"Huevos enteros",g:100}] },
  { name:"Tostadas con queso fresco y tomate",           category:"desayuno", kcal:310, protein:18, carbs:40, fat:6,  cost:0.75, prep:5,  mainProt:"queso",    taste:"savory",
    items:[{name:"Pan integral",g:80},{name:"Queso fresco batido 0%",g:150},{name:"Tomate",g:80}] },
  { name:"Tostadas con pavo y queso lonchas",            category:"desayuno", kcal:360, protein:26, carbs:38, fat:8,  cost:1.10, prep:5,  mainProt:"pavo",     taste:"savory",
    items:[{name:"Pan de molde integral",g:80},{name:"Pavo loncheado",g:80},{name:"Queso light",g:30}] },
  { name:"Tostadas con jamón cocido y tomate",           category:"desayuno", kcal:330, protein:22, carbs:38, fat:5,  cost:0.95, prep:5,  mainProt:"pavo",     taste:"savory",
    items:[{name:"Pan integral",g:80},{name:"Jamón cocido extra",g:80},{name:"Tomate",g:60}] },
  { name:"Tostadas con mantequilla de cacahuete y plátano", category:"desayuno", kcal:430, protein:17, carbs:55, fat:14, cost:0.70, prep:3, mainProt:"cacahuete", taste:"sweet",
    items:[{name:"Pan integral",g:80},{name:"Mantequilla de cacahuete",g:30},{name:"Plátano",g:100}] },
  { name:"Tostadas con ricotta y mermelada",             category:"desayuno", kcal:350, protein:15, carbs:50, fat:6,  cost:0.80, prep:3,  mainProt:"queso",    taste:"sweet",
    items:[{name:"Pan de molde integral",g:80},{name:"Requesón",g:100},{name:"Mermelada light",g:20}] },

  // — Huevos —
  { name:"Tortilla francesa con tostadas integrales",    category:"desayuno", kcal:400, protein:26, carbs:36, fat:14, cost:0.90, prep:10, mainProt:"huevo",    taste:"savory",
    items:[{name:"Huevos enteros",g:150},{name:"Pan integral",g:70},{name:"Tomate",g:60}] },
  { name:"Huevos revueltos con pavo y tostadas",         category:"desayuno", kcal:430, protein:34, carbs:32, fat:14, cost:1.20, prep:10, mainProt:"huevo",    taste:"savory",
    items:[{name:"Huevos enteros",g:150},{name:"Pavo loncheado",g:60},{name:"Pan integral",g:60}] },
  { name:"Claras revueltas con espinacas y tostadas",    category:"desayuno", kcal:330, protein:28, carbs:34, fat:4,  cost:0.95, prep:10, mainProt:"huevo",    taste:"savory",
    items:[{name:"Claras de huevo",g:200},{name:"Espinacas",g:60},{name:"Pan de molde integral",g:60}] },
  { name:"Huevos al plato con jamón y tomate",           category:"desayuno", kcal:360, protein:28, carbs:10, fat:18, cost:1.00, prep:12, mainProt:"huevo",    taste:"savory",
    items:[{name:"Huevos enteros",g:150},{name:"Jamón cocido extra",g:60},{name:"Tomate",g:100}] },
  { name:"Tortilla de claras con queso y vegetales",     category:"desayuno", kcal:300, protein:30, carbs:8,  fat:10, cost:1.05, prep:12, mainProt:"huevo",    taste:"savory",
    items:[{name:"Claras de huevo",g:220},{name:"Queso light",g:30},{name:"Espinacas",g:60},{name:"Tomate",g:50}] },

  // — Yogur & lácteos —
  { name:"Yogur griego con granola y frutos rojos",      category:"desayuno", kcal:420, protein:20, carbs:52, fat:11, cost:1.15, prep:3,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Yogur griego ligero",g:200},{name:"Granola",g:50},{name:"Frutos rojos congelados",g:80}] },
  { name:"Skyr con plátano y almendras",                 category:"desayuno", kcal:390, protein:24, carbs:45, fat:10, cost:1.20, prep:3,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Skyr natural",g:200},{name:"Plátano",g:100},{name:"Almendras",g:20}] },
  { name:"Skyr con avena y miel",                        category:"desayuno", kcal:370, protein:22, carbs:55, fat:4,  cost:1.10, prep:3,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Skyr natural",g:200},{name:"Avena",g:40},{name:"Miel",g:15}] },
  { name:"Bowl de yogur con fruta y semillas",           category:"desayuno", kcal:380, protein:19, carbs:48, fat:10, cost:1.00, prep:3,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Yogur griego ligero",g:200},{name:"Plátano",g:80},{name:"Frutos rojos congelados",g:60},{name:"Almendras",g:15}] },
  { name:"Queso fresco con muesli y naranja",            category:"desayuno", kcal:360, protein:18, carbs:50, fat:5,  cost:0.90, prep:3,  mainProt:"queso",    taste:"sweet",
    items:[{name:"Queso fresco batido 0%",g:200},{name:"Granola",g:40},{name:"Naranja",g:120}] },

  // — Proteínas & especiales —
  { name:"Batido de proteína con avena y plátano",       category:"desayuno", kcal:450, protein:36, carbs:58, fat:6,  cost:1.40, prep:3,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Skyr natural",g:200},{name:"Avena",g:50},{name:"Plátano",g:100},{name:"Mantequilla de cacahuete",g:15}] },
  { name:"Wrap de desayuno con huevo y pavo",            category:"desayuno", kcal:430, protein:32, carbs:40, fat:12, cost:1.30, prep:12, mainProt:"huevo",    taste:"savory",
    items:[{name:"Tortillas de trigo",g:70},{name:"Huevos enteros",g:100},{name:"Pavo loncheado",g:60},{name:"Tomate",g:50}] },
  { name:"Bagel integral con queso y salmón ahumado",    category:"desayuno", kcal:460, protein:28, carbs:50, fat:12, cost:2.10, prep:5,  mainProt:"salmon",   taste:"savory",
    items:[{name:"Pan de molde integral",g:90},{name:"Salmón",g:80},{name:"Queso fresco batido 0%",g:60}] },
  { name:"Bowl de skyr con cacao y nueces",              category:"desayuno", kcal:380, protein:20, carbs:35, fat:14, cost:1.10, prep:3,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Skyr natural",g:200},{name:"Nueces",g:20},{name:"Plátano",g:80}] },
  { name:"Pan integral con atún y tomate",               category:"desayuno", kcal:350, protein:28, carbs:38, fat:4,  cost:1.00, prep:5,  mainProt:"atun",     taste:"savory",
    items:[{name:"Pan integral",g:80},{name:"Atún al natural",g:100},{name:"Tomate",g:80}] },
  { name:"Crepes de avena con requesón y fruta",         category:"desayuno", kcal:400, protein:22, carbs:52, fat:8,  cost:1.00, prep:12, mainProt:"huevo",    taste:"sweet",
    items:[{name:"Avena",g:60},{name:"Huevos enteros",g:100},{name:"Requesón",g:80},{name:"Frutos rojos congelados",g:80}] },
  { name:"Muesli con leche y fruta",                     category:"desayuno", kcal:390, protein:14, carbs:60, fat:8,  cost:0.75, prep:2,  mainProt:"avena",    taste:"sweet",
    items:[{name:"Granola",g:70},{name:"Leche semidesnatada",g:250},{name:"Manzana",g:100}] },
  { name:"French toast proteico con yogur",              category:"desayuno", kcal:440, protein:28, carbs:48, fat:12, cost:1.10, prep:12, mainProt:"huevo",    taste:"sweet",
    items:[{name:"Pan de molde integral",g:90},{name:"Huevos enteros",g:100},{name:"Yogur griego ligero",g:100}] },
  { name:"Requesón con piña y copos de maíz",            category:"desayuno", kcal:350, protein:16, carbs:52, fat:4,  cost:0.80, prep:3,  mainProt:"queso",    taste:"sweet",
    items:[{name:"Requesón",g:150},{name:"Piña",g:100},{name:"Copos de maíz",g:30}] },
  { name:"Smoothie bowl de skyr con frutos rojos",       category:"desayuno", kcal:380, protein:22, carbs:50, fat:5,  cost:1.20, prep:5,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Skyr natural",g:180},{name:"Frutos rojos congelados",g:100},{name:"Plátano",g:60},{name:"Granola",g:30}] },
  { name:"Tostadas con aguacate y atún",                 category:"desayuno", kcal:380, protein:24, carbs:36, fat:13, cost:1.40, prep:5,  mainProt:"atun",     taste:"savory",
    items:[{name:"Pan integral",g:80},{name:"Aguacate",g:70},{name:"Atún al natural",g:80}] },

  // ══════════════════════════════════════════════════════
  //  COMIDAS  (80 platos)
  // ══════════════════════════════════════════════════════

  // — Pollo —
  { name:"Pollo a la plancha con arroz y brócoli",       category:"comida", kcal:520, protein:48, carbs:52, fat:8,  cost:2.10, prep:20, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:200},{name:"Arroz blanco cocido",g:220},{name:"Brócoli",g:150}] },
  { name:"Pollo al curry con arroz basmati",             category:"comida", kcal:560, protein:46, carbs:58, fat:10, cost:2.30, prep:25, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:200},{name:"Arroz blanco cocido",g:220},{name:"Verduras congeladas salteado",g:100}] },
  { name:"Bowl de arroz con pollo teriyaki y edamame",   category:"comida", kcal:580, protein:50, carbs:60, fat:9,  cost:2.40, prep:20, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:200},{name:"Arroz blanco cocido",g:220},{name:"Edamame",g:80}] },
  { name:"Wrap de pollo con lechuga y tomate",           category:"comida", kcal:490, protein:42, carbs:44, fat:10, cost:2.00, prep:15, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:180},{name:"Tortillas de trigo",g:80},{name:"Tomate",g:60},{name:"Lechuga: Pepino",g:40}] },
  { name:"Ensalada de pollo con quinoa y espinacas",     category:"comida", kcal:500, protein:46, carbs:40, fat:10, cost:2.30, prep:20, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:200},{name:"Quinoa cocida",g:150},{name:"Espinacas",g:80}] },
  { name:"Muslos de pollo al horno con patatas",         category:"comida", kcal:580, protein:42, carbs:50, fat:16, cost:2.00, prep:40, mainProt:"pollo",    taste:"savory",
    items:[{name:"Muslo de pollo deshuesado",g:200},{name:"Patata cocida",g:250},{name:"Espinacas",g:60}] },
  { name:"Pechuga de pollo con cuscús y verduras",       category:"comida", kcal:510, protein:46, carbs:52, fat:7,  cost:2.20, prep:20, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:200},{name:"Cuscús cocido",g:220},{name:"Verduras congeladas salteado",g:120}] },
  { name:"Burrito de pollo con arroz integral",          category:"comida", kcal:600, protein:48, carbs:62, fat:11, cost:2.50, prep:20, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:180},{name:"Arroz integral cocido",g:180},{name:"Tortillas de trigo",g:70},{name:"Maíz dulce",g:50}] },
  { name:"Pollo salteado con verduras y arroz",          category:"comida", kcal:530, protein:46, carbs:55, fat:8,  cost:2.10, prep:20, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:200},{name:"Arroz blanco cocido",g:200},{name:"Verduras congeladas salteado",g:130}] },
  { name:"Poke bowl de pollo con arroz y aguacate",      category:"comida", kcal:570, protein:44, carbs:54, fat:14, cost:2.60, prep:15, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:180},{name:"Arroz blanco cocido",g:200},{name:"Aguacate",g:60},{name:"Zanahoria",g:60}] },
  { name:"Lentejas estofadas con muslos de pollo",       category:"comida", kcal:560, protein:50, carbs:48, fat:10, cost:2.20, prep:30, mainProt:"pollo",    taste:"savory",
    items:[{name:"Muslo de pollo deshuesado",g:180},{name:"Lentejas cocidas",g:200},{name:"Zanahoria",g:80}] },

  // — Pavo —
  { name:"Pasta con pavo y tomate",                      category:"comida", kcal:540, protein:44, carbs:62, fat:7,  cost:2.00, prep:20, mainProt:"pavo",     taste:"savory",
    items:[{name:"Pechuga de pavo",g:180},{name:"Pasta cocida",g:230},{name:"Tomate",g:100}] },
  { name:"Wrap de pavo con queso y lechuga",             category:"comida", kcal:470, protein:40, carbs:40, fat:9,  cost:1.90, prep:10, mainProt:"pavo",     taste:"savory",
    items:[{name:"Pechuga de pavo",g:160},{name:"Wrap proteico",g:80},{name:"Queso light",g:30},{name:"Tomate",g:60}] },
  { name:"Pavo salteado con batata y espinacas",         category:"comida", kcal:500, protein:42, carbs:48, fat:7,  cost:2.10, prep:25, mainProt:"pavo",     taste:"savory",
    items:[{name:"Pechuga de pavo",g:180},{name:"Batata",g:200},{name:"Espinacas",g:80}] },
  { name:"Ensalada mediterránea con pavo y garbanzos",   category:"comida", kcal:490, protein:42, carbs:42, fat:9,  cost:2.00, prep:10, mainProt:"pavo",     taste:"savory",
    items:[{name:"Pechuga de pavo",g:160},{name:"Garbanzos cocidos",g:150},{name:"Tomate",g:80},{name:"Pepino",g:60}] },

  // — Ternera & cerdo —
  { name:"Carne picada con arroz y verduras",            category:"comida", kcal:580, protein:46, carbs:58, fat:12, cost:2.30, prep:20, mainProt:"ternera",  taste:"savory",
    items:[{name:"Carne picada 5% grasa",g:200},{name:"Arroz blanco cocido",g:220},{name:"Verduras congeladas salteado",g:120}] },
  { name:"Ternera con quinoa y brócoli",                 category:"comida", kcal:560, protein:48, carbs:42, fat:12, cost:2.80, prep:25, mainProt:"ternera",  taste:"savory",
    items:[{name:"Ternera magra",g:200},{name:"Quinoa cocida",g:180},{name:"Brócoli",g:150}] },
  { name:"Spaghetti boloñesa ligera",                    category:"comida", kcal:590, protein:44, carbs:68, fat:10, cost:2.20, prep:25, mainProt:"ternera",  taste:"savory",
    items:[{name:"Carne picada 5% grasa",g:180},{name:"Pasta cocida",g:230},{name:"Tomate",g:100}] },
  { name:"Lomo de cerdo con patatas al horno y ensalada",category:"comida", kcal:560, protein:44, carbs:50, fat:12, cost:2.10, prep:35, mainProt:"cerdo",    taste:"savory",
    items:[{name:"Lomo de cerdo",g:200},{name:"Patata cocida",g:220},{name:"Tomate",g:80}] },
  { name:"Cerdo al horno con batata y espinacas",        category:"comida", kcal:540, protein:42, carbs:48, fat:12, cost:2.00, prep:35, mainProt:"cerdo",    taste:"savory",
    items:[{name:"Lomo de cerdo",g:200},{name:"Batata",g:200},{name:"Espinacas",g:80}] },
  { name:"Ternera salteada con pasta y tomate",          category:"comida", kcal:570, protein:44, carbs:60, fat:11, cost:2.50, prep:20, mainProt:"ternera",  taste:"savory",
    items:[{name:"Ternera magra",g:180},{name:"Pasta cocida",g:230},{name:"Tomate",g:100}] },

  // — Pescado —
  { name:"Salmón con patatas al horno y brócoli",        category:"comida", kcal:570, protein:42, carbs:46, fat:20, cost:3.20, prep:30, mainProt:"salmon",   taste:"savory",
    items:[{name:"Salmón",g:200},{name:"Patata cocida",g:200},{name:"Brócoli",g:150}] },
  { name:"Salmón con cuscús y verduras salteadas",       category:"comida", kcal:560, protein:40, carbs:48, fat:18, cost:3.10, prep:20, mainProt:"salmon",   taste:"savory",
    items:[{name:"Salmón",g:200},{name:"Cuscús cocido",g:200},{name:"Verduras congeladas salteado",g:120}] },
  { name:"Poke bowl de salmón con arroz y aguacate",     category:"comida", kcal:590, protein:38, carbs:52, fat:20, cost:3.40, prep:15, mainProt:"salmon",   taste:"savory",
    items:[{name:"Salmón",g:180},{name:"Arroz blanco cocido",g:200},{name:"Aguacate",g:60},{name:"Pepino",g:60}] },
  { name:"Merluza al horno con arroz y limón",           category:"comida", kcal:490, protein:44, carbs:54, fat:5,  cost:2.50, prep:25, mainProt:"merluza",  taste:"savory",
    items:[{name:"Merluza",g:220},{name:"Arroz blanco cocido",g:220},{name:"Espinacas",g:60}] },
  { name:"Bacalao al pil-pil con patatas",               category:"comida", kcal:500, protein:42, carbs:50, fat:8,  cost:2.70, prep:30, mainProt:"merluza",  taste:"savory",
    items:[{name:"Bacalao",g:220},{name:"Patata cocida",g:220},{name:"Tomate",g:60}] },
  { name:"Pasta con atún y tomate",                      category:"comida", kcal:530, protein:38, carbs:65, fat:7,  cost:1.80, prep:15, mainProt:"atun",     taste:"savory",
    items:[{name:"Atún al natural",g:160},{name:"Pasta cocida",g:230},{name:"Tomate",g:100}] },
  { name:"Bowl de arroz con atún y aguacate",            category:"comida", kcal:520, protein:36, carbs:52, fat:14, cost:2.00, prep:10, mainProt:"atun",     taste:"savory",
    items:[{name:"Atún al natural",g:160},{name:"Arroz blanco cocido",g:220},{name:"Aguacate",g:60},{name:"Pepino",g:60}] },
  { name:"Ensalada de atún con quinoa y tomate",         category:"comida", kcal:490, protein:36, carbs:44, fat:10, cost:1.90, prep:10, mainProt:"atun",     taste:"savory",
    items:[{name:"Atún al natural",g:160},{name:"Quinoa cocida",g:180},{name:"Tomate",g:80},{name:"Pepino",g:60}] },

  // — Legumbres —
  { name:"Lentejas con verduras y arroz",                category:"comida", kcal:510, protein:28, carbs:78, fat:4,  cost:1.20, prep:20, mainProt:"legumbre", taste:"savory",
    items:[{name:"Lentejas cocidas",g:250},{name:"Arroz blanco cocido",g:180},{name:"Zanahoria",g:80}] },
  { name:"Ensalada mediterránea con garbanzos",          category:"comida", kcal:480, protein:22, carbs:58, fat:12, cost:1.30, prep:10, mainProt:"legumbre", taste:"savory",
    items:[{name:"Garbanzos cocidos",g:200},{name:"Tomate",g:100},{name:"Pepino",g:80},{name:"Aguacate",g:60}] },
  { name:"Garbanzos con pollo y espinacas",              category:"comida", kcal:530, protein:44, carbs:48, fat:8,  cost:2.10, prep:20, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:180},{name:"Garbanzos cocidos",g:150},{name:"Espinacas",g:80}] },
  { name:"Alubias con carne picada y verduras",          category:"comida", kcal:540, protein:38, carbs:54, fat:10, cost:2.00, prep:25, mainProt:"ternera",  taste:"savory",
    items:[{name:"Alubias cocidas",g:200},{name:"Carne picada 5% grasa",g:150},{name:"Zanahoria",g:80}] },
  { name:"Hummus con wrap proteico y verduras",          category:"comida", kcal:460, protein:24, carbs:52, fat:12, cost:1.60, prep:5,  mainProt:"legumbre", taste:"savory",
    items:[{name:"Hummus",g:120},{name:"Wrap proteico",g:80},{name:"Zanahoria",g:80},{name:"Pepino",g:80}] },

  // — Tofu & plant-based —
  { name:"Tofu salteado con arroz y verduras",           category:"comida", kcal:480, protein:28, carbs:58, fat:10, cost:1.70, prep:20, mainProt:"tofu",     taste:"savory",
    items:[{name:"Tofu firme",g:200},{name:"Arroz blanco cocido",g:200},{name:"Verduras congeladas salteado",g:130}] },
  { name:"Tempeh con quinoa y brócoli",                  category:"comida", kcal:520, protein:36, carbs:48, fat:14, cost:2.20, prep:20, mainProt:"tofu",     taste:"savory",
    items:[{name:"Tempeh",g:180},{name:"Quinoa cocida",g:180},{name:"Brócoli",g:150}] },

  // — Especiales —
  { name:"Quinoa con verduras asadas y pollo",           category:"comida", kcal:540, protein:46, carbs:48, fat:10, cost:2.40, prep:30, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:180},{name:"Quinoa cocida",g:200},{name:"Verduras congeladas salteado",g:120}] },
  { name:"Arroz integral con atún y maíz",               category:"comida", kcal:510, protein:34, carbs:62, fat:7,  cost:1.80, prep:10, mainProt:"atun",     taste:"savory",
    items:[{name:"Atún al natural",g:150},{name:"Arroz integral cocido",g:220},{name:"Maíz dulce",g:70}] },
  { name:"Ensalada de pasta con pavo y queso",           category:"comida", kcal:520, protein:38, carbs:58, fat:10, cost:2.10, prep:15, mainProt:"pavo",     taste:"savory",
    items:[{name:"Pasta cocida",g:200},{name:"Pavo loncheado",g:120},{name:"Queso light",g:40},{name:"Tomate",g:80}] },
  { name:"Cuscús con sardinas y tomate",                 category:"comida", kcal:490, protein:36, carbs:52, fat:12, cost:1.60, prep:10, mainProt:"salmon",   taste:"savory",
    items:[{name:"Cuscús cocido",g:220},{name:"Sardinas en lata",g:130},{name:"Tomate",g:80}] },
  { name:"Bowl de arroz con caballa y verduras",         category:"comida", kcal:500, protein:38, carbs:54, fat:12, cost:1.70, prep:10, mainProt:"salmon",   taste:"savory",
    items:[{name:"Arroz blanco cocido",g:220},{name:"Caballa en lata",g:130},{name:"Verduras congeladas salteado",g:100}] },

  // ══════════════════════════════════════════════════════
  //  CENAS  (70 platos)
  // ══════════════════════════════════════════════════════

  // — Pollo —
  { name:"Pechuga de pollo a la plancha con ensalada",   category:"cena", kcal:380, protein:44, carbs:12, fat:10, cost:1.80, prep:15, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:200},{name:"Tomate",g:80},{name:"Pepino",g:80},{name:"Espinacas",g:60}] },
  { name:"Pollo al limón con batata y brócoli",          category:"cena", kcal:450, protein:44, carbs:42, fat:9,  cost:2.00, prep:25, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:200},{name:"Batata",g:180},{name:"Brócoli",g:130}] },
  { name:"Muslos de pollo al horno con cuscús",          category:"cena", kcal:490, protein:42, carbs:44, fat:14, cost:1.90, prep:35, mainProt:"pollo",    taste:"savory",
    items:[{name:"Muslo de pollo deshuesado",g:200},{name:"Cuscús cocido",g:180},{name:"Brócoli",g:100}] },
  { name:"Pollo tikka masala con arroz integral",        category:"cena", kcal:500, protein:44, carbs:48, fat:10, cost:2.20, prep:25, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:200},{name:"Arroz integral cocido",g:200},{name:"Verduras congeladas salteado",g:80}] },
  { name:"Pechuga de pollo empapelada con verduras",     category:"cena", kcal:400, protein:44, carbs:18, fat:10, cost:1.90, prep:25, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:200},{name:"Verduras congeladas salteado",g:150},{name:"Tomate",g:60}] },

  // — Pavo —
  { name:"Pavo salteado con pasta y espinacas",          category:"cena", kcal:480, protein:42, carbs:52, fat:8,  cost:2.00, prep:20, mainProt:"pavo",     taste:"savory",
    items:[{name:"Pechuga de pavo",g:180},{name:"Pasta cocida",g:180},{name:"Espinacas",g:80}] },
  { name:"Hamburguesa de pavo con ensalada",             category:"cena", kcal:430, protein:40, carbs:28, fat:12, cost:1.90, prep:15, mainProt:"pavo",     taste:"savory",
    items:[{name:"Pechuga de pavo",g:200},{name:"Pan integral",g:60},{name:"Tomate",g:80},{name:"Espinacas",g:40}] },
  { name:"Pavo con quinoa y champiñones",                category:"cena", kcal:470, protein:42, carbs:44, fat:8,  cost:2.10, prep:20, mainProt:"pavo",     taste:"savory",
    items:[{name:"Pechuga de pavo",g:180},{name:"Quinoa cocida",g:180},{name:"Verduras congeladas salteado",g:100}] },

  // — Pescado —
  { name:"Salmón a la plancha con espinacas y limón",    category:"cena", kcal:420, protein:38, carbs:8,  fat:24, cost:2.90, prep:15, mainProt:"salmon",   taste:"savory",
    items:[{name:"Salmón",g:200},{name:"Espinacas",g:150},{name:"Brócoli",g:100}] },
  { name:"Salmón con patata y brócoli al vapor",         category:"cena", kcal:480, protein:38, carbs:38, fat:18, cost:3.00, prep:25, mainProt:"salmon",   taste:"savory",
    items:[{name:"Salmón",g:200},{name:"Patata cocida",g:180},{name:"Brócoli",g:120}] },
  { name:"Merluza al vapor con verduras",                category:"cena", kcal:360, protein:42, carbs:18, fat:5,  cost:2.20, prep:20, mainProt:"merluza",  taste:"savory",
    items:[{name:"Merluza",g:230},{name:"Verduras congeladas salteado",g:150},{name:"Patata cocida",g:100}] },
  { name:"Merluza a la plancha con arroz y limón",       category:"cena", kcal:420, protein:42, carbs:42, fat:5,  cost:2.30, prep:20, mainProt:"merluza",  taste:"savory",
    items:[{name:"Merluza",g:230},{name:"Arroz blanco cocido",g:180},{name:"Espinacas",g:60}] },
  { name:"Sardinas al horno con ensalada",               category:"cena", kcal:370, protein:36, carbs:12, fat:18, cost:1.50, prep:15, mainProt:"salmon",   taste:"savory",
    items:[{name:"Sardinas en lata",g:180},{name:"Tomate",g:100},{name:"Pepino",g:80},{name:"Pan integral",g:40}] },
  { name:"Caballa con patata cocida y verduras",         category:"cena", kcal:400, protein:34, carbs:38, fat:12, cost:1.60, prep:15, mainProt:"salmon",   taste:"savory",
    items:[{name:"Caballa en lata",g:160},{name:"Patata cocida",g:180},{name:"Espinacas",g:80}] },
  { name:"Revuelto de atún con claras y tostadas",       category:"cena", kcal:380, protein:38, carbs:30, fat:8,  cost:1.60, prep:10, mainProt:"atun",     taste:"savory",
    items:[{name:"Atún al natural",g:120},{name:"Claras de huevo",g:150},{name:"Pan integral",g:60}] },
  { name:"Ensalada templada de atún con quinoa",         category:"cena", kcal:420, protein:36, carbs:38, fat:9,  cost:1.80, prep:10, mainProt:"atun",     taste:"savory",
    items:[{name:"Atún al natural",g:150},{name:"Quinoa cocida",g:160},{name:"Tomate",g:80},{name:"Espinacas",g:60}] },
  { name:"Bacalao con espinacas y patata",               category:"cena", kcal:400, protein:40, carbs:40, fat:5,  cost:2.40, prep:25, mainProt:"merluza",  taste:"savory",
    items:[{name:"Bacalao",g:230},{name:"Patata cocida",g:180},{name:"Espinacas",g:80}] },

  // — Ternera & cerdo —
  { name:"Filete de ternera con ensalada y brócoli",     category:"cena", kcal:430, protein:44, carbs:14, fat:18, cost:2.90, prep:15, mainProt:"ternera",  taste:"savory",
    items:[{name:"Ternera magra",g:200},{name:"Brócoli",g:150},{name:"Tomate",g:80}] },
  { name:"Solomillo de cerdo con cuscús y verduras",     category:"cena", kcal:470, protein:40, carbs:46, fat:10, cost:2.00, prep:20, mainProt:"cerdo",    taste:"savory",
    items:[{name:"Lomo de cerdo",g:200},{name:"Cuscús cocido",g:180},{name:"Verduras congeladas salteado",g:100}] },
  { name:"Carne picada con brócoli y arroz",             category:"cena", kcal:510, protein:42, carbs:50, fat:11, cost:2.10, prep:20, mainProt:"ternera",  taste:"savory",
    items:[{name:"Carne picada 5% grasa",g:190},{name:"Arroz blanco cocido",g:200},{name:"Brócoli",g:130}] },
  { name:"Lomo de cerdo asado con batata",               category:"cena", kcal:470, protein:40, carbs:44, fat:10, cost:2.00, prep:30, mainProt:"cerdo",    taste:"savory",
    items:[{name:"Lomo de cerdo",g:200},{name:"Batata",g:200},{name:"Espinacas",g:60}] },

  // — Huevos —
  { name:"Tortilla española con ensalada",               category:"cena", kcal:420, protein:26, carbs:30, fat:18, cost:1.20, prep:20, mainProt:"huevo",    taste:"savory",
    items:[{name:"Huevos enteros",g:200},{name:"Patata cocida",g:150},{name:"Tomate",g:80},{name:"Pepino",g:60}] },
  { name:"Tortilla de claras con pavo y queso",          category:"cena", kcal:360, protein:38, carbs:8,  fat:14, cost:1.50, prep:12, mainProt:"huevo",    taste:"savory",
    items:[{name:"Claras de huevo",g:220},{name:"Pavo loncheado",g:80},{name:"Queso light",g:30}] },
  { name:"Huevos al plato con espinacas y tomate",       category:"cena", kcal:320, protein:24, carbs:12, fat:16, cost:1.00, prep:12, mainProt:"huevo",    taste:"savory",
    items:[{name:"Huevos enteros",g:180},{name:"Espinacas",g:100},{name:"Tomate",g:100}] },
  { name:"Shakshuka ligera con tostadas",                category:"cena", kcal:380, protein:22, carbs:36, fat:14, cost:1.10, prep:15, mainProt:"huevo",    taste:"savory",
    items:[{name:"Huevos enteros",g:150},{name:"Tomate",g:150},{name:"Pan integral",g:60}] },
  { name:"Revuelto de huevos con verduras y jamón",      category:"cena", kcal:360, protein:28, carbs:12, fat:18, cost:1.30, prep:12, mainProt:"huevo",    taste:"savory",
    items:[{name:"Huevos enteros",g:180},{name:"Jamón cocido extra",g:60},{name:"Verduras congeladas salteado",g:100}] },

  // — Legumbres & vegetariano —
  { name:"Lentejas con verduras y huevo duro",           category:"cena", kcal:450, protein:28, carbs:56, fat:8,  cost:1.10, prep:20, mainProt:"legumbre", taste:"savory",
    items:[{name:"Lentejas cocidas",g:250},{name:"Zanahoria",g:80},{name:"Huevos enteros",g:60}] },
  { name:"Crema de lentejas con pan integral",           category:"cena", kcal:390, protein:22, carbs:56, fat:5,  cost:1.00, prep:20, mainProt:"legumbre", taste:"savory",
    items:[{name:"Lentejas cocidas",g:250},{name:"Zanahoria",g:100},{name:"Pan integral",g:40}] },
  { name:"Garbanzos con espinacas y huevo",              category:"cena", kcal:430, protein:26, carbs:50, fat:10, cost:1.10, prep:15, mainProt:"legumbre", taste:"savory",
    items:[{name:"Garbanzos cocidos",g:200},{name:"Espinacas",g:100},{name:"Huevos enteros",g:80}] },
  { name:"Tofu a la plancha con verduras y arroz",       category:"cena", kcal:430, protein:26, carbs:50, fat:10, cost:1.60, prep:20, mainProt:"tofu",     taste:"savory",
    items:[{name:"Tofu firme",g:200},{name:"Arroz blanco cocido",g:180},{name:"Verduras congeladas salteado",g:130}] },
  { name:"Edamame con arroz y huevo al vapor",           category:"cena", kcal:430, protein:30, carbs:52, fat:10, cost:1.50, prep:15, mainProt:"tofu",     taste:"savory",
    items:[{name:"Edamame",g:150},{name:"Arroz blanco cocido",g:200},{name:"Huevos enteros",g:80}] },

  // — Rápidas & ligeras —
  { name:"Ensalada de queso fresco con atún",            category:"cena", kcal:350, protein:36, carbs:12, fat:12, cost:1.60, prep:5,  mainProt:"atun",     taste:"savory",
    items:[{name:"Atún al natural",g:150},{name:"Queso fresco batido 0%",g:150},{name:"Tomate",g:100},{name:"Pepino",g:80}] },
  { name:"Sandwich integral de pavo y queso",            category:"cena", kcal:390, protein:30, carbs:42, fat:8,  cost:1.40, prep:5,  mainProt:"pavo",     taste:"savory",
    items:[{name:"Pan de molde integral",g:90},{name:"Pavo loncheado",g:100},{name:"Queso light",g:40},{name:"Tomate",g:60}] },
  { name:"Ensalada caprese con jamón",                   category:"cena", kcal:360, protein:28, carbs:10, fat:18, cost:1.80, prep:5,  mainProt:"queso",    taste:"savory",
    items:[{name:"Mozzarella light",g:120},{name:"Jamón cocido extra",g:80},{name:"Tomate",g:150}] },
  { name:"Skyr con sardinas y tostadas",                 category:"cena", kcal:380, protein:34, carbs:32, fat:10, cost:1.40, prep:5,  mainProt:"salmon",   taste:"savory",
    items:[{name:"Sardinas en lata",g:130},{name:"Pan integral",g:70},{name:"Tomate",g:80}] },

  // ══════════════════════════════════════════════════════
  //  SNACKS  (60 platos)
  // ══════════════════════════════════════════════════════

  // — Lácteos —
  { name:"Yogur griego con frutos secos y miel",         category:"snack", kcal:260, protein:16, carbs:22, fat:10, cost:0.90, prep:2,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Yogur griego ligero",g:200},{name:"Almendras",g:20},{name:"Miel",g:10}] },
  { name:"Skyr con frutos rojos",                        category:"snack", kcal:200, protein:16, carbs:24, fat:2,  cost:1.00, prep:2,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Skyr natural",g:200},{name:"Frutos rojos congelados",g:80}] },
  { name:"Requesón con nueces y plátano",                category:"snack", kcal:250, protein:14, carbs:22, fat:10, cost:0.90, prep:2,  mainProt:"queso",    taste:"sweet",
    items:[{name:"Requesón",g:150},{name:"Nueces",g:20},{name:"Plátano",g:60}] },
  { name:"Queso fresco con mermelada y tostadas",        category:"snack", kcal:230, protein:14, carbs:30, fat:4,  cost:0.70, prep:2,  mainProt:"queso",    taste:"sweet",
    items:[{name:"Queso fresco batido 0%",g:150},{name:"Mermelada light",g:20},{name:"Tortitas de arroz",g:30}] },
  { name:"Batido proteico de yogur con plátano",         category:"snack", kcal:270, protein:18, carbs:34, fat:4,  cost:0.85, prep:3,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Yogur griego ligero",g:200},{name:"Plátano",g:100}] },
  { name:"Skyr con manzana y canela",                    category:"snack", kcal:210, protein:14, carbs:28, fat:2,  cost:0.90, prep:2,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Skyr natural",g:180},{name:"Manzana",g:100}] },

  // — Frutos secos & barras —
  { name:"Almendras y manzana",                          category:"snack", kcal:240, protein:8,  carbs:26, fat:12, cost:0.70, prep:1,  mainProt:"cacahuete",taste:"mixed",
    items:[{name:"Almendras",g:25},{name:"Manzana",g:150}] },
  { name:"Cacahuetes con plátano",                       category:"snack", kcal:260, protein:10, carbs:28, fat:12, cost:0.55, prep:1,  mainProt:"cacahuete",taste:"mixed",
    items:[{name:"Cacahuetes",g:25},{name:"Plátano",g:100}] },
  { name:"Nueces y naranja",                             category:"snack", kcal:230, protein:6,  carbs:24, fat:14, cost:0.65, prep:1,  mainProt:"cacahuete",taste:"mixed",
    items:[{name:"Nueces",g:20},{name:"Naranja",g:150}] },
  { name:"Mantequilla de cacahuete con tortitas",        category:"snack", kcal:250, protein:8,  carbs:28, fat:12, cost:0.60, prep:2,  mainProt:"cacahuete",taste:"sweet",
    items:[{name:"Mantequilla de cacahuete",g:25},{name:"Tortitas de arroz",g:40}] },
  { name:"Almendras con frutos rojos",                   category:"snack", kcal:200, protein:7,  carbs:18, fat:12, cost:0.90, prep:1,  mainProt:"cacahuete",taste:"mixed",
    items:[{name:"Almendras",g:20},{name:"Frutos rojos congelados",g:80}] },

  // — Proteína & salados —
  { name:"Atún con tostadas integrales",                 category:"snack", kcal:240, protein:24, carbs:22, fat:4,  cost:1.10, prep:3,  mainProt:"atun",     taste:"savory",
    items:[{name:"Atún al natural",g:100},{name:"Pan integral",g:50}] },
  { name:"Pavo loncheado con queso y tortitas",          category:"snack", kcal:220, protein:22, carbs:16, fat:6,  cost:1.10, prep:2,  mainProt:"pavo",     taste:"savory",
    items:[{name:"Pavo loncheado",g:80},{name:"Queso light",g:30},{name:"Tortitas de arroz",g:30}] },
  { name:"Jamón cocido con mozzarella",                  category:"snack", kcal:210, protein:24, carbs:4,  fat:10, cost:1.20, prep:2,  mainProt:"pavo",     taste:"savory",
    items:[{name:"Jamón cocido extra",g:80},{name:"Mozzarella light",g:60}] },
  { name:"Huevo duro con sal y tortita",                 category:"snack", kcal:200, protein:16, carbs:18, fat:8,  cost:0.50, prep:10, mainProt:"huevo",    taste:"savory",
    items:[{name:"Huevos enteros",g:120},{name:"Tortitas de arroz",g:30}] },
  { name:"Sardinas con pan integral",                    category:"snack", kcal:230, protein:20, carbs:22, fat:8,  cost:0.90, prep:2,  mainProt:"salmon",   taste:"savory",
    items:[{name:"Sardinas en lata",g:100},{name:"Pan integral",g:50}] },
  { name:"Caballa en lata con tostadas",                 category:"snack", kcal:240, protein:20, carbs:20, fat:8,  cost:0.85, prep:2,  mainProt:"salmon",   taste:"savory",
    items:[{name:"Caballa en lata",g:100},{name:"Pan integral",g:50}] },
  { name:"Queso fresco con jamón y pepino",              category:"snack", kcal:200, protein:22, carbs:6,  fat:8,  cost:1.00, prep:3,  mainProt:"queso",    taste:"savory",
    items:[{name:"Queso fresco batido 0%",g:150},{name:"Jamón cocido extra",g:60},{name:"Pepino",g:80}] },
  { name:"Edamame con sal",                              category:"snack", kcal:180, protein:14, carbs:12, fat:6,  cost:0.70, prep:6,  mainProt:"tofu",     taste:"savory",
    items:[{name:"Edamame",g:150}] },
  { name:"Hummus con zanahoria y pepino",                category:"snack", kcal:200, protein:8,  carbs:22, fat:8,  cost:0.80, prep:3,  mainProt:"legumbre", taste:"savory",
    items:[{name:"Hummus",g:80},{name:"Zanahoria",g:80},{name:"Pepino",g:80}] },
  { name:"Queso light con tomate cherry",                category:"snack", kcal:190, protein:22, carbs:6,  fat:8,  cost:0.95, prep:2,  mainProt:"queso",    taste:"savory",
    items:[{name:"Queso light",g:60},{name:"Tomate",g:120}] },
  { name:"Requesón con cacahuetes y miel",               category:"snack", kcal:260, protein:16, carbs:20, fat:12, cost:0.85, prep:2,  mainProt:"queso",    taste:"sweet",
    items:[{name:"Requesón",g:150},{name:"Cacahuetes",g:15},{name:"Miel",g:10}] },
  { name:"Batido de skyr con fruta y avena",             category:"snack", kcal:280, protein:18, carbs:38, fat:4,  cost:1.10, prep:3,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Skyr natural",g:180},{name:"Plátano",g:80},{name:"Avena",g:20}] },
  { name:"Yogur griego con semillas y fruta",            category:"snack", kcal:250, protein:16, carbs:26, fat:8,  cost:0.95, prep:2,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Yogur griego ligero",g:200},{name:"Naranja",g:100},{name:"Almendras",g:10}] },
  { name:"Pan de molde con queso fresco y pavo",         category:"snack", kcal:240, protein:22, carbs:24, fat:5,  cost:1.00, prep:2,  mainProt:"pavo",     taste:"savory",
    items:[{name:"Pan de molde integral",g:60},{name:"Queso fresco batido 0%",g:80},{name:"Pavo loncheado",g:50}] },

  // ══════════════════════════════════════════════════════
  //  DESAYUNOS ADICIONALES
  // ══════════════════════════════════════════════════════
  { name:"Tortilla de claras con champiñones y tomate",  category:"desayuno", kcal:280, protein:28, carbs:10, fat:10, cost:0.90, prep:12, mainProt:"huevo",    taste:"savory",
    items:[{name:"Claras de huevo",g:200},{name:"Verduras congeladas salteado",g:80},{name:"Tomate",g:80}] },
  { name:"Pan integral con atún y queso fresco",         category:"desayuno", kcal:360, protein:30, carbs:36, fat:7,  cost:1.20, prep:5,  mainProt:"atun",     taste:"savory",
    items:[{name:"Pan integral",g:80},{name:"Atún al natural",g:80},{name:"Queso fresco batido 0%",g:80}] },
  { name:"Bol de cereales con leche y fruta",            category:"desayuno", kcal:370, protein:12, carbs:62, fat:6,  cost:0.65, prep:2,  mainProt:"avena",    taste:"sweet",
    items:[{name:"Copos de maíz",g:60},{name:"Leche semidesnatada",g:250},{name:"Plátano",g:100}] },
  { name:"Yogur griego con avena y manzana",             category:"desayuno", kcal:380, protein:18, carbs:52, fat:6,  cost:0.90, prep:3,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Yogur griego ligero",g:200},{name:"Avena",g:40},{name:"Manzana",g:100}] },
  { name:"Tortitas de arroz con mantequilla de cacahuete", category:"desayuno", kcal:340, protein:10, carbs:44, fat:14, cost:0.60, prep:2, mainProt:"cacahuete", taste:"sweet",
    items:[{name:"Tortitas de arroz",g:60},{name:"Mantequilla de cacahuete",g:30},{name:"Plátano",g:60}] },
  { name:"Skyr con piña y frutos secos",                 category:"desayuno", kcal:340, protein:20, carbs:36, fat:10, cost:1.10, prep:3,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Skyr natural",g:180},{name:"Piña",g:100},{name:"Nueces",g:20}] },
  { name:"Tostadas con salmón y queso fresco",           category:"desayuno", kcal:400, protein:28, carbs:38, fat:12, cost:1.90, prep:5,  mainProt:"salmon",   taste:"savory",
    items:[{name:"Pan integral",g:80},{name:"Salmón",g:80},{name:"Queso fresco batido 0%",g:60}] },
  { name:"Wrap de desayuno con claras y aguacate",       category:"desayuno", kcal:370, protein:24, carbs:34, fat:12, cost:1.10, prep:10, mainProt:"huevo",    taste:"savory",
    items:[{name:"Tortillas de trigo",g:70},{name:"Claras de huevo",g:160},{name:"Aguacate",g:60}] },
  { name:"Bowl proteico de skyr con almendras",          category:"desayuno", kcal:320, protein:22, carbs:28, fat:12, cost:1.10, prep:2,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Skyr natural",g:200},{name:"Almendras",g:25},{name:"Frutos rojos congelados",g:60}] },
  { name:"Queso fresco batido con copos y naranja",      category:"desayuno", kcal:320, protein:16, carbs:44, fat:5,  cost:0.75, prep:3,  mainProt:"queso",    taste:"sweet",
    items:[{name:"Queso fresco batido 0%",g:200},{name:"Granola",g:40},{name:"Naranja",g:120}] },
  { name:"Pan tostado con hummus y tomate",              category:"desayuno", kcal:310, protein:12, carbs:42, fat:8,  cost:0.80, prep:5,  mainProt:"legumbre", taste:"savory",
    items:[{name:"Pan integral",g:80},{name:"Hummus",g:60},{name:"Tomate",g:80}] },
  { name:"Revuelto de huevos con jamón y pan",           category:"desayuno", kcal:420, protein:30, carbs:32, fat:16, cost:1.00, prep:10, mainProt:"huevo",    taste:"savory",
    items:[{name:"Huevos enteros",g:160},{name:"Jamón cocido extra",g:60},{name:"Pan de molde integral",g:60}] },
  { name:"Porridge de avena con nueces y canela",        category:"desayuno", kcal:400, protein:16, carbs:60, fat:10, cost:0.80, prep:5,  mainProt:"avena",    taste:"sweet",
    items:[{name:"Avena",g:80},{name:"Nueces",g:20},{name:"Leche semidesnatada",g:200}] },
  { name:"Claras con espinacas y queso",                 category:"desayuno", kcal:260, protein:26, carbs:6,  fat:12, cost:0.95, prep:10, mainProt:"huevo",    taste:"savory",
    items:[{name:"Claras de huevo",g:200},{name:"Espinacas",g:80},{name:"Queso light",g:30}] },

  // ══════════════════════════════════════════════════════
  //  COMIDAS ADICIONALES
  // ══════════════════════════════════════════════════════
  { name:"Pollo a la naranja con arroz integral",        category:"comida", kcal:550, protein:46, carbs:58, fat:9,  cost:2.20, prep:25, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:200},{name:"Arroz integral cocido",g:200},{name:"Zanahoria",g:80}] },
  { name:"Pollo en salsa de yogur con cuscús",           category:"comida", kcal:530, protein:46, carbs:52, fat:8,  cost:2.20, prep:20, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:200},{name:"Cuscús cocido",g:200},{name:"Espinacas",g:60}] },
  { name:"Pollo con fideos y brócoli",                   category:"comida", kcal:520, protein:44, carbs:54, fat:8,  cost:2.10, prep:20, mainProt:"pollo",    taste:"savory",
    items:[{name:"Muslo de pollo deshuesado",g:180},{name:"Pasta cocida",g:200},{name:"Brócoli",g:120}] },
  { name:"Ensalada de pollo con aguacate y quinoa",      category:"comida", kcal:540, protein:44, carbs:38, fat:16, cost:2.60, prep:15, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:180},{name:"Quinoa cocida",g:160},{name:"Aguacate",g:70},{name:"Espinacas",g:60}] },
  { name:"Pavo con pasta integral y tomate",             category:"comida", kcal:540, protein:42, carbs:64, fat:7,  cost:2.10, prep:20, mainProt:"pavo",     taste:"savory",
    items:[{name:"Pechuga de pavo",g:180},{name:"Pasta cocida",g:220},{name:"Tomate",g:100}] },
  { name:"Salmón teriyaki con arroz integral",           category:"comida", kcal:580, protein:42, carbs:56, fat:18, cost:3.20, prep:20, mainProt:"salmon",   taste:"savory",
    items:[{name:"Salmón",g:200},{name:"Arroz integral cocido",g:220},{name:"Verduras congeladas salteado",g:80}] },
  { name:"Salmón con espinacas y pasta",                 category:"comida", kcal:570, protein:40, carbs:56, fat:18, cost:3.00, prep:20, mainProt:"salmon",   taste:"savory",
    items:[{name:"Salmón",g:180},{name:"Pasta cocida",g:200},{name:"Espinacas",g:80}] },
  { name:"Atún con arroz y maíz dulce",                  category:"comida", kcal:510, protein:36, carbs:62, fat:7,  cost:1.80, prep:10, mainProt:"atun",     taste:"savory",
    items:[{name:"Atún al natural",g:160},{name:"Arroz blanco cocido",g:220},{name:"Maíz dulce",g:60}] },
  { name:"Ensalada templada con atún y garbanzos",       category:"comida", kcal:490, protein:36, carbs:46, fat:10, cost:1.90, prep:10, mainProt:"atun",     taste:"savory",
    items:[{name:"Atún al natural",g:150},{name:"Garbanzos cocidos",g:150},{name:"Tomate",g:80}] },
  { name:"Pasta con sardinas y tomate",                  category:"comida", kcal:520, protein:34, carbs:64, fat:12, cost:1.70, prep:15, mainProt:"salmon",   taste:"savory",
    items:[{name:"Sardinas en lata",g:130},{name:"Pasta cocida",g:230},{name:"Tomate",g:100}] },
  { name:"Ternera con patata y espinacas",               category:"comida", kcal:550, protein:46, carbs:48, fat:12, cost:2.80, prep:25, mainProt:"ternera",  taste:"savory",
    items:[{name:"Ternera magra",g:200},{name:"Patata cocida",g:220},{name:"Espinacas",g:80}] },
  { name:"Carne picada al wok con arroz",                category:"comida", kcal:560, protein:44, carbs:58, fat:11, cost:2.20, prep:20, mainProt:"ternera",  taste:"savory",
    items:[{name:"Carne picada 5% grasa",g:190},{name:"Arroz blanco cocido",g:220},{name:"Verduras congeladas salteado",g:100}] },
  { name:"Cerdo con cuscús y zanahoria",                 category:"comida", kcal:530, protein:40, carbs:52, fat:10, cost:2.00, prep:25, mainProt:"cerdo",    taste:"savory",
    items:[{name:"Lomo de cerdo",g:190},{name:"Cuscús cocido",g:200},{name:"Zanahoria",g:80}] },
  { name:"Bocadillo integral de atún y tomate",          category:"comida", kcal:490, protein:34, carbs:58, fat:8,  cost:1.50, prep:5,  mainProt:"atun",     taste:"savory",
    items:[{name:"Pan integral",g:100},{name:"Atún al natural",g:150},{name:"Tomate",g:80}] },
  { name:"Merluza con quinoa y tomate",                  category:"comida", kcal:480, protein:44, carbs:46, fat:6,  cost:2.50, prep:20, mainProt:"merluza",  taste:"savory",
    items:[{name:"Merluza",g:220},{name:"Quinoa cocida",g:180},{name:"Tomate",g:80}] },
  { name:"Bacalao con garbanzos y espinacas",            category:"comida", kcal:500, protein:44, carbs:48, fat:7,  cost:2.60, prep:20, mainProt:"merluza",  taste:"savory",
    items:[{name:"Bacalao",g:200},{name:"Garbanzos cocidos",g:180},{name:"Espinacas",g:80}] },
  { name:"Poke bowl de tempeh con arroz y aguacate",     category:"comida", kcal:560, protein:32, carbs:58, fat:18, cost:2.30, prep:15, mainProt:"tofu",     taste:"savory",
    items:[{name:"Tempeh",g:180},{name:"Arroz blanco cocido",g:200},{name:"Aguacate",g:70},{name:"Pepino",g:60}] },
  { name:"Sopa de lentejas con pan integral",            category:"comida", kcal:440, protein:24, carbs:66, fat:4,  cost:1.10, prep:20, mainProt:"legumbre", taste:"savory",
    items:[{name:"Lentejas cocidas",g:250},{name:"Zanahoria",g:80},{name:"Pan integral",g:60}] },
  { name:"Wrap de salmón con aguacate y espinacas",      category:"comida", kcal:530, protein:36, carbs:38, fat:22, cost:3.00, prep:10, mainProt:"salmon",   taste:"savory",
    items:[{name:"Salmón",g:160},{name:"Wrap proteico",g:80},{name:"Aguacate",g:70},{name:"Espinacas",g:60}] },
  { name:"Macarrones con atún y verduras",               category:"comida", kcal:520, protein:34, carbs:66, fat:8,  cost:1.80, prep:15, mainProt:"atun",     taste:"savory",
    items:[{name:"Atún al natural",g:140},{name:"Pasta cocida",g:240},{name:"Verduras congeladas salteado",g:100}] },
  { name:"Arroz con pollo y pimiento",                   category:"comida", kcal:540, protein:44, carbs:58, fat:8,  cost:2.10, prep:25, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:190},{name:"Arroz blanco cocido",g:220},{name:"Maíz dulce",g:60}] },
  { name:"Bocadillo de pavo con queso y verduras",       category:"comida", kcal:480, protein:36, carbs:50, fat:10, cost:1.80, prep:5,  mainProt:"pavo",     taste:"savory",
    items:[{name:"Pan integral",g:90},{name:"Pechuga de pavo",g:120},{name:"Queso light",g:40},{name:"Tomate",g:60}] },

  // ══════════════════════════════════════════════════════
  //  CENAS ADICIONALES
  // ══════════════════════════════════════════════════════
  { name:"Pechuga de pollo al vapor con quinoa",         category:"cena", kcal:440, protein:46, carbs:40, fat:8,  cost:2.00, prep:20, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:200},{name:"Quinoa cocida",g:180},{name:"Brócoli",g:100}] },
  { name:"Pollo mediterráneo con cuscús y tomate",       category:"cena", kcal:470, protein:44, carbs:48, fat:8,  cost:2.10, prep:20, mainProt:"pollo",    taste:"savory",
    items:[{name:"Pechuga de pollo",g:200},{name:"Cuscús cocido",g:180},{name:"Tomate",g:80}] },
  { name:"Pollo asado con patata y brócoli",             category:"cena", kcal:490, protein:44, carbs:44, fat:10, cost:2.00, prep:30, mainProt:"pollo",    taste:"savory",
    items:[{name:"Muslo de pollo deshuesado",g:200},{name:"Patata cocida",g:180},{name:"Brócoli",g:120}] },
  { name:"Salmón horneado con quinoa y espinacas",       category:"cena", kcal:490, protein:40, carbs:38, fat:20, cost:3.10, prep:25, mainProt:"salmon",   taste:"savory",
    items:[{name:"Salmón",g:200},{name:"Quinoa cocida",g:160},{name:"Espinacas",g:100}] },
  { name:"Merluza al ajillo con verduras",               category:"cena", kcal:360, protein:40, carbs:16, fat:10, cost:2.20, prep:15, mainProt:"merluza",  taste:"savory",
    items:[{name:"Merluza",g:230},{name:"Verduras congeladas salteado",g:150},{name:"Tomate",g:80}] },
  { name:"Bacalao con espinacas y arroz",                category:"cena", kcal:420, protein:40, carbs:44, fat:5,  cost:2.30, prep:20, mainProt:"merluza",  taste:"savory",
    items:[{name:"Bacalao",g:200},{name:"Arroz blanco cocido",g:180},{name:"Espinacas",g:80}] },
  { name:"Atún con brócoli y patata",                    category:"cena", kcal:410, protein:36, carbs:44, fat:7,  cost:1.80, prep:15, mainProt:"atun",     taste:"savory",
    items:[{name:"Atún al natural",g:160},{name:"Brócoli",g:150},{name:"Patata cocida",g:160}] },
  { name:"Ternera salteada con espinacas",               category:"cena", kcal:400, protein:42, carbs:10, fat:18, cost:2.70, prep:15, mainProt:"ternera",  taste:"savory",
    items:[{name:"Ternera magra",g:200},{name:"Espinacas",g:150},{name:"Tomate",g:80}] },
  { name:"Carne picada con cuscús y zanahoria",          category:"cena", kcal:490, protein:40, carbs:50, fat:10, cost:2.10, prep:20, mainProt:"ternera",  taste:"savory",
    items:[{name:"Carne picada 5% grasa",g:180},{name:"Cuscús cocido",g:180},{name:"Zanahoria",g:80}] },
  { name:"Cerdo a la plancha con arroz y brócoli",       category:"cena", kcal:480, protein:40, carbs:46, fat:10, cost:1.90, prep:20, mainProt:"cerdo",    taste:"savory",
    items:[{name:"Lomo de cerdo",g:190},{name:"Arroz blanco cocido",g:180},{name:"Brócoli",g:130}] },
  { name:"Pavo al horno con quinoa y verduras",          category:"cena", kcal:460, protein:42, carbs:44, fat:8,  cost:2.10, prep:30, mainProt:"pavo",     taste:"savory",
    items:[{name:"Pechuga de pavo",g:190},{name:"Quinoa cocida",g:170},{name:"Verduras congeladas salteado",g:100}] },
  { name:"Tortilla de claras con atún y tomate",         category:"cena", kcal:320, protein:36, carbs:10, fat:10, cost:1.40, prep:10, mainProt:"atun",     taste:"savory",
    items:[{name:"Claras de huevo",g:200},{name:"Atún al natural",g:100},{name:"Tomate",g:80}] },
  { name:"Claras revueltas con pavo y espinacas",        category:"cena", kcal:300, protein:34, carbs:8,  fat:8,  cost:1.40, prep:10, mainProt:"huevo",    taste:"savory",
    items:[{name:"Claras de huevo",g:220},{name:"Pavo loncheado",g:80},{name:"Espinacas",g:100}] },
  { name:"Huevos rellenos de atún con ensalada",         category:"cena", kcal:350, protein:30, carbs:10, fat:18, cost:1.30, prep:15, mainProt:"huevo",    taste:"savory",
    items:[{name:"Huevos enteros",g:180},{name:"Atún al natural",g:80},{name:"Tomate",g:80},{name:"Pepino",g:60}] },
  { name:"Garbanzos al curry con espinacas",             category:"cena", kcal:400, protein:20, carbs:52, fat:10, cost:1.20, prep:20, mainProt:"legumbre", taste:"savory",
    items:[{name:"Garbanzos cocidos",g:220},{name:"Espinacas",g:100},{name:"Tomate",g:100}] },
  { name:"Tofu estofado con arroz y verduras",           category:"cena", kcal:420, protein:24, carbs:52, fat:10, cost:1.60, prep:20, mainProt:"tofu",     taste:"savory",
    items:[{name:"Tofu firme",g:200},{name:"Arroz blanco cocido",g:180},{name:"Verduras congeladas salteado",g:130}] },
  { name:"Caballa con patata y brócoli",                 category:"cena", kcal:380, protein:32, carbs:38, fat:11, cost:1.60, prep:15, mainProt:"salmon",   taste:"savory",
    items:[{name:"Caballa en lata",g:150},{name:"Patata cocida",g:180},{name:"Brócoli",g:120}] },
  { name:"Sardinas con tomate y arroz",                  category:"cena", kcal:390, protein:30, carbs:46, fat:10, cost:1.50, prep:10, mainProt:"salmon",   taste:"savory",
    items:[{name:"Sardinas en lata",g:130},{name:"Arroz blanco cocido",g:180},{name:"Tomate",g:80}] },

  // ══════════════════════════════════════════════════════
  //  SNACKS ADICIONALES
  // ══════════════════════════════════════════════════════
  { name:"Skyr con miel y almendras",                    category:"snack", kcal:230, protein:14, carbs:22, fat:8,  cost:1.00, prep:2,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Skyr natural",g:180},{name:"Almendras",g:15},{name:"Miel",g:10}] },
  { name:"Yogur griego con plátano y cacao",             category:"snack", kcal:240, protein:14, carbs:30, fat:6,  cost:0.80, prep:2,  mainProt:"yogur",    taste:"sweet",
    items:[{name:"Yogur griego ligero",g:180},{name:"Plátano",g:80}] },
  { name:"Requesón con piña",                            category:"snack", kcal:200, protein:14, carbs:22, fat:4,  cost:0.85, prep:2,  mainProt:"queso",    taste:"sweet",
    items:[{name:"Requesón",g:150},{name:"Piña",g:100}] },
  { name:"Tortitas con queso fresco y mermelada",        category:"snack", kcal:210, protein:12, carbs:28, fat:4,  cost:0.65, prep:2,  mainProt:"queso",    taste:"sweet",
    items:[{name:"Tortitas de arroz",g:40},{name:"Queso fresco batido 0%",g:120},{name:"Mermelada light",g:15}] },
  { name:"Pavo con tomatitos y queso",                   category:"snack", kcal:200, protein:22, carbs:6,  fat:8,  cost:1.10, prep:2,  mainProt:"pavo",     taste:"savory",
    items:[{name:"Pavo loncheado",g:80},{name:"Mozzarella light",g:50},{name:"Tomate",g:60}] },
  { name:"Claras revueltas express con jamón",           category:"snack", kcal:190, protein:24, carbs:2,  fat:6,  cost:0.90, prep:6,  mainProt:"huevo",    taste:"savory",
    items:[{name:"Claras de huevo",g:180},{name:"Jamón cocido extra",g:40}] },
  { name:"Mozzarella con tomate y pan",                  category:"snack", kcal:230, protein:18, carbs:18, fat:10, cost:1.20, prep:3,  mainProt:"queso",    taste:"savory",
    items:[{name:"Mozzarella light",g:80},{name:"Tomate",g:100},{name:"Pan integral",g:30}] },
  { name:"Batido de requesón con frutos rojos",          category:"snack", kcal:220, protein:16, carbs:24, fat:5,  cost:0.90, prep:3,  mainProt:"queso",    taste:"sweet",
    items:[{name:"Requesón",g:150},{name:"Frutos rojos congelados",g:80}] },
  { name:"Atún con pepino y queso",                      category:"snack", kcal:210, protein:26, carbs:4,  fat:8,  cost:1.20, prep:3,  mainProt:"atun",     taste:"savory",
    items:[{name:"Atún al natural",g:100},{name:"Pepino",g:100},{name:"Queso fresco batido 0%",g:80}] },
  { name:"Cacahuetes tostados y naranja",                category:"snack", kcal:220, protein:8,  carbs:20, fat:12, cost:0.55, prep:1,  mainProt:"cacahuete",taste:"mixed",
    items:[{name:"Cacahuetes",g:20},{name:"Naranja",g:150}] },
  { name:"Puñado de almendras y frutos rojos",           category:"snack", kcal:190, protein:6,  carbs:16, fat:12, cost:0.95, prep:1,  mainProt:"cacahuete",taste:"mixed",
    items:[{name:"Almendras",g:20},{name:"Frutos rojos congelados",g:80}] },
  { name:"Mantequilla de cacahuete con manzana",         category:"snack", kcal:240, protein:6,  carbs:30, fat:12, cost:0.60, prep:2,  mainProt:"cacahuete",taste:"sweet",
    items:[{name:"Mantequilla de cacahuete",g:25},{name:"Manzana",g:150}] },
  { name:"Avena con leche y plátano",                    category:"snack", kcal:270, protein:10, carbs:44, fat:4,  cost:0.55, prep:3,  mainProt:"avena",    taste:"sweet",
    items:[{name:"Avena",g:50},{name:"Leche semidesnatada",g:200},{name:"Plátano",g:60}] },
  { name:"Queso fresco con frutos rojos",                category:"snack", kcal:180, protein:14, carbs:16, fat:4,  cost:0.85, prep:2,  mainProt:"queso",    taste:"sweet",
    items:[{name:"Queso fresco batido 0%",g:180},{name:"Frutos rojos congelados",g:80}] },
  { name:"Huevo duro con zanahoria",                     category:"snack", kcal:170, protein:14, carbs:10, fat:8,  cost:0.45, prep:10, mainProt:"huevo",    taste:"savory",
    items:[{name:"Huevos enteros",g:120},{name:"Zanahoria",g:100}] },
  { name:"Tempeh con pepino y salsa",                    category:"snack", kcal:200, protein:14, carbs:8,  fat:10, cost:1.10, prep:5,  mainProt:"tofu",     taste:"savory",
    items:[{name:"Tempeh",g:80},{name:"Pepino",g:100}] },
  { name:"Edamame con tortitas de arroz",                category:"snack", kcal:200, protein:12, carbs:22, fat:6,  cost:0.75, prep:6,  mainProt:"tofu",     taste:"savory",
    items:[{name:"Edamame",g:100},{name:"Tortitas de arroz",g:40}] },

];
