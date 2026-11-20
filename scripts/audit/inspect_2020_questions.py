import json, re, os, sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

with open('incoming/stet_2020_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

print(f"Total pages in 2020: {len(pages)}")

# Print sample questions across 2020
for pno in [4, 5, 8, 10, 20, 21, 22, 23, 24, 25, 49]:
    page = next(p for p in pages if p["pdfPage"] == pno)
    lines = [l for l in page["lines"] if 150 <= l["y"] <= 1620 and not any(w in l["text"] for w in ['GET IT ON', 'Google Play', 'Zh2epp', 'Lh2epp'])]
    print(f"\n--- Page {pno} ---")
    for l in lines[:10]:
        print(f"  y={int(l['y']):4d}: {l['text']}")
