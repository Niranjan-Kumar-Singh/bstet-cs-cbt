import json, re

with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

def clean(t):
    t = re.sub(r'[\x00-\x1f\x7f-\x9f]', '', t)
    t = t.replace('？', '?').replace('言', '').replace('市', '').replace('X', '').replace('fa', '')
    return re.sub(r'\s+', ' ', t).strip()

def is_latin_text(t):
    latin = len(re.findall(r'[a-zA-Z]', t))
    return latin >= 3 and latin / max(1, len(t)) > 0.35

for pno in [5, 6, 7, 8, 22, 23, 24, 25, 26, 46, 47, 50]:
    page = next((p for p in pages if p["pdfPage"] == pno), None)
    if not page: continue
    print(f"\n=================== PDF Page {pno} ===================")
    for l in page["lines"]:
        if 150 <= l["y"] <= 1620:
            txt = clean(l["text"])
            if is_latin_text(txt) and not any(w in txt for w in ['ST-28', 'Set-A', 'General Knowledge', 'COMPUTER SCIENCE']):
                print(f"  y={int(l['y']):4d}, x={int(l['x']):4d}: {txt}")
