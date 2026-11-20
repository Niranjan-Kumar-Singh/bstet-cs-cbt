import re

with open('reports/pdf_text/official_shift4.txt', 'r', encoding='utf-8') as f:
    en_txt = f.read()

# Extract every Question ID in appearance order
qids = re.findall(r'Question ID\s*:\s*(\d+)', en_txt)
print('Total Question IDs in shift4:', len(qids))
print('Unique:', len(set(qids)))

# Also check regex that handles wrapped numbers: Q\.\s*(\d+)(?:\s*\n\s*(\d+))?
qnums = []
for m in re.finditer(r'Q\.\s*(\d+)(?:\s*\n\s*(\d+))?', en_txt):
    d1 = m.group(1)
    d2 = m.group(2) if m.group(2) else ""
    num = int(d1 + d2)
    qnums.append(num)

print('Extracted qnums count:', len(qnums))
print('First 10 qnums:', qnums[:10])
print('Last 10 qnums:', qnums[-10:])
