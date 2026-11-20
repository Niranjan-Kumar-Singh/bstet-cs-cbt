import json, re

with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

for pno in [24, 27, 29, 44, 45, 47]:
    p = next(page for page in pages if page["pdfPage"] == pno)
    print(f"\n================ Top of Page {pno} (y < 450) ================")
    top_lines = [l for l in p["lines"] if 150 <= l["y"] <= 450]
    for l in top_lines:
        print(f"  y={int(l['y']):4d}, x={int(l['x']):4d}: {l['text']}")
