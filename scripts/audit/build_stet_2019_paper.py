import json, re

with open(r'incoming\stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

def clean_ocr(text):
    text = text.replace('？', '?').replace('言', '').replace('市', '').replace('X', '')
    text = re.sub(r'[\x00-\x1f\x7f-\x9f]', '', text)
    return re.sub(r'\s+', ' ', text).strip()

def is_english(text):
    latin = len(re.findall(r'[a-zA-Z]', text))
    return latin >= 3 and (latin / max(1, len(text))) > 0.45

# 1. Flatten all rows across all 44 pages with page metadata
all_rows = []
for p in pages:
    pnum = p["pdfPage"]
    clean_lines = [
        l for l in p["lines"] 
        if 150 <= l["y"] <= 1610 and 
        not any(w in l["text"] for w in ['ST-28', 'Set-A', 'General Knowledge', '(Q.Nos.', 'COMPUTER SCIENCE', 'Google Play', 'GET IT ON', 'TestPrime'])
    ]

    rows = []
    for l in clean_lines:
        matched = False
        for r in rows:
            if abs(r[0]["y"] - l["y"]) <= 18:
                r.append(l)
                matched = True
                break
        if not matched:
            rows.append([l])

    for r in rows:
        r.sort(key=lambda x: x["x"])
    rows.sort(key=lambda r: r[0]["y"])

    for r in rows:
        txt = clean_ocr(" ".join([item["text"] for item in r]))
        if txt and len(txt) > 1:
            all_rows.append({
                "page": pnum,
                "y": sum(item["y"] for item in r) / len(r),
                "text": txt
            })

print(f"Total processed rows across 44 pages: {len(all_rows)}")

# Find all question starts across all_rows
# Questions start with number like "1.", "2.", "51." or appear as English statements
q_indices = []
for idx, r in enumerate(all_rows):
    m = re.match(r'^(\d{1,3})\s*\.\s*(.*)$', r["text"])
    if m:
        num = int(m.group(1))
        if 1 <= num <= 150:
            q_indices.append((num, idx, m.group(2)))

print(f"Found {len(q_indices)} explicit question number markers.")
detected_nums = {item[0] for item in q_indices}
print(f"Missing from explicit markers: {[i for i in range(1, 151) if i not in detected_nums]}")
