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

if __name__ == "__main__":
    main()
