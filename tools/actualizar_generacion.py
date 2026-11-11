#!/usr/bin/env python3
"""Baja el último Parte Post Operativo de CAMMESA y reescribe generacion.js con las unidades de San Juan.

Uso:  python3 tools/actualizar_generacion.py            (descarga de CAMMESA)
      python3 tools/actualizar_generacion.py inicio.html datosxgrupo.html   (archivos locales, para probar)
"""
import json, re, sys, urllib.request

BASE = "https://microfe.cammesa.com/static-content/CammesaWeb/download-manager-files/Revistas/PosOp/"
CODIGOS = ["CCOLHI","PNEGHI","ULLUHI","QULLHI","CVIEHI","SGUIHI","SALOHI","SAL2HI",
           "ULN1FV","ULN2FV","ULL3FV","SULLFV","ULL4FV","UL42FV","SJUAFV","SJU2FV","IGLEFV","GZ2AFV","ZONDFV",
           "SJUSFV","HON1FV","HON2FV","HON3FV","HON4FV","CHI1FV","TOC3FV","TAMBFV","ANPCFV","LLOMFV","DIAGFV",
           "ALGRFV","FITOFV","PED1FV"]
CABECERA = """// Generación horaria por unidad, del Parte Post Operativo de CAMMESA ("Datos Horarios de Grupos").
// e = energía generada en cada hora [MWh] (hora 1 = 00 a 01 h); pd = potencia disponible máxima informada [MW].
// Este archivo lo reescribe tools/actualizar_generacion.py; no editar a mano.
"""

def bajar(nombre):
    req = urllib.request.Request(BASE + nombre, headers={"User-Agent": "Mozilla/5.0 (tablero energia-san-juan)"})
    with urllib.request.urlopen(req, timeout=180) as r:
        return r.read().decode("utf-8", "replace")

def numero(s):
    s = s.replace("&nbsp;", "").strip()
    if not s: return 0.0
    try: return float(s.replace(".", "").replace(",", "."))
    except ValueError: return 0.0

def main():
    if len(sys.argv) == 3:
        inicio = open(sys.argv[1], encoding="utf-8", errors="replace").read()
        datos = open(sys.argv[2], encoding="utf-8", errors="replace").read()
    else:
        inicio, datos = bajar("inicio.html"), bajar("datosxgrupo.html")
    m = re.search(r"(\d{2})/(\d{2})/(\d{4})", re.sub(r"<script.*?</script>", "", inicio, flags=re.S))
    if not m: sys.exit("No se encontró la fecha del parte en inicio.html")
    fecha = f"{m.group(3)}-{m.group(2)}-{m.group(1)}"
    u = {}
    cuerpo = datos[datos.find("<tbody"):]
    for fila in re.finditer(r"<tr[^>]*>(.*?)</tr>", cuerpo, flags=re.S):
        c = [re.sub(r"<[^>]+>", "", x).strip() for x in re.findall(r"<td[^>]*>(.*?)</td>", fila.group(1), flags=re.S)]
        if len(c) < 12 or c[3] not in CODIGOS or not c[4].isdigit(): continue
        h = int(c[4])
        if not 1 <= h <= 24: continue
        d = u.setdefault(c[3], {"e": [0] * 24, "pd": 0})
        d["e"][h - 1] = round(numero(c[9]), 1)
        d["pd"] = max(d["pd"], numero(c[11]))
    if len(u) < 20 or sum(sum(d["e"]) for d in u.values()) <= 0:
        sys.exit(f"Parte incompleto: {len(u)} unidades encontradas; no se actualiza")
    salida = CABECERA + "window.GEN = " + json.dumps({"fecha": fecha, "u": dict(sorted(u.items()))}, separators=(",", ":")) + ";\n"
    open("generacion.js", "w", encoding="utf-8").write(salida)
    print(f"generacion.js actualizado: parte del {fecha}, {len(u)} unidades")

# ---------- situación diaria de la cuenca (cotas, turbinados, caudal) ----------
HIDRO = "https://microfe.cammesa.com/static-content/CammesaWeb/download-manager-files/unifilares/hidro/%s/www.cammesa.com/OpenDocument.html"
CAB_HID = """// Situación diaria de la cuenca del río San Juan según CAMMESA ("Situación de cuencas hidráulicas").
// Por día: rio = caudal del río San Juan [m3/s]; cada embalse = [cota, cota máx, cota mín, turbinado m3/s, vertido m3/s];
// laolla = turbinado de la central Ullum (La Olla); erog = caudal aguas abajo de Quebrada de Ullum. Un 0 es dato faltante.
// Este archivo lo reescribe tools/actualizar_generacion.py; no editar a mano.
"""

def leer_cuenca(html):
    s = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", html).replace("&nbsp;", " "))
    o = {}
    m = re.search(r"RIO SAN JUAN ([\d.]+) m3/s", s)
    o["rio"] = float(m.group(1)) if m else 0
    for k, n in (("caracoles", "LOS CARACOLES"), ("puntanegra", "PUNTA NEGRA"), ("ullum", "QUEBRADA DE ULLUM")):
        m = re.search(n + r" Cota Hoy: ([\d.]+) msnm Cota Max: ([\d.]+) msnm Cota Min: ([\d.]+) msnm Turbinado: ([\d.]+) m3/s Vertido: ([\d.]+) m3/s", s)
        if not m: return None
        o[k] = [float(v) for v in m.groups()]
    m = re.search(r" ULLUM Turbinado: ([\d.]+) m3/s", s)
    o["laolla"] = float(m.group(1)) if m else 0
    m = re.search(r"QUEBRADA DE ULLUM Cota Hoy:.*?Vertido: [\d.]+ m3/s ([\d.]+) m3/s", s)
    o["erog"] = float(m.group(1)) if m else 0
    return o

def cuenca(archivos=None):
    import datetime
    try:
        src = open("hidraulica.js", encoding="utf-8").read()
        dias = json.loads(src[src.index("{"):src.rindex("}") + 1])["dias"]
    except Exception:
        dias = {}
    if archivos:                                   # prueba local: fecha=archivo
        pares = [a.split("=", 1) for a in archivos]
        nuevos = {f: leer_cuenca(open(p, encoding="utf-8", errors="replace").read()) for f, p in pares}
    else:
        nuevos, hoy = {}, datetime.datetime.utcnow() - datetime.timedelta(hours=3)
        for atras in range(0, 6):
            d = hoy - datetime.timedelta(days=atras)
            f = d.strftime("%Y-%m-%d")
            if atras > 1 and f in dias: continue
            try:
                req = urllib.request.Request(HIDRO % d.strftime("%Y%m%d"), headers={"User-Agent": "Mozilla/5.0 (tablero energia-san-juan)"})
                with urllib.request.urlopen(req, timeout=120) as r:
                    nuevos[f] = leer_cuenca(r.read().decode("latin-1", "replace"))
            except Exception as e:
                print(f"cuenca {f}: sin informe ({e})")
    n = 0
    for f, v in nuevos.items():
        if v: dias[f] = v; n += 1
    if not dias: return print("cuenca: sin datos; no se actualiza")
    dias = dict(sorted(dias.items())[-60:])        # se guardan los últimos 60 días
    open("hidraulica.js", "w", encoding="utf-8").write(CAB_HID + "window.HID = " + json.dumps({"dias": dias}, separators=(",", ":")) + ";\n")
    print(f"hidraulica.js: {n} días leídos, último {max(dias)}")

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--cuenca":
        cuenca(sys.argv[2:])
    else:
        try: main()
        except SystemExit as e: print("generación:", e)
        if len(sys.argv) == 1: cuenca()
