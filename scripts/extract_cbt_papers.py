import pymupdf
import re
import json
import os

def extract_cbt_pdf(pdf_path):
    doc = pymupdf.open(pdf_path)
    
    # Identify tick xrefs (16x16 images)
    tick_xrefs = set()
    for xref in range(1, doc.xref_length()):
        try:
            if doc.xref_is_image(xref):
                pix = pymupdf.Pixmap(doc, xref)
                if pix.width == 16 and pix.height == 16:
                    tick_xrefs.add(xref)
        except Exception:
            pass

    all_parsed_questions = {}
    
    for pno in range(len(doc)):
        page = doc[pno]
        
        # Collect tick y-coordinates on this page
        ticks_y = []
        for xref in tick_xrefs:
            for r in page.get_image_rects(xref):
                ticks_y.append(r.y0)
        ticks_y = list(set(round(y, 1) for y in ticks_y))
        
        # Get left column words
        words = page.get_text("words")
        left_words = [w for w in words if w[0] < 360]
        
        # Merge split question numbers (e.g. Q.10 + 0)
        processed_words = []
        skip_next = False
        for idx, w in enumerate(left_words):
            if skip_next:
                skip_next = False
                continue
            if re.match(r"^Q\.\d+$", w[4]) and idx + 1 < len(left_words):
                next_w = left_words[idx + 1]
                if re.match(r"^\d+$", next_w[4]) and next_w[0] < 65 and abs(next_w[1] - w[1]) < 15:
                    merged = (w[0], w[1], next_w[2], w[3], w[4] + next_w[4], w[5], w[6], w[7])
                    processed_words.append(merged)
                    skip_next = True
                    continue
            processed_words.append(w)
            
        # Group words into lines by similar y-coordinate
        sorted_w = sorted(processed_words, key=lambda x: (x[1], x[0]))
        lines_with_y = []
        c_line = []
        c_y = -999
        for w in sorted_w:
            if abs(w[1] - c_y) > 5:
                if c_line:
                    lines_with_y.append((c_y, " ".join(c_line)))
                c_line = [w[4]]
                c_y = w[1]
            else:
                c_line.append(w[4])
        if c_line:
            lines_with_y.append((c_y, " ".join(c_line)))
            
        # Parse questions out of the lines
        q_starts = []
        for l_idx, (y_coord, line_str) in enumerate(lines_with_y):
            if re.search(r"Q\s*\.\s*\d+", line_str):
                q_starts.append(l_idx)
                
        for s_i, start_idx in enumerate(q_starts):
            end_idx = q_starts[s_i + 1] if s_i + 1 < len(q_starts) else len(lines_with_y)
            q_chunk = lines_with_y[start_idx:end_idx]
            
            # Extract question number
            m_num = re.search(r"Q\s*\.\s*(\d+)", q_chunk[0][1])
            if not m_num:
                continue
            q_num = int(m_num.group(1))
            
            # Process lines
            statement_lines = []
            opt_lines = {"A": [], "B": [], "C": [], "D": []}
            opt_y = {"A": None, "B": None, "C": None, "D": None}
            current_target = "STATEMENT"
            
            first_line_clean = re.sub(r"Q\s*\.\s*\d+\s*", "", q_chunk[0][1]).strip()
            if first_line_clean:
                statement_lines.append(first_line_clean)
                
            for y_coord, line_text in q_chunk[1:]:
                # Check for option prefixes
                if re.match(r"^Ans\s+A\.\s*|^A\.\s*", line_text):
                    current_target = "A"
                    opt_y["A"] = y_coord
                    opt_lines["A"].append(re.sub(r"^Ans\s+A\.\s*|^A\.\s*", "", line_text).strip())
                elif re.match(r"^B\.\s*", line_text):
                    current_target = "B"
                    opt_y["B"] = y_coord
                    opt_lines["B"].append(re.sub(r"^B\.\s*", "", line_text).strip())
                elif re.match(r"^C\.\s*", line_text):
                    current_target = "C"
                    opt_y["C"] = y_coord
                    opt_lines["C"].append(re.sub(r"^C\.\s*", "", line_text).strip())
                elif re.match(r"^D\.\s*", line_text):
                    current_target = "D"
                    opt_y["D"] = y_coord
                    opt_lines["D"].append(re.sub(r"^D\.\s*", "", line_text).strip())
                elif line_text.startswith("Section :"):
                    continue
                else:
                    if current_target == "STATEMENT":
                        statement_lines.append(line_text)
                    elif current_target in opt_lines:
                        opt_lines[current_target].append(line_text)
                        
            # Match tick coordinate to find correct answer
            correct_ans = "A"
            min_dist = 999
            for opt_key, y_c in opt_y.items():
                if y_c is not None:
                    for ty in ticks_y:
                        d = abs(ty - y_c)
                        if d < 12 and d < min_dist:
                            min_dist = d
                            correct_ans = opt_key
                            
            # Classify section
            if q_num <= 100:
                sec_name = "Computer Science"
            elif q_num <= 130:
                sec_name = "Art of Teaching"
            else:
                sec_name = "Other Skills"
                
            question_text = " ".join(statement_lines).strip()
            opts = {
                "A": " ".join(opt_lines["A"]).strip() or "Option A",
                "B": " ".join(opt_lines["B"]).strip() or "Option B",
                "C": " ".join(opt_lines["C"]).strip() or "Option C",
                "D": " ".join(opt_lines["D"]).strip() or "Option D"
            }
            
            all_parsed_questions[q_num] = {
                "id": q_num,
                "questionNumber": q_num,
                "section": sec_name,
                "question": question_text,
                "options": opts,
                "correctAnswer": correct_ans
            }
            
    # Return sorted list 1 to 150
    final_list = []
    for i in range(1, 151):
        if i in all_parsed_questions:
            final_list.append(all_parsed_questions[i])
        else:
            print(f"Warning: Q{i} missing from {pdf_path}")
            
    return final_list

