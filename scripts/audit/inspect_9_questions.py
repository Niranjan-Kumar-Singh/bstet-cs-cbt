import json, re

with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

page_map = {
    13: 9, 23: 12, 28: 14, 39: 17, 71: 26, 80: 28, 110: 37, 132: 43, 136: 44
}

for qn, pno in page_map.items():
    p = next(page for page in pages if page["pdfPage"] == pno)
    print(f"\n================ Question {qn} on Page {pno} ================")
    lines = [l for l in p["lines"] if 150 <= l["y"] <= 1620 and not any(w in l["text"] for w in ['ST-28', 'Set-A', 'General Knowledge', 'COMPUTER SCIENCE'])]
    lines.sort(key=lambda l: (l["y"], l["x"]))
    for l in lines:
        print(f"y={int(l['y']):4d}, x={int(l['x']):4d}: {l['text']}")
