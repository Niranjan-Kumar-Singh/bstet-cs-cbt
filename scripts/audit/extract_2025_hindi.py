import pymupdf, re, json

def parse_hindi_response_pdf(pdf_path):
    doc = pymupdf.open(pdf_path)
    full_text = ''
    for p in doc:
        full_text += p.get_text() + '\n'

    # Split by Question marker: Q.\d+
    # Matches patterns like: Q.1 ... Question ID : \d+ ... Status : ...
    # Let's split on Q.\s*\d+
    pattern = re.compile(r'(Q\.\s*\d+[\s\S]*?Question ID\s*:\s*\d+[\s\S]*?Option 4 ID\s*:\s*\d+[\s\S]*?(?:Chosen Option\s*:\s*[A-D\-]|Status\s*:\s*\w+))')
    
    matches = pattern.findall(full_text)
    print(f'Total question matches found in {pdf_path}: {len(matches)}')
    
    parsed = {}
    for m in matches:
        qid_m = re.search(r'Question ID\s*:\s*(\d+)', m)
        if not qid_m: continue
        qid = qid_m.group(1)
        
        # Extract statement between Q.\d+ and "Ans"
        q_text_m = re.search(r'Q\.\s*\d+([\s\S]*?)\nAns\b', m)
        q_text = q_text_m.group(1).strip() if q_text_m else ""
        # Clean newlines and double spaces
        q_text = re.sub(r'\s+', ' ', q_text).strip()
        
        # Extract options
        opt_pattern = re.search(r'Ans\s*\nA\.\s*([\s\S]*?)\nB\.\s*([\s\S]*?)\nC\.\s*([\s\S]*?)\nD\.\s*([\s\S]*?)\nQuestion Type', m)
        if opt_pattern:
            opt_a = re.sub(r'\s+', ' ', opt_pattern.group(1)).strip()
            opt_b = re.sub(r'\s+', ' ', opt_pattern.group(2)).strip()
            opt_c = re.sub(r'\s+', ' ', opt_pattern.group(3)).strip()
            opt_d = re.sub(r'\s+', ' ', opt_pattern.group(4)).strip()
        else:
            opt_a = opt_b = opt_c = opt_d = ""
            
        opt1_id = re.search(r'Option 1 ID\s*:\s*(\d+)', m)
        opt2_id = re.search(r'Option 2 ID\s*:\s*(\d+)', m)
        opt3_id = re.search(r'Option 3 ID\s*:\s*(\d+)', m)
        opt4_id = re.search(r'Option 4 ID\s*:\s*(\d+)', m)
        chosen = re.search(r'Chosen Option\s*:\s*([A-D])', m)
        
        parsed[qid] = {
            "question_id": qid,
            "question_hi": q_text,
            "options_hi": {
                "A": opt_a,
                "B": opt_b,
                "C": opt_c,
                "D": opt_d
            },
            "option_ids": {
                "1": opt1_id.group(1) if opt1_id else None,
                "2": opt2_id.group(1) if opt2_id else None,
                "3": opt3_id.group(1) if opt3_id else None,
                "4": opt4_id.group(1) if opt4_id else None
            },
            "chosen_option": chosen.group(1) if chosen else None
        }
    return parsed

parsed_07nov = parse_hindi_response_pdf(r'incoming\source_pdfs\Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-07-Nov-2025-Shift-1-Hindi.pdf')
print('Extracted valid 07-Nov questions:', len(parsed_07nov))

with open('incoming/stet_2025_07nov_s1_hindi.json', 'w', encoding='utf-8') as f:
    json.dump(parsed_07nov, f, ensure_ascii=False, indent=2)
print('Saved incoming/stet_2025_07nov_s1_hindi.json')

parsed_04nov = parse_hindi_response_pdf(r'incoming\source_pdfs\Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-04-Nov-2025-Shift-2-Hindi.pdf')
print('Extracted valid 04-Nov questions:', len(parsed_04nov))

with open('incoming/stet_2025_04nov_s2_hindi.json', 'w', encoding='utf-8') as f:
    json.dump(parsed_04nov, f, ensure_ascii=False, indent=2)
print('Saved incoming/stet_2025_04nov_s2_hindi.json')
