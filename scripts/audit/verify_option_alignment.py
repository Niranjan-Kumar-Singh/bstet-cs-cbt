import re, json

def verify_all_option_ids(en_txt_path, hi_json_path):
    with open(en_txt_path, 'r', encoding='utf-8') as f:
        en_txt = f.read()

    blocks = re.findall(r'Q\.(\d+)[\s\S]*?Question ID\s*:\s*(\d+)[\s\S]*?Option 1 ID\s*:\s*(\d+)[\s\S]*?Option 2 ID\s*:\s*(\d+)[\s\S]*?Option 3 ID\s*:\s*(\d+)[\s\S]*?Option 4 ID\s*:\s*(\d+)', en_txt)

    with open(hi_json_path, 'r', encoding='utf-8') as f:
        hi_dict = json.load(f)

    mismatches = 0
    for qnum, qid, o1, o2, o3, o4 in blocks:
        hi_q = hi_dict.get(qid)
        if not hi_q:
            mismatches += 1
            continue
        hi_opts = hi_q['option_ids']
        if (hi_opts['1'] != o1 or hi_opts['2'] != o2 or hi_opts['3'] != o3 or hi_opts['4'] != o4):
            mismatches += 1

    print(f'Verification for {en_txt_path}:')
    print(f'  Total questions: {len(blocks)}')
    print(f'  Option ID mismatches: {mismatches}')

verify_all_option_ids('reports/pdf_text/official_shift4.txt', 'incoming/stet_2025_07nov_s1_hindi.json')
verify_all_option_ids('reports/pdf_text/official_shift3.txt', 'incoming/stet_2025_04nov_s2_hindi.json')
