import json, re

with open('incoming/stet_2019_shift2_ocr_pages.json', encoding='utf-8') as f:
    pages = json.load(f)

print(f"Loaded {len(pages)} pages")

for p in pages[4:15]:
    pno = p['pdfPage']
    lines = [l['text'].strip() for l in p['lines'] if l['text'].strip()]
    print(f"\n=================== PAGE {pno} ===================")
    for l in lines:
        if any(skip in l for skip in ['Zh2eppv', 'GET IT ON', 'GETIT ON', 'Google Play', 'Set-H', 'ST-28', 'Scanned', 'Prime', 'Adda']):
            continue
        print(l)
