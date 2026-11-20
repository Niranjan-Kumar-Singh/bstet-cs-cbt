import re

with open('reports/pdf_text/official_shift3.txt', 'r', encoding='utf-8') as f:
    en_txt = f.read()

qids3 = re.findall(r'Question ID\s*:\s*(\d+)', en_txt)
print('Total Question IDs in shift3:', len(qids3))
print('Unique:', len(set(qids3)))

qnums3 = []
for m in re.finditer(r'Q\.\s*(\d+)(?:\s*\n\s*(\d+))?', en_txt):
    d1 = m.group(1)
    d2 = m.group(2) if m.group(2) else ""
    num = int(d1 + d2)
    qnums3.append(num)

print('Extracted qnums3 count:', len(qnums3))
print('First 10 qnums3:', qnums3[:10])
print('Last 10 qnums3:', qnums3[-10:])
