import json

with open('incoming/stet_2020_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

for pno in [2, 4, 5, 20, 21, 22, 49]:
    p = next(page for page in pages if page["pdfPage"] == pno)
    print(f"\n================ 2020 Re-Exam Page {pno} (Total lines: {len(p['lines'])}) ================")
    for l in p["lines"][:15]:
        print(f"  y={int(l['y']):4d}, x={int(l['x']):4d}: {l['text']}")
