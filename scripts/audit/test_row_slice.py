import json, re

with open(r'incoming\stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

def clean_ocr(text):
    text = text.replace('？', '?').replace('言', '').replace('市', '').replace('X', '')
    return re.sub(r'\s+', ' ', text).strip()

def get_page_rows(page_obj):
    lines = page_obj["lines"]
    clean_lines = [
        l for l in lines 
        if 150 <= l["y"] <= 1610 and 
        not any(w in l["text"] for w in ['ST-28', 'Set-A', 'General Knowledge', '(Q.Nos.', 'COMPUTER SCIENCE', 'Google Play', 'GET IT ON', 'TestPrime'])
    ]

    # Cluster horizontally aligned items (within 18px vertically)
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

    row_data = []
    for r in rows:
        txt = " ".join([item["text"] for item in r])
        avg_y = sum([item["y"] for item in r]) / len(r)
        row_data.append({"y": avg_y, "text": clean_ocr(txt), "items": r})

    return row_data

for p_idx in [17]: # Page 22
    rows = get_page_rows(pages[p_idx])
    print(f"Page 22 rows: {len(rows)}")
    for r in rows:
        print(f"[{r['y']:.0f}] {r['text']}")
