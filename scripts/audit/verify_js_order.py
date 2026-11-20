import re, json

with open('reports/pdf_text/official_shift4.txt', 'r', encoding='utf-8') as f:
    txt = f.read()
blocks = re.findall(r'Q\.(\d+)\s+([\s\S]*?)Ans\b[\s\S]*?Question ID\s*:\s*(\d+)', txt)

with open('js/data/official-shift4.js', 'r', encoding='utf-8') as f:
    js_txt = f.read()

# Load questions array from js
m = re.search(r'\"questions\":\s*(\[[\s\S]*\])\s*\n\};', js_txt)
if not m:
    # try single quote or window.official_shift4 = { ... }
    m = re.search(r'questions\":\s*(\[[\s\S]*\])\s*\}', js_txt)

qs = json.loads(m.group(1))
print(f'Total questions in official-shift4.js: {len(qs)}')

# Compare first 5 questions
for i in range(5):
    q_js = qs[i]['question'][:50]
    q_txt = re.sub(r'\s+', ' ', blocks[i][1]).strip()[:50]
    qid = blocks[i][2]
    print(f'Q{i+1}: QID {qid}')
    print(f'   JS:  {q_js}')
    print(f'   TXT: {q_txt}')
