import json, re

with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

# Inspect page 5 lines in detail
p5 = pages[0] # pdfPage 5
print(f"--- Page {p5['pdfPage']} lines ---")
for l in sorted(p5["lines"], key=lambda x: (x["y"], x["x"])):
    print(f"y={int(l['y']):4d}, x={int(l['x']):4d}: {l['text']}")
