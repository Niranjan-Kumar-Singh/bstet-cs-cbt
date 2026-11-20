import json, re

with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

print(f"Total pages: {len(pages)}")

# Let's inspect where question numbers appear on every single page
page_qnums = {}
for p in pages:
    pnum = p["pdfPage"]
    q_found = []
    for l in p["lines"]:
        if 150 <= l["y"] <= 1650:
            # Check for question number at start of line
            m = re.search(r'(?:^|\s)([1-9][0-9]?|1[0-4][0-9]|150)\s*[\.\)]', l["text"])
            if m:
                q_found.append((int(m.group(1)), l["text"], l["y"]))
    # deduplicate by question number
    seen = set()
    uniq = []
    for qn, txt, y in sorted(q_found, key=lambda x: x[0]):
        if qn not in seen:
            seen.add(qn)
            uniq.append((qn, y, txt))
    page_qnums[pnum] = uniq

total_detected = sum(len(qs) for qs in page_qnums.values())
print(f"Total question numbers detected: {total_detected}")
for pnum, qs in page_qnums.items():
    q_list = [f"Q{q[0]}" for q in qs]
    print(f"Page {pnum:2d} (items: {len(qs):2d}): {', '.join(q_list)}")
