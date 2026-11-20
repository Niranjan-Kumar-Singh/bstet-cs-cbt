import json, re

with open(r'incoming\stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

def parse_page_options(lines):
    # Cluster lines that are near each other vertically (within 25px)
    rows = []
    for l in lines:
        matched_row = False
        for row in rows:
            if abs(row[0]["y"] - l["y"]) <= 20:
                row.append(l)
                matched_row = True
                break
        if not matched_row:
            rows.append([l])

    # Sort rows by y, and elements within row by x
    for r in rows:
        r.sort(key=lambda x: x["x"])
    rows.sort(key=lambda r: r[0]["y"])

    row_texts = []
    for r in rows:
        txt = " ".join([item["text"] for item in r])
        avg_y = sum([item["y"] for item in r]) / len(r)
        row_texts.append({"y": avg_y, "text": txt, "items": r})

    return row_texts

for p_idx in [0, 1, 17]: # Page 5, 6, 22
    p = pages[p_idx]
    clean_lines = [l for l in p["lines"] if 150 <= l["y"] <= 1610 and not any(w in l["text"] for w in ['ST-28', 'Set-A', 'General Knowledge', '(Q.Nos.', 'COMPUTER SCIENCE', 'Google Play', 'GET IT ON'])]
    row_texts = parse_page_options(clean_lines)
    print(f"\n=== Page {p['pdfPage']} Rows ({len(row_texts)}) ===")
    for r in row_texts[:15]:
        print(f"[{r['y']:.0f}] {r['text']}")
