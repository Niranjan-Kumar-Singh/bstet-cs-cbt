import json, re

with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

# On each page:
# Let's inspect all lines
for p in pages:
    pnum = p["pdfPage"]
    lines = [l for l in p["lines"] if 150 <= l["y"] <= 1620 and not any(w in l["text"] for w in ['ST-28', 'Set-A', 'General Knowledge', '(Q.Nos.', 'COMPUTER SCIENCE', 'Google Play', 'GET IT ON', 'TestPrime'])]
    
    # Find all occurrences of number dot or number space at start of line
    q_starts = []
    for idx, l in enumerate(lines):
        txt = l["text"].strip()
        m = re.match(r'^([1-9][0-9]?|1[0-4][0-9]|150)\s*[\.\:\s](.*)$', txt)
        if m:
            num = int(m.group(1))
            q_starts.append((num, idx, l["y"], l["x"], m.group(2).strip()))
        elif re.match(r'^([1-9][0-9]?|1[0-4][0-9]|150)$', txt) and l["x"] < 250:
            num = int(txt)
            q_starts.append((num, idx, l["y"], l["x"], ""))

    print(f"Page {pnum:2d}: found {len(q_starts)} starters -> {[q[0] for q in q_starts]}")
