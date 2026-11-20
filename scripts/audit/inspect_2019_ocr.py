import json, re

with open(r'incoming\stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

print(f"Loaded {len(pages)} pages.")

# Scan for question markers
# In the booklet: "1.", "2.", "51.", "150."
q_candidates = []
for p in pages:
    pnum = p["pdfPage"]
    for idx, l in enumerate(p["lines"]):
        txt = l["text"]
        # Check if line starts with question number or is just question number
        m = re.match(r'^(\d{1,3})\s*(?:\.|\))\s*(.*)$', txt)
        if m:
            num = int(m.group(1))
            rest = m.group(2)
            if 1 <= num <= 150:
                q_candidates.append({
                    "page": pnum,
                    "lineIdx": idx,
                    "num": num,
                    "rest": rest,
                    "y": l["y"],
                    "x": l["x"]
                })

print(f"Total question number markers detected: {len(q_candidates)}")
detected_nums = sorted(list(set(q["num"] for q in q_candidates)))
print(f"Unique question numbers detected: {len(detected_nums)} / 150")

missing_nums = [i for i in range(1, 151) if i not in detected_nums]
print(f"Missing question numbers: {missing_nums}")