def extract_2023_paper(pdf_path):
    doc = pymupdf.open(pdf_path)
    full_text = ""
    for p in doc:
        full_text += p.get_text() + "\n"
        
    pattern = r"Question\s+(\d+)\s+Question Id\s*:\s*(\d+)"
    splits = list(re.finditer(pattern, full_text))
    
    questions = []
    for i, m in enumerate(splits):
        q_num = int(m.group(1))
        start_pos = m.end()
        end_pos = splits[i+1].start() if i + 1 < len(splits) else len(full_text)
        block = full_text[start_pos:end_pos]
        
        # Split on "Right Answer :"
        ra_m = re.search(r"Right Answer\s*:\s*\n(.*?)(?=\nRight Option Id|$)", block, re.DOTALL)
        right_ans_text = ra_m.group(1).strip() if ra_m else ""
        
        # Split options
        # Options: (A) ... (B) ... (C) ... (D) ...
        # Question text is before "Answer : Option Id"
        q_text_match = re.search(r"^(.*?)(?=Answer\s*:\s*Option Id|\(A\))", block, re.DOTALL)
        q_text = q_text_match.group(1).strip() if q_text_match else ""
        
        opt_a_m = re.search(r"\(A\)\s*(.*?)(?=\s*\d+\s*\n|\(B\))", block, re.DOTALL)
        opt_b_m = re.search(r"\(B\)\s*(.*?)(?=\s*\d+\s*\n|\(C\))", block, re.DOTALL)
        opt_c_m = re.search(r"\(C\)\s*(.*?)(?=\s*\d+\s*\n|\(D\))", block, re.DOTALL)
        opt_d_m = re.search(r"\(D\)\s*(.*?)(?=\s*\d+\s*\n|Right Answer|$)", block, re.DOTALL)
        
        def clean_opt(txt):
            if not txt: return ""
            # remove trailing option ID number
            cleaned = re.sub(r"\s+\d{4,6}$", "", txt.strip())
            return cleaned.replace("\n", " ").strip()
            
        opts = {
            "A": clean_opt(opt_a_m.group(1)) if opt_a_m else "Option A",
            "B": clean_opt(opt_b_m.group(1)) if opt_b_m else "Option B",
            "C": clean_opt(opt_c_m.group(1)) if opt_c_m else "Option C",
            "D": clean_opt(opt_d_m.group(1)) if opt_d_m else "Option D"
        }
        
        # Determine correct answer letter by comparing with right_ans_text
        correct_letter = "A"
        right_clean = right_ans_text.replace("\n", " ").strip().lower()
        for letter in ["A", "B", "C", "D"]:
            if opts[letter].lower() in right_clean or right_clean in opts[letter].lower():
                correct_letter = letter
                break
                
        if q_num <= 100:
            sec_name = "Computer Science"
        elif q_num <= 130:
            sec_name = "Art of Teaching"
        else:
            sec_name = "Other Skills"
            
        questions.append({
            "id": q_num,
            "questionNumber": q_num,
            "section": sec_name,
            "question": q_text.replace("\n", " ").strip(),
            "options": opts,
            "correctAnswer": correct_letter
        })
        
    return questions

print("Extraction script defined successfully.")
