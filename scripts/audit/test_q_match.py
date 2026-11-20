import re, json

with open('reports/pdf_text/official_shift4.txt', 'r', encoding='utf-8') as f:
    txt = f.read()

# Find all Q.\d+ and its Question ID in order
blocks = re.findall(r'Q\.(\d+)\s+([\s\S]*?)Question ID\s*:\s*(\d+)', txt)
print('Total English Q blocks in shift4.txt:', len(blocks))

with open('incoming/stet_2025_07nov_s1_hindi.json', 'r', encoding='utf-8') as f:
    hi_dict = json.load(f)

matched = 0
for qnum, stmt, qid in blocks:
    if qid in hi_dict:
        matched += 1

print(f'Matched Question IDs from English to Hindi in Shift 4: {matched} / {len(blocks)}')

with open('reports/pdf_text/official_shift3.txt', 'r', encoding='utf-8') as f:
    txt3 = f.read()

blocks3 = re.findall(r'Q\.(\d+)\s+([\s\S]*?)Question ID\s*:\s*(\d+)', txt3)
print('Total English Q blocks in shift3.txt:', len(blocks3))

with open('incoming/stet_2025_04nov_s2_hindi.json', 'r', encoding='utf-8') as f:
    hi_dict3 = json.load(f)

matched3 = 0
for qnum, stmt, qid in blocks3:
    if qid in hi_dict3:
        matched3 += 1

print(f'Matched Question IDs from English to Hindi in Shift 3: {matched3} / {len(blocks3)}')
