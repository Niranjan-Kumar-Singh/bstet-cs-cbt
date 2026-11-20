import re

with open('reports/pdf_text/official_shift4.txt', 'r', encoding='utf-8') as f:
    en_txt = f.read()

# Split by "--- PAGE" or "Question Type : MCQ"
pages = en_txt.split('Question Type : MCQ')
print('Question Type blocks in shift4:', len(pages)-1)

q_map = {}
for block in pages:
    m_qid = re.search(r'Question ID\s*:\s*(\d+)', block)
    m_qnum = re.search(r'Q\.(\d+)', block)
    if m_qid and m_qnum:
        q_map[int(m_qnum.group(1))] = m_qid.group(1)

print('Extracted qnum_to_qid entries:', len(q_map))
missing = [i for i in range(1, 151) if i not in q_map]
print('Missing qnums:', missing[:10])
