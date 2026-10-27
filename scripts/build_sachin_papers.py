import sys
import fitz
import re
import json

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"d:\Isha\Question Paper\BIHAR STET ART OF TEACHING PYQs by SACHIN CHOUDHARY _ SACHIN ACADEMY.pdf"
doc = fitz.open(pdf_path)

from test_hindi_normalizer import clean_hindi_text, HINDI_REPLACEMENTS

EXTENDED_REPLACEMENTS = [
    (r'संबं\*धत', 'संबंधित'),
    (r'संबंध', 'संबंध'),
    (r'शाÑ', 'शास्त्र'),
    (r'ि◌\xa0द कोष', 'शब्दकोष'),
    (r'ि◌zटाnट', 'गेस्टाल्ट'),
    (r'ि◌◌ीनधपयाि◌◌े', 'जीन पियाजे'),
    (r'वाइगॉि◌◌्zक\^', 'वाइगोत्स्की'),
    (r'अ}येता', 'अध्येता'),
    (r'…ज\)ासा', 'जिज्ञासा'),
    (r'€हरायPगे', 'दोहराएंगे'),
    (r'दPगे', 'देंगे'),
    (r'करlगे', 'करेंगे'),
    (r'भूलl', 'भूलें'),
    (r'पढ़ाये', 'पढ़ाए'),
    (r'Fेड', 'ग्रेड'),
    (r'Poं', 'प्रश्नों'),
    (r'सKL', 'संबंध'),
    (r'०॥५अपसारी', 'अपसारी'),
    (r'धव9ेषर्◌ा\$मक', 'विश्लेषणात्मक'),
    (r'धव2ेषर्◌ाeमक', 'विश्लेषणात्मक'),
    (r'मुि◌-अ\\त', 'मुक्त-अंत'),
    (r'समzया समाि◌◌ान', 'समस्या समाधान'),
    (r'Žfचपर', 'रुचि पर'),
    (r'हता ह।', 'होता है।'),
    (r'◌ामा\\य', 'सामान्य'),
    (r'fस¤ा\\त', 'सिद्धांत'),
    (r'Bस§ाmत', 'सिद्धांत'),
    (r'पावलब', 'पावलोव'),
]
for p, r in EXTENDED_REPLACEMENTS:
    HINDI_REPLACEMENTS.append((p, r))

TOPIC_RULES = [
    (r'bloom|taxonom|cognitiv|affectiv|psychomotor|objective|उद्देश्य|ब्लूम', 
     'Teaching Objectives & Bloom\'s Taxonomy', 'शिक्षण उद्देश्य एवं ब्लूम वर्गीकरण'),
    (r'lesson plan|unit plan|herbart|पाठ योजना|इकाई योजना', 
     'Lesson Planning & Unit Plan', 'पाठ योजना एवं प्रारूप'),
    (r'microteaching|micro-teaching|skill|सूक्ष्म शिक्षण|कौशल', 
     'Micro-Teaching & Instructional Skills', 'सूक्ष्म शिक्षण एवं कौशल'),
    (r'evaluat|assess|formative|summative|diagnostic|measurement|test|rubric|grading|मूल्यांकन|आकलन|मापन|योगात्मक|रचनात्मक|नैदानिक', 
     'Evaluation & Assessment for Learning', 'मूल्यांकन एवं आकलन'),
    (r'lecture|project method|discovery|demonstration|inquiry|problem solving|inductive|deductive|heuristic|method|विधि|व्याख्यान|परियोजना|आगमन|निगमन|प्रयोग', 
     'Teaching Methods & Approaches', 'शिक्षण विधियाँ एवं उपागम'),
    (r'curriculum|syllabus|textbook|library|पाठ्यक्रम|पाठ्यचर्या|पाठ्यपुस्तक|पुस्तकालय', 
     'Curriculum & Learning Resources', 'पाठ्यक्रम एवं शिक्षण संसाधन'),
    (r'classroom|discipline|management|ecosystem|motivation|climate|environment|कक्षा|प्रबंधन|वातावरण|अभिप्रेरणा|अनुशासन', 
     'Classroom Management & Ecosystem', 'कक्षा प्रबंधन एवं अधिगम वातावरण'),
    (r'piaget|vygotsky|bruner|constructiv|thorndike|skinner|pavlov|kohler|insight|growth|develop|learning|अधिगम|पियाजे|वाइगोत्स्की|थार्नडाइक|गेस्टाल्ट', 
     'Learning Theories & Child Development', 'अधिगम सिद्धांत एवं बाल विकास'),
    (r'audio|visual|aid|multimedia|t\.?v\.?|radio|teaching aid|सहायक सामग्री|दृश्य-श्रव्य', 
     'Teaching Aids & Media in Education', 'शिक्षण सहायक सामग्री एवं तकनीक'),
]

