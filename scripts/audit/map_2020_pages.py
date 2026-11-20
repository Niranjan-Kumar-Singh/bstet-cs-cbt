import json, re

with open('incoming/stet_2020_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

print(f"Total pages in 2020 Re-Exam: {len(pages)}")

# Detect question markers per page
page_qnums = {}
for p in pages:
    pnum = p["pdfPage"]
    q_found = []
    for l in p["lines"]:
        m = re.search(r'(?:^|\s)([1-9][0-9]?|1[0-4][0-9]|150)\s*[\.\)]', l["text"])
        if m:
            num = int(m.group(1))
            q_found.append((num, l["text"]))
    # deduplicate
    seen = set()
    uniq = []
    for qn, txt in sorted(q_found, key=lambda x: x[0]):
        if qn not in seen:
            seen.add(qn)
            uniq.append(qn)
    page_qnums[pnum] = uniq

total_detected = sum(len(qs) for qs in page_qnums.values())
print(f"Total question markers detected: {total_detected}")
for pnum, qs in sorted(page_qnums.items()):
    if qs:
        print(f"Page {pnum:2d} (count: {len(qs):2d}): {qs}")
