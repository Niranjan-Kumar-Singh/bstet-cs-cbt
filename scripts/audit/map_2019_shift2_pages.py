import json, re

with open('incoming/stet_2019_shift2_ocr_pages.json', encoding='utf-8') as f:
    pages_data = json.load(f)

print(f"Total pages in OCR JSON: {len(pages_data)}")

# Search for question starts across all pages
# In STET booklets, questions are numbered 1 to 150: e.g. "1.", "2.", "51.", etc.
q_locations = {}

for p in pages_data:
    pno = p['pdfPage']
    if pno <= 4: # Skip covers
        continue
    for line in p['lines']:
        text = line['text'].strip()
        # look for standalone number or "1.", "51." etc at the start of a line
        m = re.match(r'^(\d{1,3})\.?\s*$', text)
        if not m:
            m = re.match(r'^(\d{1,3})\.\s+([A-Za-z].*)$', text)
        if m:
            num = int(m.group(1))
            if 1 <= num <= 150:
                if num not in q_locations:
                    q_locations[num] = []
                q_locations[num].append((pno, line))

print(f"Unique question numbers detected directly: {len(q_locations)}/150")
missing = [i for i in range(1, 151) if i not in q_locations]
print(f"Missing question numbers: {missing}")