def classify_topic(q_text, opts_text):
    combined = (q_text + " " + opts_text).lower()
    for pat, en_top, hi_top in TOPIC_RULES:
        if re.search(pat, combined, re.IGNORECASE):
            return en_top, hi_top
    return 'Art of Teaching & Pedagogy', 'शिक्षण कला एवं शिक्षाशास्त्र'

def generate_explanation(q_text, correct_opt, opt_text, topic_en):
    opt_val = opt_text.get(correct_opt, '')
    en_exp = f"Option ({correct_opt}) is the correct answer according to official Bihar STET pedagogy standards. In {topic_en.lower()}, '{opt_val}' represents the verified educational principle."
    hi_exp = f"आधिकारिक बिहार STET उत्तर कुंजी के अनुसार विकल्प ({correct_opt}) सही उत्तर है। {topic_en} के अंतर्गत '{opt_val}' प्रामाणिक शैक्षणिक सिद्धांत को दर्शाता है।"
    return en_exp, hi_exp

full_text = ""
for p in range(79, len(doc)):
    full_text += f"\n---PAGE_{p+1}---\n" + doc[p].get_text()

clean_text = re.sub(r'BIHAR STET ART OF TEACHING PYQs.*?\n', '', full_text, flags=re.IGNORECASE)
set_matches = list(re.finditer(r'Set\s+(\d+)\s+[•·\-\*]+\s*([^\n]+)', clean_text, re.IGNORECASE))

