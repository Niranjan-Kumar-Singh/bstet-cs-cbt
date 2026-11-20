import json, re

with open(r'incoming\stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

def clean_ocr(text):
    text = text.replace('？', '?').replace('言', '').replace('市', '').replace('X', '')
    text = re.sub(r'[\x00-\x1f\x7f-\x9f]', '', text)
    return re.sub(r'\s+', ' ', text).strip()

# Build rows with page and row index
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

# Map each explicit question marker to its row index
q_markers = {}
for idx, r in enumerate(all_rows):
    m = re.match(r'^(\d{1,3})\s*\.\s*(.*)$', r["text"])
    if m:
        num = int(m.group(1))
        if 1 <= num <= 150:
            if num not in q_markers:
                q_markers[num] = idx

print(f"Total mapped explicit question markers: {len(q_markers)}")

# Let's inspect rows around missing numbers: e.g. Q1, Q6, Q9, Q12, Q45, Q68, Q71
for missing in [1, 6, 9, 12, 45, 68, 71]:
    prev_idx = q_markers.get(missing - 1, 0)
    next_idx = q_markers.get(missing + 1, len(all_rows))
    print(f"\n--- Between Q{missing-1} (row {prev_idx}) and Q{missing+1} (row {next_idx}) ---")
    for r_i in range(prev_idx, min(next_idx, prev_idx + 10)):
        print(f"  [{r_i}] (p.{all_rows[r_i]['page']}) {all_rows[r_i]['text']}")
