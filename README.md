# Energía San Juan

Tablero de una sola pantalla con la generación renovable de San Juan: cotas de Los Caracoles, Punta Negra y Quebrada de Ullum, caudal del río San Juan, potencia hidroeléctrica y polos solares (Ullum, Iglesia, Sarmiento, Calingasta).

- `index.html`: el tablero (funciona en GitHub Pages). El mapa usa Leaflet (incluido en `vendor/`) con teselas de Esri.
- `datos.js`: centrales, parques, cotas y caudales, con fecha y fuente. Para actualizar, editar ese archivo.
- `hidraulica.js`: cotas, turbinados y caudal diarios del informe «Situación de cuencas hidráulicas» de CAMMESA (mismo proceso).
- `generacion.js`: generación horaria por unidad del Parte Post Operativo de CAMMESA. Lo reescribe `tools/actualizar_generacion.py`, que corre a diario desde GitHub Actions.

Qué es medido y qué es estimado:

- Cotas, volúmenes y caudal: últimos valores publicados por Hidráulica y medios locales (cada cifra muestra su fecha).
- Generación hidroeléctrica y solar: dato de CAMMESA, hora por hora y por unidad, con uno o dos días de atraso.
- Posiciones de diques, aforo y parques: KML relevado sobre imagen satelital. Cauce del río: OpenStreetMap (© colaboradores de OpenStreetMap, ODbL). Nombres de parques identificados con Global Energy Monitor y EPSE.