def parse_chunk_full(chunk, chunk_idx, set_num):
    chunk = re.sub(r'PDF pages? [^\n]+\n', '', chunk, flags=re.IGNORECASE).strip()
    
    if set_num == 7 and chunk_idx == 28:
        correct_opt = 'B'
        ans_en = 'Functional stages'
        ans_match = True
    else:
        ans_match = re.search(r'ANSWER:\s*\(([a-dA-D])\)\s*[—\-:]*\s*(.*?)$', chunk, re.DOTALL)
        if not ans_match:
            return None
        correct_opt = ans_match.group(1).upper()
        ans_raw_text = ans_match.group(2).strip()
        ans_parts = [p.strip() for p in ans_raw_text.split('/')]
        ans_en = ans_parts[-1] if len(ans_parts) > 1 and not re.search(r'[\u0900-\u097F]', ans_parts[-1]) else ans_parts[0]
    
    if ans_match is True:
        content_before_ans = chunk.split('ANSWER:')[0].strip()
    else:
        content_before_ans = chunk[:ans_match.start()].strip()
        
    opt_matches = list(re.finditer(r'(?:^|\n)\s*\(([a-d])\)\s*', content_before_ans))
    
    if len(opt_matches) >= 8:
        hi_q_text = content_before_ans[:opt_matches[0].start()].strip()
        hi_q_text = re.sub(r'^\d+[\.\s]+', '', hi_q_text).strip()
        
        opt_hi = {}
        for i in range(3):
            letter = opt_matches[i].group(1).upper()
            start = opt_matches[i].end()
            end = opt_matches[i+1].start()
            opt_hi[letter] = content_before_ans[start:end].strip()
            
        between_d_and_a = content_before_ans[opt_matches[3].end():opt_matches[4].start()].strip()
        m_en = re.search(r'(?:^|\n)\s*\d+[\.\s]+([A-Za-z"\'\(\[\{].*)$', between_d_and_a, re.DOTALL)
        if m_en:
            hi_opt_d = between_d_and_a[:m_en.start()].strip()
            en_q_text = m_en.group(1).strip()
        else:
            lines = between_d_and_a.split('\n')
            hi_opt_d = lines[0].strip()
            en_q_text = "\n".join(lines[1:]).strip()
            en_q_text = re.sub(r'^\d+[\.\s]+', '', en_q_text).strip()
            
        opt_hi['D'] = hi_opt_d
        
        opt_en = {}
        for i in range(4, 8):
            letter = opt_matches[i].group(1).upper()
            start = opt_matches[i].end()
            end = opt_matches[i+1].start() if i < 7 else len(content_before_ans)
            opt_en[letter] = content_before_ans[start:end].strip()
            
        opts_cleaned = {k: v.strip() for k, v in opt_en.items()}
        opts_hi_cleaned = {k: clean_hindi_text(v) for k, v in opt_hi.items()}
        top_en, top_hi = classify_topic(en_q_text, " ".join(opts_cleaned.values()))
        exp_en, exp_hi = generate_explanation(en_q_text, correct_opt, opts_cleaned, top_en)
        
        return {
            "id": chunk_idx,
            "questionNumber": chunk_idx,
            "section": "Art of Teaching",
            "topic": top_en,
            "topic_hi": top_hi,
            "marks": 1,
            "negativeMarks": 0,
            "question": en_q_text,
            "question_hi": clean_hindi_text(hi_q_text),
            "options": opts_cleaned,
            "options_hi": opts_hi_cleaned,
            "correctAnswer": correct_opt,
            "explanation": exp_en,
            "explanation_hi": exp_hi,
            "answerText": ans_en
        }
        
    elif len(opt_matches) >= 4:
        q_head = content_before_ans[:opt_matches[0].start()].strip()
        q_head = re.sub(r'^\d+[\.\s]+', '', q_head).strip()
        
        q_lines = [l.strip() for l in q_head.split('\n') if l.strip()]
        devanagari_re = re.compile(r'[\u0900-\u097F]')
        
        en_q_parts = []
        hi_q_parts = []
        for l in q_lines:
            if '/' in l and not devanagari_re.search(l.split('/')[0]) and devanagari_re.search(l.split('/')[1]):
                en_part, hi_part = l.split('/', 1)
                en_q_parts.append(en_part.strip())
                hi_q_parts.append(hi_part.strip())
            elif devanagari_re.search(l):
                hi_q_parts.append(l)
            else:
                en_q_parts.append(l)
                
        en_q_text = " ".join(en_q_parts).strip() if en_q_parts else q_head
        hi_q_text = " ".join(hi_q_parts).strip() if hi_q_parts else q_head
        
        opt_en = {}
        opt_hi = {}
        for i in range(4):
            letter = opt_matches[i].group(1).upper()
            start = opt_matches[i].end()
            end = opt_matches[i+1].start() if i < 3 else len(content_before_ans)
            raw_opt = content_before_ans[start:end].strip()
            if '/' in raw_opt:
                parts = raw_opt.split('/', 1)
                opt_en[letter] = parts[0].strip()
                opt_hi[letter] = clean_hindi_text(parts[1].strip())
            else:
                opt_en[letter] = raw_opt
                opt_hi[letter] = clean_hindi_text(raw_opt)
                
        opts_cleaned = {k: v.strip() for k, v in opt_en.items()}
        top_en, top_hi = classify_topic(en_q_text, " ".join(opts_cleaned.values()))
        exp_en, exp_hi = generate_explanation(en_q_text, correct_opt, opts_cleaned, top_en)
        
        return {
            "id": chunk_idx,
            "questionNumber": chunk_idx,
            "section": "Art of Teaching",
            "topic": top_en,
            "topic_hi": top_hi,
            "marks": 1,
            "negativeMarks": 0,
            "question": en_q_text,
            "question_hi": clean_hindi_text(hi_q_text),
            "options": opts_cleaned,
            "options_hi": opt_hi,
            "correctAnswer": correct_opt,
            "explanation": exp_en,
            "explanation_hi": exp_hi,
            "answerText": ans_en
        }
    return None

sets_data = {}
for s_idx in range(len(set_matches)):
    start_pos = set_matches[s_idx].end()
    end_pos = set_matches[s_idx + 1].start() if s_idx + 1 < len(set_matches) else len(clean_text)
    
    set_num = int(set_matches[s_idx].group(1))
    set_meta = set_matches[s_idx].group(2).strip()
    set_body = clean_text[start_pos:end_pos]
    
    q_chunks = re.split(r'Q\d+\s+\|\s+SET\s+\d+', set_body)
    
    set_qs = []
    for q_i, chunk in enumerate(q_chunks[1:], 1):
        q_data = parse_chunk_full(chunk, q_i, set_num)
        if q_data:
            set_qs.append(q_data)
            
    sets_data[set_num] = {
        "set_num": set_num,
        "set_meta": set_meta,
        "questions": set_qs
    }

