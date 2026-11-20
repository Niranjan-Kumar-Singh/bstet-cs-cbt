import re, json

def update_shift_file(en_txt_path, hi_json_path, js_path, var_name):
    with open(en_txt_path, 'r', encoding='utf-8') as f:
        en_txt = f.read()

    qids = re.findall(r'Question ID\s*:\s*(\d+)', en_txt)
    if len(qids) != 150:
        raise ValueError(f"Expected 150 Question IDs in {en_txt_path}, found {len(qids)}")

    qnum_to_qid = {i + 1: qids[i] for i in range(150)}

    with open(hi_json_path, 'r', encoding='utf-8') as f:
        hi_dict = json.load(f)

    with open(js_path, 'r', encoding='utf-8') as f:
        js_content = f.read()

    prefix = f'window.{var_name} = '
    idx = js_content.find(prefix)
    if idx == -1:
        raise ValueError(f"Prefix {prefix} not found in {js_path}")

    json_str = js_content[idx + len(prefix):].rstrip().rstrip(';')
    data = json.loads(json_str)

    updated_count = 0
    for q in data['questions']:
        qnum = q['questionNumber']
        qid = qnum_to_qid.get(qnum)
        if qid and qid in hi_dict:
            hi_item = hi_dict[qid]
            q['question_hi'] = hi_item['question_hi']
            q['options_hi'] = {
                "A": hi_item['options_hi']['A'],
                "B": hi_item['options_hi']['B'],
                "C": hi_item['options_hi']['C'],
                "D": hi_item['options_hi']['D']
            }
            q['officialQuestionId'] = qid
            updated_count += 1
        else:
            print(f"Warning: Q{qnum} (QID {qid}) not found in Hindi dictionary!")

    print(f"Updated {updated_count} / {len(data['questions'])} questions in {js_path}")

    # Write back clean JSON
    new_js = f"// Generated Question Paper Data\nwindow.{var_name} = {json.dumps(data, ensure_ascii=False, indent=2)};\n"
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(new_js)
    print(f"Successfully saved {js_path}")

update_shift_file(
    'reports/pdf_text/official_shift4.txt',
    'incoming/stet_2025_07nov_s1_hindi.json',
    'js/data/official-shift4.js',
    'official_shift4'
)

update_shift_file(
    'reports/pdf_text/official_shift3.txt',
    'incoming/stet_2025_04nov_s2_hindi.json',
    'js/data/official-shift3.js',
    'official_shift3'
)
