import json

with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

p = pages[17]
print("PDF Page:", p["pdfPage"])
lines = sorted([l for l in p["lines"] if 150 <= l["y"] <= 1610], key=lambda l: (l["y"], l["x"]))
for l in lines:
    print(f"y={int(l['y']):4d}, x={int(l['x']):4d}, w={int(l['w']):4d}, h={int(l['h']):4d}: {l['text']}")
