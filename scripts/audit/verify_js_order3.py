import re, json

with open('reports/pdf_text/official_shift3.txt', 'r', encoding='utf-8') as f:
    txt = f.read()
blocks = re.findall(r'Q\.(\d+)\s+([\s\S]*?)Ans\b[\s\S]*?Question ID\s*:\s*(\d+)', txt)

with open('js/data/official-shift3.js', 'r', encoding='utf-8') as f:
    js_txt = f.read()

m = re.search(r'\"questions\":\s*(\[[\s\S]*\])\s*\n\};', js_txt)
if not m:
    m = re.search(r'questions\":\s*(\[[\s\S]*\])\s*\}', js_txt)

qs = json.loads(m.group(1))
print(f'Total questions in official-shift3.js: {len(qs)}')

for i in range(5):
    q_js = qs[i]['question'][:50]
    q_txt = re.sub(r'\s+', ' ', blocks[i][1]).strip()[:50]
    qid = blocks[i][2]
    print(f'Q{i+1}: QID {qid}')
    print(f'   JS:  {q_js}')
    print(f'   TXT: {q_txt}')
