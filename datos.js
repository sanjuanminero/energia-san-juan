// Coordenadas de diques, aforo, cauce y parques: relevamiento propio sobre imagen satelital (10 nov 2026).
// Datos del tablero. Editar este archivo para actualizar cifras; cada valor lleva su fecha y fuente.
window.DATOS = {
  actualizado: "2026-11-09",

  rio: {
    caudal: 61.43,                // m3/s, estación de aforo km 101 (Hidráulica)
    fecha: "2026-11-01",
    caudalPrevio: 46.25,          // 30 oct 2026
    caudal2025: 23.451,           // misma fecha 2025
    proyeccionNoviembre: 80,      // m3/s, Hidráulica (Ginestar)
    erogacionUllum: 44,           // m3/s que eroga Quebrada de Ullum (1 nov 2026)
    erogacion2025: 40,            // misma fecha 2025
    riegoTotal: 47.071,           // m3/s derivados a riego
    coef: 0.400,                  // L/s por ha (antes 0,340)
    fuente: "Dpto. de Hidráulica, vía Tiempo de San Juan (2 nov 2026)",
    aforo: { lat: -31.25374, lon: -69.17847 },   // estación km 101 (KML)
    // cauce del río San Juan según OpenStreetMap (© colaboradores de OpenStreetMap, ODbL), simplificado a ~15 m.
    // Formato: lat,lon del primer punto ×1e5 y luego diferencias sucesivas.
    trazaOSM: "-3126864,-6940036,14,136,127,95,26,193,76,261,174,137,118,50,116,23,220,-49,62,17,102,125,-4,111,-74,248,-10,117,28,147,-2,165,25,58,116,19,206,266,103,43,146,162,66,35,125,-69,88,18,88,85,37,95,51,51,88,0,88,155,15,103,44,94,59,60,29,86,59,52,68,229,33,292,-34,109,-60,92,-47,290,86,239,-33,158,13,269,-101,188,-222,211,-129,216,9,82,108,231,9,172,-61,69,-78,19,-38,45,-7,75,64,187,-21,85,-80,95,-18,118,14,149,33,63,4,351,-112,152,55,139,-25,63,-67,32,-34,69,20,124,66,62,132,-11,90,41,134,105,29,166,62,44,209,26,129,78,77,158,-14,80,-53,37,-8,160,11,125,51,125,37,242,-1,170,73,352,-72,130,-28,144,-42,311,4,249,29,77,124,146,206,171,37,69,-37,198,-88,86,-110,42,-73,103,0,112,117,240,-7,129,73,197,29,172,-14,275,-52,179,-388,413,-8,258,37,240,15,403,-66,412,2,249,-76,209,-180,111,1,30,104,112,63,208,-18,309,-90,149,-89,237,-273,334,-40,501,-28,95,-132,204,9,209,76,211,17,126,-119,205,22,232,-122,109,-150,228,-85,23,-105,225,91,246,189,235,45,204,196,136,359,538,125,115,47,78,14,186,-37,117,-175,78,-218,268,-51,420,23,463,-117,133,-62,123,-70,504,-77,75,-118,265,-45,171,16,93,158,232,-86,141,-140,95,-102,112,-138,432,6,141,48,209,243,284,18,171,-41,99,-133,112,-17,419,-129,295,-8,268,-138,203,-86,210,-11,227,-41,200,37,358,45,201,-101,187,16,166,-59,356,38,172,32,50,-233,382,-42,257,-46,27,-147,-43,-66,32,-323,-78,-96,40,-167,-19,-211,32,-177,-60,-117,-9,-130,31,-179,-12,-120,129,-75,144,-111,338,-55,47,-25,61,4,136,-237,182,-59,83,-12,181,69,235,8,121,-23,154,-90,94,-91,23,-70,139,-102,101,-79,156,-6,98,144,326,24,191,-16,82,-27,52,-97,51,-96,92,-289,351,-153,102,-41,69,-43,188,8,51,68,35,0,159,-98,60,-18,40,-107,509,-44,23,-62,103,-28,158,-70,130,-361,395,-30,157,41,148,-8,54,-132,64,-38,90,-246,262,-36,176,-131,289,39,159,-19,82,-117,58,-71,150,-271,153,-26,149,-120,192,-156,111,-57,74,-43,172,-38,58,-220,153,-325,38,-93,66,-238,-28,-96,98,-55,-3,-56,-49,-73,-113,-52,-26,-73,6,-102,134,-93,40,-99,215,-340,156,-96,95,-151,41,-53,65,-171,-27,-308,47,-260,-32,-63,-33,-105,-141,-144,-3,-107,-112,-41,-11,-76,60,-78,117,-59,178,-96,94,-115,19,-303,382,-128,25,-72,71,-50,218,30,302,-84,105,-314,82,-138,-118,-118,-6,-208,-134,-356,-25,-320,61,-176,-53,-55,-58,-323,-132,-230,-37,-341,-142,-147,8,-201,69,-116,115,-93,282,-86,57,-146,-61,-150,48,-105,0,-100,-24,-66,-75,-37,-223,-53,-67,-143,-47,-70,9,-109,73,-125,12,-79,-23,-106,-90,-165,23,-97,48,-188,199,-112,52,-112,10,-159,198,-31,180,-39,41,-46,-7,-67,-70,-97,-5,-88,37,-200,210,-15,217,-80,68,-125,-8,-82,-67,-245,-339,-163,-126,-66,4,-227,105,-103,2,-84,-17,-276,-137,-154,133,-214,-8,-157,-28,-123,-94,-366,-39,-96,51,-100,278,-109,96,-78,26,-307,-98,-322,89,-135,104,-102,128,-80,29,-186,-4,-129,195,-155,56,-223,-107,-358,108,-97,-54,-53,-158,-50,-65,-167,-57,-437,-26,-297,12,-80,23,-111,80,-489,158,-150,-132,-101,-27,-212,-174,-52,-9,-77,26,-157,153,-187,323,-81,90,-71,59,-112,1,-72,52,-73,1,-257,-281,-128,-64,-194,-29,-239,11,-157,-102,-182,-50,-103,15,-127,71,-265,84,-86,56,-35,68,3,252,49,148,2,176,-61,268,77,800,174,115,100,14,35,44,3,106,-73,61,-98,299,62,147,163,88,-14,296,-216,125,-111,209,21,100,39,10,74,175,46,272,83,154,55,190,-5,204,-134,272,-27,164,117,236,-24,141,34,167,-152,655,22,155,153,232,-37,155,-75,152,55,175,18,236,-57,204,-110,104,-77,33,-33,50,-135,20,-53,61,-56,218,28,155,87,167,28,165,27,214,-16,394,199,638,13,116,87,160,42,166,-38,154,-128,88,-28,272,27,97,69,96,81,328,50,75,159,136,37,147,-30,90,41,221,182,351,114,377,-68,223,-121,90,-46,80,-118,380,103,297,25,172,-15,417,36,110,67,56,21,117,-61,74,-66,18,-55,74,-163,352,28,157,-32,167,39,57,126,67,53,73,16,117,54,128,49,331,-26,101,-147,226,56,194,-129,188,-21,216,14,190,-25,82,-98,158,-142,127,-288,111,22,484,44,249,-25,108,51,148,-10,93,51,169,16,267,114,329,327,500,111,220,205,240,143,82,37,82,-6,202,30,45,10,151,-44,234,-4,166,-147,356,5,66,112,195,57,191,-111,390,0,70,45,200,67,145,-12,90,41,293,210,412,-5,97,64,109,-8,118,37,125,-8,160,123,324,-7,255,88,153,46,210,53,94,-6,120,51,296,-68,215,32,152,-30,154,72,142,118,449,82,91,26,100,-64,155,-7,145,-78,144,-18,95,21,69,57,67,163,63,39,44,40,150,-23,159,58,117,-14,58,32,112,-10,76,-90,200,-75,85,-2,133,-70,133,126,92,8,154,41,65,289,114,255,271,82,250,153,266,44,-1,82,53,29,-19,11,-80,43,1,9,101,-61,51,-1,43,173,150,64,25,34,69,-3,68,-74,138,-24,32,-48,-12,-61,121,-100,65,-29,48,-27,540,96,192,408,438,1073,718,262,312,99,335,-11,364,-61,221,-112,222,9,287,-447,3,-410,-40,-156,76,-99,83,-92,29,-117,-16,-168,-76,-144,-3,-332,250,-238,-7,-117,51,-195,-96,-97,60,-120,149,-132,82,-92,5,-96,-59,-48,21,-13,23,81,291,-55,155,-89,94,-131,228,-22,107,28,154,36,47,102,36,27,98,-30,86,-123,144,-30,132,49,123,149,135,36,82,-12,277,34,143,-6,161,-89,239,149,220,161,339,28,109,165,183,30,125,-19,184,57,-33,172,7,45,48,-17,90,21,71,241,72,34,42,-19,111,87,176,-148,287,-22,79,11,110,194,179,10,160,53,196,31,35,188,79,115,108,177,56,-45,212,135,207,-9,107,57,115,7,145,79,78,22,139,99,128,62,129,88,98,137,88,20,106,110,39,55,120,3,70,-35,85,34,130,50,30,23,86,-76,107,-7,123,-87,185,31,129,-39,148,108,271,-24,184,38,225,23,22,124,7,51,40,56,107,134,131,80,180,156,182,70,178,236,85,87,118,110,79,587,1000,264,501,32,105,-14,130,91,238,-35,396,59,139,-2,410,63,159,2,86,-42,150,-91,152,-45,195,-38,300,53,244,-16,318,-13,53,-70,77,-111,67,-55,153,64,263,-23,58,-67,53,-20,71,55,148,1,107,-72,96,-44,125,-101,75,-135,285,-95,548,-65,217,-2,150,58,298,-41,111,-87,98,-24,69,13,114,85,50,35,118,-54,224,-16,205,67,76,-48,87,-244,145,-43,176,-80,48,-71,-38,-162,-6,-49,-147,-133,-46,-159,170,-80,229,-189,78,-134,20,-187,299,-73,69,-530,117,-177,143,-86,0,-164,62,-114,3,-104,43,-35,43,-45,1,-74,-101,-58,-248,-79,-32,-55,19,-116,118,-231,73,-160,151,-6,139,44,186,-51,123,-129,69,-165,11,-173,52,-78,201,-227,380,-63,79,-120,63,-133,-24,-104,12,-51,-170,0,-104,-205,-114,-94,25,-48,146,40,142,-4,64,-47,235,-113,348,-113,35,-246,-180,-55,-6,-114,114,-25,97,15,290,-55,142,-68,82,-91,33,-316,-138,-61,21,-109,212,-7,100,-66,203,-147,237,-107,50,-58,96,64,270,-37,118,-204,127,-73,90,-126,90,-91,-61,-121,75,-91,256,-106,154,-47,16,-13,47,-9,68,73,159,-12,89,-129,66,-61,132,-13,112,-61,73,-81,54,-110,-31,-178,-4,-118,113,-188,-81,-86,29,-104,103,-91,23,-26,247,2,401,-71,173,-102,-22,-121,-99,-388,-104,-283,60,-301,274,-16,38,25,38,-4,128,102,311,-51,48,-13,107,-56,104,30,138,-15,73,-118,159,-68,39,-73,-9,-172,62,-104,-10,-68,50,-45,117,-98,68,-12,66,41,89,-14,120,-107,179,-120,9,-79,90,-60,9,-54,-88,-108,-10,-279,-173,-111,-223,-60,-71,-28,-114,-60,-34,-113,26,-2,76,-56,120,-156,144,-72,235,-104,107,-90,10,-121,-47,-128,27,-240,141,-118,2,-112,55,-30,58,-141,68,-97,-3,-204,85,-193,37,-171,92,-37,81,-268,90,-106,-8,-259,147,-268,59,-160,125,-34,60,-75,25,-68,114,-211,106,-88,-30,-158,7,-94,-107,-30,-1,-36,51,-76,-9,-64,-72,-149,48,-15,52,-241,53,-256,-11,-61,-21,-37,-52,-84,3,-91,-54,-110,39,-137,-65,-157,49,-126,74,-84,-18,-81,-60,-108,82,-44,-52,-148,-13,-25,-61,-109,26,-175,-12,-144,-60,-44,62,-122,68,-129,127,-20,81,6,186,-124,137,-12,87,-93,163,-229,46,-308,2,-39,13,-54,73,-191,-105,-103,-27,-157,63,-72,-47,-29,-76,-179,12,-122,-91,-87,-92,12,-136,-53,-74,-47,-17,-65,84,-78,-71,-31,-84,13,-108,-57,-200,-43,-51,-79,-30,-119,63,-139,317,-149,16,-104,-99,-51,-5,-174,91,-59,-71,-126,-39,-228,-166,-157,-230,-135,-51,-165,57,-130,133,-199,285,-81,22,-90,-73,10,-49,144,-196,2,-54,-50,-88,-23,-112,62,-149,-70,-21,-69,-61,-134,26,-99,-14,-39,-57,1,-75,-27,-54,-290,-225,-182,11,-57,27,-74,178,-104,98,-191,250,-150,53,-102,-136,-42,-125,34,-407,-52,-77,-141,67,-126,-99,-197,-28,-73,-66,-16,-55,-114,-65,-270,-52,-37,-29,-116,-255,63,-311,-20,-201,-45,-97,-59,-51,-82,-7,-109,51,-5,84,-50,90,-49,-1,-40,46,-9,174,-34,36,-112,19,-175,-76,-137,-202,16,-80,-96,-133,-40,-176,-73,-179,-156,-14,-31,35,-19,104,-69,107,-78,59,-67,9,-137,-212,81,-278,-17,-103,-44,3,-15,-33,-1,-235,-104,-188,-46,-40,-67,-18,-73,36,-97,-106,-38,15,-32,120,-83,96,-175,54,-20,60,-117,114,-33,176,-70,110,-32,222,-31,42,-166,160,-174,53,-189,-73,-93,-108,-416,-67,-236,-130,-202,-42,-137,21,-144,-40,-235,45,-125,196,-11,99,-79,58,-119,-6,-114,35,-194,-179,-37,-81,-25,-98,30,-164,-41,-106,-4,-83,-122,-169,-120,-10,-46,-85,-243,-80,-72,-64,-328,-53,-122,13,-301,-125,-69,-55,-74,25,-53,-16,-61,34,-70,-19,-56,-40,-56,-105,-205,-134,-63,43,-10,209,92,186,96,81,62,236,-1,232,-21,55,-153,33,-116,-84,-126,-175,-47,-107,-56,-40,-75,-222,-109,-78,-58,1,-140,80,-58,122,-216,159,-90,30,-114,-11,-56,-32,-5,-127,63,-150,-76,-234,-141,-37,-110,-142,-72,-49,-106,13,-55,-21,-44,158,-123,10,-28,-24,-193,-360,82,-303,-30,-80,-97,-115,-121,-3,-27,17,-4,42,67,123,-25,53,-67,-3,-1,-130,-185,-167,-129,-186,-147,-382,-137,-65,-54,-59,-101,-346,-37,-23,-70,73,-158,24",
    tambolar: { lat: -31.36266, lon: -69.01035 },
    pronosticoUNSJ: [             // caudal medio mensual, UNSJ (Dölling), ciclo 2026-27
      ["oct", 51.1], ["nov", 70.6], ["dic", 78.3], ["ene", 75.5], ["feb", 63.3], ["mar", 49.5]
    ]
  },

  // Centrales hidroeléctricas. gen = código de la unidad en el parte de CAMMESA; mw = potencia instalada.
  // Las que tienen embalse llevan cota y volumen (últimos publicados, con fecha).
  // cotaMin = cota de seguridad (debajo queda la reserva que no se usa); cotaMax = cota máxima del embalse;
  // volUtil = capacidad útil entre ambas cotas. Cota, mínima y máxima se reemplazan por las del parte diario de CAMMESA (hidraulica.js).
  // resFrac = parte del vaso bajo la cota mínima, para el dibujo: (volMax - volUtil)/volMax en Caracoles y Punta Negra;
  // en Ullum es aproximada (33 hm3 a cota 749 según Diario de Cuyo, 2015).
  hidro: [
    { id: "caracoles", cod: "H-01", gen: "CCOLHI", nombre: "Los Caracoles", lat: -31.51934, lon: -68.98292, mw: 125,
      cota: 1081.67, fechaCota: "2026-09-07", cotaMin: 1080, cotaMax: 1110, vol: 250, volMax: 545, volUtil: 293, resFrac: 0.46, pct: 46, fechaVol: "2026-09-07" },
    { id: "puntanegra", cod: "H-02", gen: "PNEGHI", nombre: "Punta Negra", lat: -31.51742, lon: -68.81752, mw: 65,
      cota: 924.11, fechaCota: "2026-10-03", cotaMin: 920, cotaMax: 950, vol: 230, volMax: 505, volUtil: 309, resFrac: 0.39, pct: 46, fechaVol: "2026-09-07" },
    // La Olla figura en CAMMESA como central "Ullum" (ULLUHI); central de pasada, sin embalse propio
    { id: "laolla", cod: "H-03", gen: "ULLUHI", nombre: "La Olla", lat: -31.45559, lon: -68.75598, mw: 40 },
    { id: "ullum", cod: "H-04", gen: "QULLHI", nombre: "Quebrada de Ullum", lat: -31.47469, lon: -68.65012, mw: 44,
      cota: 760.33, fechaCota: "2026-10-03", cotaMin: 760, cotaMax: 768, vol: 156, volMax: 312, volUtil: 179, resFrac: 0.10, pct: 50, fechaVol: "2026-09-07" },
    { id: "cdv", cod: "H-05", gen: "CVIEHI", nombre: "Cuesta del Viento", lat: -30.18, lon: -69.07, mw: 10, rio: "Jáchal" }
  ],
  minis: [["SAL2HI", "Salto de la Loma"], ["SALOHI", "Salto de la Loma (unidad 1)"], ["SGUIHI", "San Guillermo"]],
  reservaDisponible: 872.43,       // hm3 libres hasta nivel máximo ordinario (25 oct 2026)

  solar: {
    // Unidades solares de San Juan según la base de renovables de CAMMESA (código: nombre, operador, MW instalados).
    // Sin mw: se usa la potencia disponible que informa CAMMESA en el parte del día.
    unidades: {
      ULN1FV: ["Ullum N1", "Genneia", 25], ULN2FV: ["Ullum N2", "Genneia", 25], ULL3FV: ["Ullum N3", "Genneia", 32],
      SULLFV: ["Sierras de Ullum", "Genneia", 78], ULL4FV: ["Ullum 4", "Solargen", 13.5], UL42FV: ["Ullum 4 ampliación", "Solargen", 7],
      SJUAFV: ["San Juan I", "EPSE"], SJU2FV: ["San Juan I (unidad 2)", "EPSE"],
      IGLEFV: ["Cordillera Solar (Iglesia–Guañizuil)", "JinkoSolar", 80], GZ2AFV: ["Guañizuil IIA", "Central Puerto", 117], ZONDFV: ["Zonda I", "YPF Luz", 100],
      SJUSFV: ["San Juan Sur", "Genneia", 129], HON1FV: ["Cañada Honda 1", "360Energy"], HON2FV: ["Cañada Honda 2", "360Energy"],
      HON3FV: ["Cañada Honda 3", "360Energy"], HON4FV: ["Cañada Honda 4", "360Energy"], CHI1FV: ["La Chimbera 1", "360Energy"],
      TOC3FV: ["Tocota III", "Genneia", 60],
      TAMBFV: ["Tamberías", ""], ANPCFV: ["Anchipurac", ""], LLOMFV: ["Las Lomitas", ""], DIAGFV: ["Los Diaguitas", ""],
      ALGRFV: ["Algarrobo", ""], FITOFV: ["Fitovid", ""], PED1FV: ["San Pedro I – Coral", ""]
    },
    // polos: agrupan unidades por zona (barras y símbolo a escala provincial). "otros" no tiene ubicación verificada.
    polos: [
      { id: "ullum", cod: "S-01", nombre: "Ullum", lat: -31.3650, lon: -68.6720, u: ["ULN1FV","ULN2FV","ULL3FV","SULLFV","ULL4FV","UL42FV","SJUAFV","SJU2FV"] },
      { id: "iglesia", cod: "S-02", nombre: "Iglesia", lat: -30.4840, lon: -69.3210, u: ["GZ2AFV","ZONDFV","IGLEFV"] },
      { id: "sarmiento", cod: "S-03", nombre: "Sarmiento", lat: -31.98751, lon: -68.53940, u: ["SJUSFV","HON1FV","HON2FV","HON3FV","HON4FV","CHI1FV"] },
      { id: "calingasta", cod: "S-04", nombre: "Tocota", lat: -30.8164, lon: -69.4717, u: ["TOC3FV"] },
      { id: "otros", cod: "S-05", nombre: "Otros", u: ["ALGRFV","PED1FV","TAMBFV","ANPCFV","DIAGFV","LLOMFV","FITOFV"] }
    ],
    // parques: símbolos individuales al acercar el mapa. Posiciones de relevamiento propio (10 nov 2026),
    // salvo Tocota III (Global Energy Monitor). San Juan Sur no tiene ubicación confirmada y solo aparece en el polo Sarmiento.
    parques: [
      { id: "ullum123", polo: "ullum", nombre: "Ullum N1, N2 y N3", quien: "Genneia", lat: -31.33419, lon: -68.67033, off: [54,-30], u: ["ULN1FV","ULN2FV","ULL3FV"] },
      { id: "sierras", polo: "ullum", nombre: "Sierras de Ullum", quien: "Genneia", lat: -31.37612, lon: -68.66466, off: [60,-4], u: ["SULLFV"] },
      { id: "ullum4", polo: "ullum", nombre: "Ullum 4 y ampliación", quien: "Solargen", lat: -31.38659, lon: -68.67923, off: [-40,-60], u: ["ULL4FV","UL42FV"] },
      { id: "guanizuil", polo: "iglesia", nombre: "Guañizuil IIA + Cordillera Solar", quien: "Central Puerto / JinkoSolar", lat: -30.36363, lon: -69.29844, off: [52,-30], u: ["GZ2AFV","IGLEFV"] },
      { id: "zonda", polo: "iglesia", nombre: "Zonda I", quien: "YPF Luz", lat: -30.60463, lon: -69.34312, off: [52,-20], u: ["ZONDFV"] },
      { id: "canada", polo: "sarmiento", nombre: "Cañada Honda y La Chimbera", quien: "360Energy", lat: -31.98751, lon: -68.53940, off: [-46,34], u: ["HON1FV","HON2FV","HON3FV","HON4FV","CHI1FV"] },
      { id: "tocota3", polo: "calingasta", nombre: "Tocota III", quien: "Genneia", lat: -30.8164, lon: -69.4717, off: [-46,34], u: ["TOC3FV"] }
    ]
  },

  fuentes: [
    ["Caudal km 101 y erogaciones (2 nov)", "http://www.tiempodesanjuan.com/mineria/fuerte-repunte-del-caudal-del-rio-san-juan-bajo-un-162-mas-de-agua-que-en-2025-pero-la-recuperacion-de-los-diques-todavia-espera_1793661995"],
    ["Cotas Ullum y Punta Negra (3 oct)", "http://www.tiempodesanjuan.com/san-juan/un-paisaje-que-esta-a-punto-de-desaparecer-antes-del-deshielo-recorre-desde-el-aire-los-diques-de-ullum-y-punta-negra_1790997127"],
    ["Cotas, volúmenes y cotas de seguridad (7 sep)", "https://www.tiempodesanjuan.com/economia/tras-10-anos-los-diques-de-san-juan-volveran-a-llenarse-este-verano-segun-las-proyecciones-oficiales_1788713330"],
    ["Cotas máximas, de seguridad y capacidad útil de cada embalse", "https://www.tiempodesanjuan.com/economia/como-estan-los-diques-san-juan-este-2025-cual-tiene-mas-agua-y-cual-esta-peor-n394433"],
    ["Reserva disponible 872,43 hm³ (25 oct)", "https://www.diarioelzondasj.com.ar/locales/tres-diques-de-san-juan-reservan-87243-hm-ante-crecidas"],
    ["Pronóstico hídrico UNSJ 2026-27", "https://www.diarioelzondasj.com.ar/locales/la-unsj-preve-1653-hm-para-el-rio-san-juan-entre-2026-y-2027"],
    ["Proyección 80 m³/s en noviembre", "https://www.diariohuarpe.com/nota/pronostico-hidrico-de-san-juan-estara-listo-en-10-a-15-dias-202611218470"],
    ["Potencia hidroeléctrica instalada", "https://www.0264noticias.com.ar/noticias/2026/09/24/110896-en-el-ejecutivo-preven-que-por-el-aumento-en-los-niveles-de-los-rios-los-4-diques-y-la-central-de-la-olla-generaran-energia-al-mismo-tiempo-despues-de-casi-10-anos"],
    ["San Juan Sur 129 MW", "https://energiaonline.com.ar/inauguraron-el-parque-solar-de-mayor-potencia-operativo-en-san-juan"],
    ["Ullum Alfa e Iglesia híbrido (6 nov)", "https://www.diarioelzondasj.com.ar/economia/el-crecimiento-de-los-parques-solares-en-san-juan-el-avance-hacia-sistemas-hibridos-con-almacenamiento-y-el-impacto-de-los-fondos-mineros"],
    ["Identificación de parques: Global Energy Monitor", "https://www.gem.wiki/Ullum_Photovoltaic_Solar_Park"],
    ["Parques solares de San Juan: EPSE", "https://www.epsesanjuan.com.ar/index.php/web/energia/solar/2"],
    ["Cotas, turbinados y caudal diarios: Situación de cuencas hidráulicas, CAMMESA", "https://cammesaweb.cammesa.com/programacion-diaria/"],
    ["Generación horaria por central: Parte Post Operativo de CAMMESA", "https://cammesaweb.cammesa.com/parte-post-operativo/"],
    ["Listado de unidades renovables por provincia: CAMMESA", "https://cammesaweb.cammesa.com/erenovables/"]
  ]
};
