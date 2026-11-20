import json

with open('incoming/stet_2019_shift2_ocr_pages.json', encoding='utf-8') as f:
    pages_data = json.load(f)

for p in pages_data[4:7]:
    print(f"=== Page {p['pdfPage']} ({len(p['lines'])} lines) ===")
    for l in p['lines'][:30]:
        print(f"  y={int(l['y']):3d} x={int(l['x']):3d}: {l['text']}")
