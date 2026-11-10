// Coordenadas de diques, aforo, cauce y parques: KML relevado por Santiago Azcona (10 nov 2026).
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
    traza: [[-31.25083,-69.17969],[-31.25466,-69.17103],[-31.26199,-69.11943],[-31.26347,-69.11072],[-31.28014,-69.10917],[-31.28969,-69.08948],[-31.29746,-69.05787],[-31.31631,-69.03105],[-31.33923,-69.01913],[-31.35554,-69.01627],[-31.36125,-69.01102],[-31.3644,-69.00537],[-31.38386,-69.01],[-31.40118,-69.01],[-31.41607,-69.00861],[-31.42783,-69.00314],[-31.44418,-69.00485],[-31.45392,-69.0018],[-31.47585,-68.9974],[-31.48074,-68.99884],[-31.48824,-68.99671],[-31.49838,-68.99481],[-31.50591,-68.99495],[-31.51507,-68.99757],[-31.52032,-68.99385],[-31.5194,-68.9818],[-31.51693,-68.97403],[-31.51638,-68.96767],[-31.51694,-68.95622],[-31.51588,-68.93738],[-31.51973,-68.92224],[-31.51765,-68.90142],[-31.51423,-68.87004],[-31.51611,-68.83755],[-31.51951,-68.81851],[-31.513,-68.80339],[-31.50898,-68.7876],[-31.51035,-68.76659],[-31.50379,-68.73689],[-31.49875,-68.70491],[-31.48694,-68.68049],[-31.47054,-68.65776],[-31.47137,-68.65202],[-31.47403,-68.64842],[-31.48198,-68.64809],[-31.48742,-68.64744],[-31.49509,-68.64626],[-31.50751,-68.64271],[-31.51095,-68.63768]],   // cauce km 101 → aguas abajo de Ullum (KML)
    tambolar: { lat: -31.36266, lon: -69.01035 },
    pronosticoUNSJ: [             // caudal medio mensual, UNSJ (Dölling), ciclo 2026-27
      ["oct", 51.1], ["nov", 70.6], ["dic", 78.3], ["ene", 75.5], ["feb", 63.3], ["mar", 49.5]
    ]
  },

  // tail = cota de restitución supuesta para estimar el salto (no es dato oficial)
  diques: [
    { id: "caracoles", cod: "H-01", nombre: "Los Caracoles", lat: -31.51934, lon: -68.98292,
      cota: 1081.67, fechaCota: "2026-09-07", cotaMin: 1080, cotaMax: 1100,
      vol: 250, volMax: 545, pct: 46, fechaVol: "2026-09-07",
      mw: 125, tail: 945, nota: "Subió 47 cm entre el 30 oct y el 1 nov" },
    { id: "puntanegra", cod: "H-02", nombre: "Punta Negra", lat: -31.51742, lon: -68.81752,
      cota: 924.11, fechaCota: "2026-10-03", cotaMin: 920, cotaMax: 950,
      vol: 230, volMax: 500, pct: 46, fechaVol: "2026-09-07",
      mw: 65, tail: 863, nota: "" },
    { id: "ullum", cod: "H-03", nombre: "Quebrada de Ullum", lat: -31.47469, lon: -68.65012,
      cota: 760.33, fechaCota: "2026-10-03", cotaMin: 760, cotaMax: 768,
      vol: 156, volMax: 312, pct: 50, fechaVol: "2026-09-07",
      mw: 44, tail: 718, nota: "" }
  ],
  reservaDisponible: 872.43,       // hm3 libres hasta nivel máximo ordinario (25 oct 2026)
  otrasHidro: [
    { nombre: "La Olla (AES)", mw: 40 },
    { nombre: "Cuesta del Viento (río Jáchal)", mw: 10, lat: -30.18, lon: -69.07 }
  ],

  solar: {
    parquesOperativos: 24,         // 13 oct 2026
    mwProvincia: 676,              // 547,4 MW (dic 2024, 21 parques) + San Juan Sur 129 MW
    // polos: agrupan parques por zona (barras y símbolo a escala provincial)
    polos: [
      { id: "ullum", cod: "S-01", nombre: "Ullum", lat: -31.3650, lon: -68.6720, mw: 180.5,
        parques: [["Ullum I, II y III", 82, "Genneia"], ["Sierras de Ullum", 78, "Genneia"], ["Ullum IV y Solargen 2", 20.5, "Solargen/Sidersa"]],
        extra: "Ullum Alfa (EPSE, 50 MW) en construcción" },
      { id: "iglesia", cod: "S-02", nombre: "Iglesia", lat: -30.4840, lon: -69.3210, mw: 297,
        parques: [["Guañizuil IIA", 117, "Central Puerto"], ["Zonda I", 100, "YPF Luz"], ["Iglesia–Estancia Guañizuil", 80, "JinkoSolar"]],
        extra: "Parque comunitario EPSE 10 MW + 30 MWh en baterías, en licitación" },
      { id: "sarmiento", cod: "S-03", nombre: "Sarmiento", lat: -31.98751, lon: -68.53940, mw: 136,
        parques: [["San Juan Sur", 129, "Genneia"], ["Cañada Honda y La Chimbera", 7, "360Energy"]],
        extra: "San Juan Sur se inauguró en octubre de 2026; su ubicación exacta dentro de Sarmiento no está confirmada" },
      { id: "calingasta", cod: "S-04", nombre: "Tocota", lat: -30.8164, lon: -69.4717, mw: 60,
        parques: [["Tocota III", 60, "Genneia"]], extra: "" }
    ],
    // parques: símbolos individuales al acercar el mapa. Posiciones del KML de Santiago Azcona (10 nov 2026),
    // salvo Tocota III (Global Energy Monitor). Nombres identificados contra Global Energy Monitor y EPSE.
    parques: [
      { id: "ullum123", polo: "ullum", nombre: "Ullum I, II y III", mw: 82, quien: "Genneia", lat: -31.33419, lon: -68.67033, off: [54,-30] },
      { id: "sierras", polo: "ullum", nombre: "Sierras de Ullum", mw: 78, quien: "Genneia", lat: -31.37612, lon: -68.66466, off: [60,-4] },
      { id: "ullum4", polo: "ullum", nombre: "Ullum IV y Solargen 2", mw: 20.5, quien: "Solargen", lat: -31.38659, lon: -68.67923, off: [-56,40] },
      { id: "guanizuil", polo: "iglesia", nombre: "Guañizuil IIA + Estancia Guañizuil", mw: 197, quien: "Central Puerto / JinkoSolar", lat: -30.36363, lon: -69.29844, off: [52,-30] },
      { id: "zonda", polo: "iglesia", nombre: "Zonda I", mw: 100, quien: "YPF Luz", lat: -30.60463, lon: -69.34312, off: [52,-20] },
      { id: "canada", polo: "sarmiento", nombre: "Cañada Honda y La Chimbera", mw: 7, quien: "360Energy", lat: -31.98751, lon: -68.53940, off: [-46,34] },
      { id: "tocota3", polo: "calingasta", nombre: "Tocota III", mw: 60, quien: "Genneia", lat: -30.8164, lon: -69.4717, off: [-46,34] }
    ]
  },

  fuentes: [
    ["Caudal km 101 y erogaciones (2 nov)", "http://www.tiempodesanjuan.com/mineria/fuerte-repunte-del-caudal-del-rio-san-juan-bajo-un-162-mas-de-agua-que-en-2025-pero-la-recuperacion-de-los-diques-todavia-espera_1793661995"],
    ["Cotas Ullum y Punta Negra (3 oct)", "http://www.tiempodesanjuan.com/san-juan/un-paisaje-que-esta-a-punto-de-desaparecer-antes-del-deshielo-recorre-desde-el-aire-los-diques-de-ullum-y-punta-negra_1790997127"],
    ["Cotas, volúmenes y cotas de seguridad (7 sep)", "https://www.tiempodesanjuan.com/economia/tras-10-anos-los-diques-de-san-juan-volveran-a-llenarse-este-verano-segun-las-proyecciones-oficiales_1788713330"],
    ["Reserva disponible 872,43 hm³ (25 oct)", "https://www.diarioelzondasj.com.ar/locales/tres-diques-de-san-juan-reservan-87243-hm-ante-crecidas"],
    ["Pronóstico hídrico UNSJ 2026-27", "https://www.diarioelzondasj.com.ar/locales/la-unsj-preve-1653-hm-para-el-rio-san-juan-entre-2026-y-2027"],
    ["Proyección 80 m³/s en noviembre", "https://www.diariohuarpe.com/nota/pronostico-hidrico-de-san-juan-estara-listo-en-10-a-15-dias-202611218470"],
    ["Potencia hidroeléctrica instalada", "https://www.0264noticias.com.ar/noticias/2026/09/24/110896-en-el-ejecutivo-preven-que-por-el-aumento-en-los-niveles-de-los-rios-los-4-diques-y-la-central-de-la-olla-generaran-energia-al-mismo-tiempo-despues-de-casi-10-anos"],
    ["24 parques solares, San Juan Sur 129 MW", "https://energiaonline.com.ar/inauguraron-el-parque-solar-de-mayor-potencia-operativo-en-san-juan"],
    ["547,4 MW solares a dic 2024", "https://www.tiempodesanjuan.com/economia/san-juan-la-capital-del-solse-consolida-como-la-provincia-mas-parques-solares-del-pais-n395409"],
    ["Ullum Alfa e Iglesia híbrido (6 nov)", "https://www.diarioelzondasj.com.ar/economia/el-crecimiento-de-los-parques-solares-en-san-juan-el-avance-hacia-sistemas-hibridos-con-almacenamiento-y-el-impacto-de-los-fondos-mineros"],
    ["Identificación de parques: Global Energy Monitor", "https://www.gem.wiki/Ullum_Photovoltaic_Solar_Park"],
    ["Parques solares de San Juan: EPSE", "https://www.epsesanjuan.com.ar/index.php/web/energia/solar/2"],
    ["Radiación solar en vivo", "https://open-meteo.com/"]
  ]
};
