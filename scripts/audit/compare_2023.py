import json, re

with open('reports/pdf_text/official_2023.txt', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r'--- PAGE \d+ ---\s*', '', text)
text = re.sub(r'Subject (?:Question|Name|Code)[^\n]*\n?', '', text)
text = re.sub(r'QUESTION PAPER[^\n]*\n?', '', text)
text = re.sub(r'Uchcha Madhyamic[^\n]*\n?', '', text)
text = re.sub(r'Exam Date[^\n]*\n?', '', text)
text = re.sub(r'Time\s*:[^\n]*\n?', '', text)

q_blocks = re.findall(r'Question\s+(\d+)\s+Question Id\s*:\s*(\d+)(.*?)(?=Question\s+\d+\s+Question Id|\Z)', text, re.DOTALL)

pdf_questions = []
for q_num_str, q_id_str, body in q_blocks:
    q_num = int(q_num_str)
    q_id = int(q_id_str)
    m_right = re.search(r'Right Option Id\s*:\s*(\d+)', body)
    right_opt_id = m_right.group(1)
    
    m_qtext = re.search(r'^(.*?)\s*Answer\s*:', body, re.DOTALL)
    q_text = m_qtext.group(1).strip()
    
    opt_pattern = re.findall(r'\(([A-D])\)\s*([^\n]+(?:\n(?!\([A-D]\)|\d{4,6}|Right Answer)[^\n]+)*)\s*\n\s*(\d{4,6})', body)
    options = {}
    opt_ids = {}
    for letter, opt_text, opt_id in opt_pattern:
        options[letter] = opt_text.strip()
        opt_ids[letter] = opt_id
        
    correct_letter = None
    for letter, opt_id in opt_ids.items():
        if opt_id == right_opt_id:
            correct_letter = letter
            break
            
    pdf_questions.append({
        "qNum": q_num,
        "qId": q_id,
        "question": q_text,
        "options": options,
        "opt_ids": opt_ids,
        "right_opt_id": right_opt_id,
        "correctAnswer": correct_letter
    })

with open('js/data/official-2023.js', encoding='utf-8') as f:
    js_text = f.read()

m = re.search(r'window\.official_2023\s*=\s*(\{[\s\S]*\});', js_text)
js_data = json.loads(m.group(1))
js_questions = js_data['questions']

print(f"PDF Qs: {len(pdf_questions)}, JS Qs: {len(js_questions)}")

diff_text = []
diff_answer = []

for i in range(150):
    pq = pdf_questions[i]
    jq = js_questions[i]
    
    # normalize whitespace for comparison
    pt = re.sub(r'\s+', ' ', pq['question']).strip().lower()
    jt = re.sub(r'\s+', ' ', jq['question']).strip().lower()
    
    # compare first 40 chars
    if pt[:40] != jt[:40]:
        diff_text.append({
            "qNum": i + 1,
            "qId": pq['qId'],
            "pdfText": pq['question'][:70],
            "jsText": jq['question'][:70],
            "pdfAnswer": pq['correctAnswer'],
            "jsAnswer": jq['correctAnswer']
        })
    elif pq['correctAnswer'] != jq['correctAnswer']:
        diff_answer.append({
            "qNum": i + 1,
            "qId": pq['qId'],
            "text": pq['question'][:70],
            "pdfAnswer": pq['correctAnswer'],
            "jsAnswer": jq['correctAnswer']
        })

print(f"Total Questions with different text (substituted): {len(diff_text)}")
print(f"Total Questions with same text but different answer key: {len(diff_answer)}")
print("\nAnswer key disagreements on same question:")
for d in diff_answer:
    print(f"  Q{d['qNum']:3d} (ID {d['qId']}): JS={d['jsAnswer']}, PDF={d['pdfAnswer']} | {d['text']}")

print(f"\nFirst 5 substituted questions:")
for d in diff_text[:5]:
    print(f"  Q{d['qNum']:3d}: PDF='{d['pdfText']}' vs JS='{d['jsText']}'")
