// Datos del tablero. Editar este archivo para actualizar cifras; cada valor lleva su fecha y fuente.
window.DATOS = {
  actualizado: "2026-11-09",

  rio: {
    caudal: 61.43,                // m3/s, estación de aforo km 101 (Hidráulica)
    fecha: "2026-11-01",
    caudalPrevio: 46.25,          // 30 oct 2026
    caudal2025: 23.451,           // misma fecha 2025
    proyeccionNoviembre: 80,      // m3/s, Hidráulica (Ginestar)
    erogacionUllum: 44,           // m3/s que entrega Ullum a riego
    fuente: "Dpto. de Hidráulica, vía Tiempo de San Juan (2 nov 2026)",
    pronosticoUNSJ: [             // caudal medio mensual, UNSJ (Dölling), ciclo 2026-27
      ["oct", 51.1], ["nov", 70.6], ["dic", 78.3], ["ene", 75.5], ["feb", 63.3], ["mar", 49.5]
    ]
  },

  // tail = cota de restitución supuesta para estimar el salto (no es dato oficial)
  diques: [
    { id: "caracoles", nombre: "Los Caracoles", lat: -31.527, lon: -68.975,
      cota: 1081.67, fechaCota: "2026-09-07", cotaMin: 1080, cotaMax: 1100,
      vol: 250, volMax: 545, pct: 46, fechaVol: "2026-09-07",
      mw: 125, tail: 945, nota: "Subió 47 cm entre el 30 oct y el 1 nov" },
    { id: "puntanegra", nombre: "Punta Negra", lat: -31.52, lon: -68.82,
      cota: 924.11, fechaCota: "2026-10-03", cotaMin: 920, cotaMax: 950,
      vol: 230, volMax: 500, pct: 46, fechaVol: "2026-09-07",
      mw: 65, tail: 863, nota: "" },
    { id: "ullum", nombre: "Quebrada de Ullum", lat: -31.47, lon: -68.645,
      cota: 760.33, fechaCota: "2026-10-03", cotaMin: 760, cotaMax: 768,
      vol: 156, volMax: 312, pct: 50, fechaVol: "2026-09-07",
      mw: 44, tail: 718, nota: "Eroga 44 m³/s a riego" }
  ],
  reservaDisponible: 872.43,       // hm3 libres hasta nivel máximo ordinario (25 oct 2026)
  otrasHidro: [
    { nombre: "La Olla (AES)", mw: 40 },
    { nombre: "Cuesta del Viento (río Jáchal)", mw: 10, lat: -30.18, lon: -69.07 }
  ],

  solar: {
    parquesOperativos: 24,         // 13 oct 2026
    mwProvincia: 676,              // 547,4 MW (dic 2024, 21 parques) + San Juan Sur 129 MW
    polos: [
      { id: "ullum", nombre: "Ullum", lat: -31.38, lon: -68.74, mw: 160,
        parques: [["Ullum I, II y III", 82, "Genneia"], ["Sierras de Ullum", 78, "Genneia"]],
        extra: "Ullum Alfa (EPSE, 50 MW) por inaugurar" },
      { id: "iglesia", nombre: "Iglesia", lat: -30.40, lon: -69.20, mw: 297,
        parques: [["Guañizuil IIA", 117, "Central Puerto"], ["Zonda I", 100, "YPF Luz"], ["Iglesia–Estancia Guañizuil", 80, ""]],
        extra: "Parque comunitario EPSE 10 MW + 30 MWh en baterías, en licitación" },
      { id: "sarmiento", nombre: "Sarmiento", lat: -32.08, lon: -68.60, mw: 129,
        parques: [["San Juan Sur", 129, "Genneia"]],
        extra: "Inaugurado en octubre de 2026, el mayor de la provincia" },
      { id: "calingasta", nombre: "Calingasta", lat: -30.72, lon: -69.42, mw: 60,
        parques: [["Tocota III", 60, "Genneia"]], extra: "" }
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
    ["Radiación solar en vivo", "https://open-meteo.com/"]
  ]
};
