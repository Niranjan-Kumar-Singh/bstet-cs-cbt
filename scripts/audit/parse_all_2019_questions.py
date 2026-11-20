import json, re

with open(r'incoming\stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

def is_english_line(text):
    # Latin letters vs total
    latin = len(re.findall(r'[a-zA-Z]', text))
    if latin >= 4 and latin / max(1, len(text)) > 0.4:
        return True
    return False

def extract_questions_from_page(p):
    lines = p["lines"]
    pnum = p["pdfPage"]

    # Filter out header/footer ads
    clean = []
    for l in lines:
        y = l["y"]
        txt = l["text"]
        if y < 150 or y > 1620: continue
        if any(w in txt for w in ['ST-28', 'Set-A', 'General Knowledge', '(Q.Nos.', 'COMPUTER SCIENCE', 'Google Play', 'GET IT ON', 'TestPrime']):
            continue
        clean.append(l)

    # Find question split points or option groups
    # Notice: Each question ends with option (D) or (C)/(D)
    # And English statement comes right after Hindi options or question number
    return clean

total_clean = 0
for p in pages:
    cl = extract_questions_from_page(p)
    total_clean += len(cl)

print(f"Total clean lines across 44 pages: {total_clean}")
