import json

with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

for p in pages:
    if p["pdfPage"] >= 46:
        print(f"\n=== Page {p['pdfPage']} ===")
        for l in p["lines"]:
            if 100 <= l["y"] <= 1700:
                print(f"y={int(l['y'])}, x={int(l['x'])}: {l['text']}")