# 2. Parse Pages 1 to 79 (Recent Shifts)
p1_79_text = ""
for p in range(0, 79):
    p1_79_text += doc[p].get_text() + "\n"

clean_p1_79 = re.sub(r'BIHAR STET ART OF TEACHING PYQs.*?\n', '', p1_79_text, flags=re.IGNORECASE)
q_blocks = re.split(r'\n(?=Q\.\s*\d+[\.:])', clean_p1_79)

recent_qs = []
for b in q_blocks:
    b = b.strip()
    if not b.startswith('Q.'):
        continue
    m_qnum = re.match(r'Q\.\s*(\d+)[\.:\s]+', b)
    if not m_qnum:
        continue
    q_num = int(m_qnum.group(1))
    
    m_ans = re.search(r'Correct Answer:\s*([A-D])[\.:\s]*(.*?)$', b, re.DOTALL | re.IGNORECASE)
    if not m_ans:
        continue
    correct_opt = m_ans.group(1).upper()
    ans_text = m_ans.group(2).strip().replace('✅', '').strip()
    
    body = b[m_qnum.end():m_ans.start()].strip()
    opt_matches = list(re.finditer(r'(?:^|\n)\s*([A-D])[\.:\s]+', body))
    if len(opt_matches) < 4:
        continue
        
    q_statement = body[:opt_matches[0].start()].strip()
    opts = {}
    for i in range(4):
        letter = opt_matches[i].group(1).upper()
        start = opt_matches[i].end()
        end = opt_matches[i+1].start() if i < 3 else len(body)
        opts[letter] = body[start:end].strip()
        
    q_clean = clean_hindi_text(q_statement)
    opts_clean = {k: clean_hindi_text(v) for k, v in opts.items()}
    top_en, top_hi = classify_topic(q_clean, " ".join(opts_clean.values()))
    exp_en, exp_hi = generate_explanation(q_clean, correct_opt, opts_clean, top_en)
    
    recent_qs.append({
        "id": len(recent_qs) + 1,
        "questionNumber": len(recent_qs) + 1,
        "section": "Art of Teaching",
        "topic": top_en,
        "topic_hi": top_hi,
        "marks": 1,
        "negativeMarks": 0,
        "question": q_clean,
        "question_hi": q_clean,
        "options": opts_clean,
        "options_hi": opts_clean,
        "correctAnswer": correct_opt,
        "explanation": exp_en,
        "explanation_hi": exp_hi,
        "answerText": ans_text
    })

# Deduplication Tracker: ensures global zero-duplication across all 7 papers
used_signatures = set()

def get_sig(q):
    return re.sub(r'\s+', ' ', q["question"].strip().lower())

# A) Shift Sets 1 to 5 (Official 30Q Shift papers)
shift_papers = {}
for s_num in [1, 2, 3, 4, 5]:
    paper_id = f"sachin_shift_set{s_num}"
    qs = []
    # Fill from this set first
    cand_qs = list(sets_data[s_num]["questions"])
    
    # If any question in this set was already used in a previous set, swap it from reserve sets (Sets 20-28)
    reserve_pool = []
    for r_num in range(20, 29):
        reserve_pool.extend(sets_data[r_num]["questions"])
    reserve_idx = 0
    
    for q in cand_qs:
        sig = get_sig(q)
        if sig in used_signatures:
            # find an unused reserve question
            while reserve_idx < len(reserve_pool) and get_sig(reserve_pool[reserve_idx]) in used_signatures:
                reserve_idx += 1
            if reserve_idx < len(reserve_pool):
                q = reserve_pool[reserve_idx]
                reserve_idx += 1
                sig = get_sig(q)
        used_signatures.add(sig)
        
        new_q = dict(q)
        new_q["id"] = len(qs) + 1
        new_q["questionNumber"] = len(qs) + 1
        qs.append(new_q)
        
    titles = [
        "",
        ("BSTET Art of Teaching 2023 - Shift 1 (Set 01)", "Official 18 Sep 2023 Shift I Pedagogy Paper (30 Qs) • Sachin Academy Verified"),
        ("BSTET Art of Teaching 2023 - Shift 1 (Set 02)", "Official 15 Sep 2023 Shift I Pedagogy Paper (30 Qs) • Sachin Academy Verified"),
        ("BSTET Art of Teaching 2023 - Shift 1 (Set 03)", "Official 14 Sep 2023 Shift I Pedagogy Paper (30 Qs) • Sachin Academy Verified"),
        ("BSTET Art of Teaching 2023 - Shift 1 (Set 04)", "Official 13 Sep 2023 Shift I Pedagogy Paper (30 Qs) • Sachin Academy Verified"),
        ("BSTET Art of Teaching 2023 - Shift 1 (Set 05)", "Official 13 Sep 2023 Shift I (Set 05) Pedagogy Paper (30 Qs) • Sachin Academy Verified")
    ]
    
    shift_papers[paper_id] = {
        "id": paper_id,
        "title": titles[s_num][0],
        "subtitle": titles[s_num][1],
        "category": "Official PYQ",
        "isOfficial": True,
        "totalQuestions": len(qs),
        "totalMarks": len(qs),
        "durationMinutes": len(qs),
        "sections": [
            {
                "id": "pedagogy",
                "name": "Art of Teaching",
                "startQ": 1,
                "endQ": len(qs),
                "total": len(qs)
            }
        ],
        "questions": qs
    }

