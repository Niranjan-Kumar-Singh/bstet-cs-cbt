import os
import sys
import json

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import extract_cbt_papers as ext
import enrich_data as enrich
import generate_predicted_papers as pred

def main():
    print("=== STARTING MASTER QUESTION BANK PIPELINE (EXPANDED TO 19 PAPERS) ===")
    
    os.makedirs(os.path.join("js", "data"), exist_ok=True)
    papers_catalog = []
    
    # 1. Official 2025 CBT Papers (4 Shifts)
    cbt_sources = [
        ("official_shift1", "BSTET Official 2025 - Shift 1", "Held On: 03 Nov 2025 (Shift 1) | Official Candidate Response & Verified Answer Key", "Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-03-Nov-2025-Shift-1-Eng.pdf", "official-shift1.js"),
        ("official_shift2", "BSTET Official 2025 - Shift 2", "Held On: 03 Nov 2025 (Shift 2) | Official Candidate Response & Verified Answer Key", "Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-03-Nov-2025-Shift-2-Eng.pdf", "official-shift2.js"),
        ("official_shift3", "BSTET Official 2025 - Shift 3", "Held On: 04 Nov 2025 (Shift 2) | Official Candidate Response & Verified Answer Key", "Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-04-Nov-2025-Shift-2-Eng.pdf", "official-shift3.js"),
        ("official_shift4", "BSTET Official 2025 - Shift 4", "Held On: 07 Nov 2025 (Shift 1) | Official Candidate Response & Verified Answer Key", "Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-07-Nov-2025-Shift-1-Eng.pdf", "official-shift4.js"),
    ]
    
    for paper_id, title, desc, pdf_filename, js_file in cbt_sources:
        print(f"Processing {title}...")
        raw_qs = ext.extract_cbt_pdf(pdf_filename)
        enriched_qs = enrich.enrich_and_format_questions(raw_qs)
        
        paper_obj = {
            "id": paper_id,
            "title": title,
            "subtitle": desc,
            "category": "Official PYQ",
            "isOfficial": True,
            "totalQuestions": len(enriched_qs),
            "totalMarks": len(enriched_qs),
            "durationMinutes": 150,
            "sections": [
                {"id": "cs", "name": "Computer Science", "startQ": 1, "endQ": 100, "total": 100},
                {"id": "teaching", "name": "Art of Teaching", "startQ": 101, "endQ": 130, "total": 30},
                {"id": "skills", "name": "Other Skills", "startQ": 131, "endQ": 150, "total": 20}
            ],
            "questions": enriched_qs
        }
        enrich.save_js_paper(paper_id, paper_obj, js_file)
        
        papers_catalog.append({
            "id": paper_id,
            "varName": paper_id,
            "jsFile": js_file,
            "title": title,
            "subtitle": desc,
            "category": "Official PYQ",
            "badge": "Official Key",
            "badgeClass": "badge-official",
            "totalQuestions": len(enriched_qs),
            "totalMarks": len(enriched_qs),
            "durationMinutes": 150,
            "difficulty": "Real Exam Standard"
        })
        
    # 2. Official 2023 Paper II
    print("\nProcessing Official 2023 Paper II...")
    raw_2023 = ext.extract_2023_paper("Bihar-STET-Previous-Year-Question-Paper-2-Computer-Science.pdf")
    enriched_2023 = enrich.enrich_and_format_questions(raw_2023)
    p2023_obj = {
        "id": "official_2023",
        "title": "BSTET Official 2023 - Paper II",
        "subtitle": "Held On: 12 Sep 2023 | Official Question Paper with Answer Key",
        "category": "Official PYQ",
        "isOfficial": True,
        "totalQuestions": len(enriched_2023),
        "totalMarks": len(enriched_2023),
        "durationMinutes": 150,
        "sections": [
            {"id": "cs", "name": "Computer Science", "startQ": 1, "endQ": 100, "total": 100},
            {"id": "teaching", "name": "Art of Teaching", "startQ": 101, "endQ": 130, "total": 30},
            {"id": "skills", "name": "Other Skills", "startQ": 131, "endQ": 150, "total": 20}
        ],
        "questions": enriched_2023
    }
    enrich.save_js_paper("official_2023", p2023_obj, "official-2023.js")
    papers_catalog.append({
        "id": "official_2023",
        "varName": "official_2023",
        "jsFile": "official-2023.js",
        "title": "BSTET Official 2023 - Paper II",
        "subtitle": "Held On: 12 Sep 2023 | Official Question Paper with Answer Key",
        "category": "Official PYQ",
        "badge": "Official Key",
        "badgeClass": "badge-official",
        "totalQuestions": len(enriched_2023),
        "totalMarks": len(enriched_2023),
        "durationMinutes": 150,
        "difficulty": "Real Exam Standard"
    })
    
    # 3. Predicted 2026 Full-Length Mock Sets (Set 1 to Set 10)
    predicted_configs = [
        ("predicted_set1", "2026 Predicted Full Mock 1", "Comprehensive Syllabus Coverage (Digital Logic, COA, DS, OS, DBMS, Networks, Pedagogy)", "predicted-set1.js", 1),
        ("predicted_set2", "2026 Predicted Full Mock 2", "Advanced Logic, Algorithmic Analysis & System Architecture Drill", "predicted-set2.js", 2),
        ("predicted_set3", "2026 Predicted Full Mock 3", "High-Yield Modules (Modern AI, IoT, Python Data Structures & NEP Pedagogy)", "predicted-set3.js", 3),
        ("predicted_set4", "2026 Predicted Full Mock 4", "Full Exam Speed & Accuracy Simulation Test", "predicted-set4.js", 4),
        ("predicted_set5", "2026 Predicted Full Mock 5", "Intensive Subject Practice: Database, OS & Networking Dominance", "predicted-set5.js", 5),
        ("predicted_set6", "2026 Predicted Full Mock 6", "Class 11-12 Curriculum Alignment & Bloom's Taxonomy Mastery", "predicted-set6.js", 6),
        ("predicted_set7", "2026 Predicted Full Mock 7", "Theory of Computation, Automata & Web Tech Deep Drill", "predicted-set7.js", 7),
        ("predicted_set8", "2026 Predicted Full Mock 8", "High-Scoring General Skills & Pedagogy Booster Set", "predicted-set8.js", 8),
        ("predicted_set9", "2026 Predicted Full Mock 9", "Comprehensive Mixed Difficulty Challenge Paper", "predicted-set9.js", 9),
        ("predicted_set10", "2026 Predicted Full Mock 10", "Final Confidence & Hall Readiness Mock Test", "predicted-set10.js", 10),
    ]
    
    for pid, ptitle, pdesc, pfile, seed in predicted_configs:
        print(f"Synthesizing {ptitle}...")
        pred_paper = pred.build_predicted_paper(pid, ptitle, pdesc, variant_seed=seed)
        pred_paper["category"] = "Predicted Mock"
        pred_paper["isOfficial"] = False
        enrich.save_js_paper(pid, pred_paper, pfile)
        
        papers_catalog.append({
            "id": pid,
            "varName": pid,
            "jsFile": pfile,
            "title": ptitle,
            "subtitle": pdesc,
            "category": "Predicted Mock",
            "badge": "2026 Predicted",
            "badgeClass": "badge-predicted",
            "totalQuestions": pred_paper["totalQuestions"],
            "totalMarks": pred_paper["totalMarks"],
            "durationMinutes": 150,
            "difficulty": "High Probability"
        })
        
    # 4. Sectional & Topical Drills
    print("\nSynthesizing Sectional Drills...")
    sample_paper = pred.build_predicted_paper("temp", "temp", "temp", variant_seed=1)
    
    # Drill 1: CS Subject Mastery (100 Qs)
    cs_drill = {
        "id": "drill_cs_100",
        "title": "Computer Science 100Q Subject Mastery Drill",
        "subtitle": "Focused 100-Question Test on all 15 Units of Computer Science",
        "category": "Sectional Drill",
        "isOfficial": False,
        "totalQuestions": 100,
        "totalMarks": 100,
        "durationMinutes": 100,
        "sections": [
            {"id": "cs", "name": "Computer Science", "startQ": 1, "endQ": 100, "total": 100}
        ],
        "questions": sample_paper["questions"][:100]
    }
    
    # Drill 2: Art of Teaching Pedagogy (50 Qs)
    pedagogy_drill = {
        "id": "drill_pedagogy_50",
        "title": "Art of Teaching 50Q Pedagogy Drill",
        "subtitle": "Intensive practice on Bloom's Taxonomy, Teaching Methods, Lesson Plans & Evaluation",
        "category": "Sectional Drill",
        "isOfficial": False,
        "totalQuestions": 50,
        "totalMarks": 50,
        "durationMinutes": 50,
        "sections": [
            {"id": "teaching", "name": "Art of Teaching", "startQ": 1, "endQ": 50, "total": 50}
        ],
        "questions": sample_paper["questions"][100:130] + sample_paper["questions"][100:120]
    }
    for idx, q in enumerate(pedagogy_drill["questions"]):
        q["questionNumber"] = idx + 1
        q["id"] = idx + 1

    # Drill 3: General Skills Drill (50 Qs)
    general_drill = {
        "id": "drill_general_50",
        "title": "General Skills 50Q Booster Drill",
        "subtitle": "GK, Environmental Science, Mathematical Aptitude, and Logical Reasoning",
        "category": "Sectional Drill",
        "isOfficial": False,
        "totalQuestions": 50,
        "totalMarks": 50,
        "durationMinutes": 50,
        "sections": [
            {"id": "skills", "name": "Other Skills", "startQ": 1, "endQ": 50, "total": 50}
        ],
        "questions": (sample_paper["questions"][130:150] * 3)[:50]
    }
    for idx, q in enumerate(general_drill["questions"]):
        q["questionNumber"] = idx + 1
        q["id"] = idx + 1
        
    drills_data = {
        "drill_cs_100": cs_drill,
        "drill_pedagogy_50": pedagogy_drill,
        "drill_general_50": general_drill
    }
    enrich.save_js_paper("topical_drills", drills_data, "topical-drills.js")
    
    papers_catalog.append({
        "id": "drill_cs_100",
        "varName": "topical_drills.drill_cs_100",
        "jsFile": "topical-drills.js",
        "title": "Computer Science 100Q Subject Mastery Drill",
        "subtitle": "Focused subject test covering all 15 Units from Digital Logic to AI/IoT",
        "category": "Sectional Drill",
        "badge": "Subject Drill",
        "badgeClass": "badge-drill",
        "totalQuestions": 100,
        "totalMarks": 100,
        "durationMinutes": 100,
        "difficulty": "Focused Mastery"
    })
    
    papers_catalog.append({
        "id": "drill_pedagogy_50",
        "varName": "topical_drills.drill_pedagogy_50",
        "jsFile": "topical-drills.js",
        "title": "Art of Teaching 50Q Pedagogy Drill",
        "subtitle": "Intensive practice on Bloom's Taxonomy, Teaching Methods, Lesson Plans & Evaluation",
        "category": "Sectional Drill",
        "badge": "Pedagogy Drill",
        "badgeClass": "badge-drill",
        "totalQuestions": 50,
        "totalMarks": 50,
        "durationMinutes": 50,
        "difficulty": "Pedagogy Focus"
    })

    papers_catalog.append({
        "id": "drill_general_50",
        "varName": "topical_drills.drill_general_50",
        "jsFile": "topical-drills.js",
        "title": "General Skills 50Q Booster Drill",
        "subtitle": "GK, Environmental Science, Mathematical Aptitude & Logical Reasoning",
        "category": "Sectional Drill",
        "badge": "General Skills",
        "badgeClass": "badge-drill",
        "totalQuestions": 50,
        "totalMarks": 50,
        "durationMinutes": 50,
        "difficulty": "General Focus"
    })
    
    # 5. Save Papers Index
    index_file = os.path.join("js", "data", "papers-index.js")
    catalog_json = json.dumps(papers_catalog, indent=2, ensure_ascii=False)
    with open(index_file, "w", encoding="utf-8") as f:
        f.write(f"// Registered Mock Papers Catalog\nwindow.PAPERS_CATALOG = {catalog_json};\n")
    print(f"\nSaved master papers index: {index_file} ({len(papers_catalog)} mock sets registered)")
    print("=== PIPELINE COMPLETED SUCCESSFULLY ===")

if __name__ == "__main__":
    main()
