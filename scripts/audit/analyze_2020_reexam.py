import json, re

with open('incoming/stet_2020_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

# Inspect pages 4 to 20 (GK/Skills) and 21 to 49 (CS)
print(f"Total pages: {len(pages)}")
for p in pages:
    pno = p["pdfPage"]
    if pno in [4, 5, 6, 7, 8, 9, 10, 20, 21, 22, 23, 24, 25, 48, 49]:
        q_lines = [l for l in p["lines"] if re.search(r'(?:^|\s)([1-9][0-9]?|1[0-4][0-9]|150)\s*[\.\)]', l["text"])]
        print(f"Page {pno:2d}: {len(p['lines'])} lines, markers: {[l['text'] for l in q_lines]}")
