# Energía San Juan

Tablero de una sola pantalla con la generación renovable de San Juan: cotas de Los Caracoles, Punta Negra y Quebrada de Ullum, caudal del río San Juan, potencia hidroeléctrica y polos solares (Ullum, Iglesia, Sarmiento, Calingasta).

- `index.html`: el tablero (funciona en GitHub Pages). El mapa usa Leaflet (incluido en `vendor/`) con teselas de Esri.
- `datos.js`: todas las cifras, con fecha y fuente. Para actualizar, editar ese archivo.

Qué es medido y qué es estimado:

- Cotas, volúmenes y caudal: últimos valores publicados por Hidráulica y medios locales (cada cifra muestra su fecha).
- Potencia hidroeléctrica: estimación física P = ρ·g·Q·H·η con cotas de restitución supuestas; no hay telemetría pública por central.
- Potencia solar: radiación en vivo de Open-Meteo sobre la potencia instalada identificada por polo; el control de hora usa cielo despejado.
- Posiciones de diques, aforo, cauce y parques: KML relevado sobre imagen satelital. Nombres de parques identificados con Global Energy Monitor y EPSE.
