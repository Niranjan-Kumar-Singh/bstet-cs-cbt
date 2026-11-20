import re, json

with open('reports/pdf_text/official_2023.txt', encoding='utf-8') as f:
    text = f.read()

# First strip all page transitions and headers cleanly from the entire document
text = re.sub(r'--- PAGE \d+ ---\s*', '', text)
text = re.sub(r'Subject (?:Question|Name|Code)[^\n]*\n?', '', text)
text = re.sub(r'QUESTION PAPER[^\n]*\n?', '', text)
text = re.sub(r'Uchcha Madhyamic[^\n]*\n?', '', text)
text = re.sub(r'Exam Date[^\n]*\n?', '', text)
text = re.sub(r'Time\s*:[^\n]*\n?', '', text)

# Now find question blocks
q_blocks = re.findall(r'Question\s+(\d+)\s+Question Id\s*:\s*(\d+)(.*?)(?=Question\s+\d+\s+Question Id|\Z)', text, re.DOTALL)

print(f"Total blocks: {len(q_blocks)}")

parsed_questions = []
errors = []

for q_num_str, q_id_str, body in q_blocks:
    q_num = int(q_num_str)
    q_id = int(q_id_str)
    
    # Extract right option id
    m_right = re.search(r'Right Option Id\s*:\s*(\d+)', body)
    if not m_right:
        errors.append(f"Q{q_num}: No Right Option Id")
        continue
    right_opt_id = m_right.group(1)
    
    # Extract question text: from start of body up to 'Answer :'
    m_qtext = re.search(r'^(.*?)\s*Answer\s*:', body, re.DOTALL)
    if not m_qtext:
        errors.append(f"Q{q_num}: No question text before 'Answer :'")
        continue
    q_text = m_qtext.group(1).strip()
    # clean any stray page artifacts
    q_text = re.sub(r'--- PAGE \d+ ---\s*', '', q_text)
    q_text = re.sub(r'Subject (?:Question|Name|Code)[^\n]*\n?', '', q_text)
    q_text = re.sub(r'QUESTION PAPER[^\n]*\n?', '', q_text)
    q_text = re.sub(r'Uchcha Madhyamic[^\n]*\n?', '', q_text)
    q_text = re.sub(r'Exam Date[^\n]*\n?', '', q_text)
    q_text = re.sub(r'Time\s*:[^\n]*\n?', '', q_text).strip()
    
    # Extract options and option IDs
    # Format typically: (A) <text>\n<id>\n(B)...
    opt_pattern = re.findall(r'\(([A-D])\)\s*([^\n]+(?:\n(?!\([A-D]\)|\d{4,6}|Right Answer)[^\n]+)*)\s*\n\s*(\d{4,6})', body)
    
    options = {}
    opt_ids = {}
    for letter, opt_text, opt_id in opt_pattern:
        opt_clean = opt_text.strip()
        options[letter] = opt_clean
        opt_ids[letter] = opt_id
        
    correct_letter = None
    for letter, opt_id in opt_ids.items():
        if opt_id == right_opt_id:
            correct_letter = letter
            break
            
    if len(options) != 4 or not correct_letter:
        errors.append(f"Q{q_num} (ID {q_id}): options={list(options.keys())}, opt_ids={opt_ids}, right={right_opt_id}, matched={correct_letter}")
    else:
        parsed_questions.append({
            "qNum": q_num,
            "qId": q_id,
            "question": q_text,
            "options": options,
            "opt_ids": opt_ids,
            "right_opt_id": right_opt_id,
            "correctAnswer": correct_letter
        })

print(f"Parsed successfully: {len(parsed_questions)}/150")
if errors:
    print(f"Errors ({len(errors)}):")
    for e in errors[:10]:
        print(" ", e)
else:
    print("ALL 150 QUESTIONS PARSED 100% PERFECTLY!")
    
    # Show distribution of correct answers
    counts = {'A': 0, 'B': 0, 'C': 0, 'D': 0}
    for q in parsed_questions:
        counts[q['correctAnswer']] += 1
    print("Answer distribution:", counts)
