import pymupdf
import re
import json

def extract_cbt_paper(pdf_path, paper_id, paper_title):
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

    print(f"[{paper_id}] Extracting {pdf_path}... Tick xrefs: {tick_xrefs}")
    
    questions = []
    current_section = "Computer Science"
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        raw_text = page.get_text()
        
        # Track section changes
        if "Section : Part I Computer Science" in raw_text or "Section :Part I Computer Science" in raw_text:
            current_section = "Computer Science"
        elif "Part II" in raw_text and ("Art of Teaching" in raw_text or page_num >= 35):
            current_section = "Art of Teaching"
        elif "Part III" in raw_text and ("Other Skills" in raw_text or page_num >= 45):
            current_section = "Other Skills"
            
        if "Question Type : MCQ" not in raw_text:
            continue
            
        # Get tick rects on this page
        ticks_y = []
        for xref in tick_xrefs:
            for r in page.get_image_rects(xref):
                ticks_y.append(r.y0)
                
        # Split page into questions using blocks
        blocks = page.get_text("blocks")
        # Let's inspect words or lines with positions
        lines_with_pos = []
        for b in blocks:
            # b: (x0, y0, x1, y1, text, block_no, block_type)
            if b[6] == 0: # text block
                b_lines = b[4].split("\n")
                line_height = (b[3] - b[1]) / max(1, len(b_lines))
                for l_idx, l_text in enumerate(b_lines):
                    l_str = l_text.strip()
                    if l_str:
                        y_pos = b[1] + l_idx * line_height
                        lines_with_pos.append((y_pos, b[0], l_str))
                        
        lines_with_pos.sort(key=lambda x: (x[0], x[1]))
        
        # Group into questions
        # A question starts with Q.<num>
        # Let's find question start indices
        q_indices = []
        for idx, item in enumerate(lines_with_pos):
            # Matches Q.1, Q. 1, Q.123, Q. 123
            if re.match(r"^Q\s*\.\s*\d+", item[2]):
                q_indices.append(idx)
                
        for i, q_idx in enumerate(q_indices):
            next_q_idx = q_indices[i+1] if i + 1 < len(q_indices) else len(lines_with_pos)
            q_lines = lines_with_pos[q_idx:next_q_idx]
            
            # Parse this question's contents
            q_num_match = re.match(r"^Q\s*\.\s*(\d+)", q_lines[0][2])
            q_num = int(q_num_match.group(1)) if q_num_match else len(questions) + 1
            
            # Filter question lines
            # Structure: Question text -> Ans -> A. -> B. -> C. -> D. -> Question Type : MCQ
            statement_parts = []
            opt_a_parts, opt_b_parts, opt_c_parts, opt_d_parts = [], [], [], []
            opt_y = {"A": None, "B": None, "C": None, "D": None}
            current_mode = "STATEMENT"
            
            first_line = re.sub(r"^Q\s*\.\s*\d+\s*", "", q_lines[0][2]).strip()
            if first_line:
                statement_parts.append(first_line)
                
            for line_item in q_lines[1:]:
                y_coord, x_coord, text = line_item
                
                # Ignore metadata lines
                if any(meta in text for meta in ["Question Type :", "Question ID :", "Option 1 ID :", "Option 2 ID :", "Option 3 ID :", "Option 4 ID :", "Status :", "Chosen Option :", "Section :", "Exam Name", "Paper Paper II", "Participant Name"]):
                    if text.startswith("Chosen Option :") or text.startswith("Question Type :"):
                        current_mode = "DONE"
                    continue
                if current_mode == "DONE":
                    continue
                    
                if text == "Ans":
                    continue
                    
                # Check option markers
                if re.match(r"^A\s*\.\s*", text) or (text.startswith("A.") or (current_mode == "STATEMENT" and text.startswith("A "))):
                    current_mode = "A"
                    opt_y["A"] = y_coord
                    opt_a_parts.append(re.sub(r"^A\s*\.\s*|^A\s+", "", text).strip())
                elif re.match(r"^B\s*\.\s*", text) or text.startswith("B."):
                    current_mode = "B"
                    opt_y["B"] = y_coord
                    opt_b_parts.append(re.sub(r"^B\s*\.\s*|^B\s+", "", text).strip())
                elif re.match(r"^C\s*\.\s*", text) or text.startswith("C."):
                    current_mode = "C"
                    opt_y["C"] = y_coord
                    opt_c_parts.append(re.sub(r"^C\s*\.\s*|^C\s+", "", text).strip())
                elif re.match(r"^D\s*\.\s*", text) or text.startswith("D."):
                    current_mode = "D"
                    opt_y["D"] = y_coord
                    opt_d_parts.append(re.sub(r"^D\s*\.\s*|^D\s+", "", text).strip())
                else:
                    if current_mode == "STATEMENT":
                        statement_parts.append(text)
                    elif current_mode == "A":
                        opt_a_parts.append(text)
                    elif current_mode == "B":
                        opt_b_parts.append(text)
                    elif current_mode == "C":
                        opt_c_parts.append(text)
                    elif current_mode == "D":
                        opt_d_parts.append(text)
                        
            # Determine correct option by checking which option y-coord is closest to a tick y-coord
            correct_opt = None
            min_dist = 9999
            for opt_letter, y_c in opt_y.items():
                if y_c is not None:
                    for ty in ticks_y:
                        dist = abs(ty - y_c)
                        if dist < 12 and dist < min_dist:
                            min_dist = dist
                            correct_opt = opt_letter
                            
            # If section based on question number:
            if q_num <= 100:
                sec = "Computer Science"
            elif q_num <= 130:
                sec = "Art of Teaching"
            else:
                sec = "Other Skills"
                
            q_obj = {
                "id": q_num,
                "questionNumber": q_num,
                "section": sec,
                "question": " ".join(statement_parts).strip(),
                "options": {
                    "A": " ".join(opt_a_parts).strip(),
                    "B": " ".join(opt_b_parts).strip(),
                    "C": " ".join(opt_c_parts).strip(),
                    "D": " ".join(opt_d_parts).strip()
                },
                "correctAnswer": correct_opt or "A"
            }
            questions.append(q_obj)
            
    # Sort and deduplicate by questionNumber
    questions.sort(key=lambda x: x["questionNumber"])
    uniq_q = []
    seen = set()
    for q in questions:
        if q["questionNumber"] not in seen:
            uniq_q.append(q)
            seen.add(q["questionNumber"])
            
    print(f"[{paper_id}] Parsed {len(uniq_q)} unique questions.")
    return uniq_q

res = extract_cbt_paper("Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-03-Nov-2025-Shift-1-Eng.pdf", "shift1", "03 Nov 2025 Shift 1")
print("First 3 questions:")
for q in res[:3]:
    print(f"Q{q['questionNumber']} ({q['section']}): {q['question']}")
    print(f"  Options: {q['options']}")
    print(f"  Correct: {q['correctAnswer']}")
