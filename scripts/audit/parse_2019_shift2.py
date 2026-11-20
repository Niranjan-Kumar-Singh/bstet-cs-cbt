import json, re

with open('incoming/stet_2019_shift2_ocr_pages.json', encoding='utf-8') as f:
    pages = json.load(f)

# Combine lines per page
all_text = []
for p in pages:
    pno = p['pdfPage']
    if pno <= 4: continue
    lines = [l['text'].strip() for l in p['lines'] if l['text'].strip()]
    all_text.append((pno, lines))

print(f"Loaded {len(all_text)} pages")

# Let's inspect questions by number on each page
found_qs = {}
for pno, lines in all_text:
    for idx, l in enumerate(lines):
        m = re.match(r'^(\d{1,3})\.\s*(.*)$', l)
        if m:
            num = int(m.group(1))
            if 1 <= num <= 150:
                rest = m.group(2).strip()
                found_qs[num] = (pno, idx, rest, lines[idx:])

print(f"Total numbered questions detected: {len(found_qs)}/150")
missing = [i for i in range(1, 151) if i not in found_qs]
print("Missing:", missing)

# Sample first 5
for n in sorted(found_qs.keys())[:5]:
    pno, idx, rest, context = found_qs[n]
    print(f"\n--- Q{n} (Page {pno}) ---")
    print("  Header text:", rest)
    for cl in context[1:8]:
        print("   ", cl)