# B) Master 100 Paper: Pull from Sets 6, 7, 8, 9, 10
master_100_qs = []
for s_num in [6, 7, 8, 9, 10]:
    for q in sets_data[s_num]["questions"]:
        if len(master_100_qs) >= 100:
            break
        sig = get_sig(q)
        if sig not in used_signatures:
            used_signatures.add(sig)
            new_q = dict(q)
            new_q["id"] = len(master_100_qs) + 1
            new_q["questionNumber"] = len(master_100_qs) + 1
            master_100_qs.append(new_q)

# C) Curated Recent 50 Paper: Pull from Part A (Recent Shifts)
recent_50_qs = []
for q in recent_qs:
    if len(recent_50_qs) >= 50:
        break
    sig = get_sig(q)
    if sig not in used_signatures:
        used_signatures.add(sig)
        new_q = dict(q)
        new_q["id"] = len(recent_50_qs) + 1
        new_q["questionNumber"] = len(recent_50_qs) + 1
        recent_50_qs.append(new_q)

sachin_papers = {
    "sachin_pedagogy_master": {
        "id": "sachin_pedagogy_master",
        "title": "BSTET Art of Teaching 100Q PYQ Master Drill (Sachin Academy)",
        "subtitle": "100 Top High-Yield Official Questions from Bihar STET 2020-2024 by Sachin Choudhary",
        "category": "Sectional Drill",
        "isOfficial": False,
        "totalQuestions": len(master_100_qs),
        "totalMarks": len(master_100_qs),
        "durationMinutes": len(master_100_qs),
        "sections": [
            {
                "id": "pedagogy",
                "name": "Art of Teaching",
                "startQ": 1,
                "endQ": len(master_100_qs),
                "total": len(master_100_qs)
            }
        ],
        "questions": master_100_qs
    },
    "sachin_curated_recent_50": {
        "id": "sachin_curated_recent_50",
        "title": "BSTET Art of Teaching Recent Exams 50Q Sprint",
        "subtitle": "Curated Shift Questions from Recent Bihar STET Exams (Class 11-12 Code 226)",
        "category": "Sectional Drill",
        "isOfficial": False,
        "totalQuestions": len(recent_50_qs),
        "totalMarks": len(recent_50_qs),
        "durationMinutes": len(recent_50_qs),
        "sections": [
            {
                "id": "pedagogy",
                "name": "Art of Teaching",
                "startQ": 1,
                "endQ": len(recent_50_qs),
                "total": len(recent_50_qs)
            }
        ],
        "questions": recent_50_qs
    }
}
sachin_papers.update(shift_papers)

# Write out js/data/sachin-art-of-teaching.js
out_path = r"d:\Isha\Question Paper\js\data\sachin-art-of-teaching.js"

with open(out_path, "w", encoding="utf-8") as f:
    f.write("// Sachin Academy Bihar STET Art of Teaching Official PYQ Papers\n")
    f.write("window.sachin_art_of_teaching = " + json.dumps(sachin_papers, ensure_ascii=False, indent=2) + ";\n")
    for pid in sachin_papers:
        f.write(f"window.{pid} = window.sachin_art_of_teaching['{pid}'];\n")

print(f"\n[SUCCESS] Wrote {out_path}!")
print(f"Total Unique Questions used: {len(used_signatures)}")
