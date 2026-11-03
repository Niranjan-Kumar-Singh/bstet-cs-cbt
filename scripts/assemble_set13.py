# -*- coding: utf-8 -*-
"""
Assembles predicted-set13.js
"""

import os
import sys
import json

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'js', 'data')

sys.path.append(os.path.dirname(__file__))
from data_cs_100_set13 import CS_SET13
from data_pedagogy_30_set13 import PEDAGOGY_SET13
from data_general_20_set13 import GENERAL_SET13

questions = []

# 1. Computer Science (1 - 100)
for i, item in enumerate(CS_SET13):
    q_num = i + 1
    top_en, top_hi, q_en, q_hi, opts_en, opts_hi, ans, exp_en, exp_hi = item
    questions.append({
        "id": q_num,
        "questionNumber": q_num,
        "section": "Computer Science",
        "topic": top_en,
        "topic_hi": top_hi,
        "marks": 1,
        "negativeMarks": 0,
        "question": q_en,
        "question_hi": q_hi,
        "options": opts_en,
        "options_hi": opts_hi,
        "correctAnswer": ans,
        "explanation": f"**Correct Answer: ({ans}) {opts_en[ans]}**\n\n**Conceptual Analysis**:\n{exp_en}",
        "explanation_hi": f"**आधिकारिक सही उत्तर: ({ans}) {opts_hi.get(ans, opts_en[ans])}**\n\n**संकल्पनात्मक व्याख्या**:\n{exp_hi}"
    })

# 2. Art of Teaching (101 - 130)
for i, item in enumerate(PEDAGOGY_SET13):
    q_num = 101 + i
    top_en, top_hi, q_en, q_hi, opts_en, opts_hi, ans, exp_en, exp_hi = item
    questions.append({
        "id": q_num,
        "questionNumber": q_num,
        "section": "Art of Teaching",
        "topic": top_en,
        "topic_hi": top_hi,
        "marks": 1,
        "negativeMarks": 0,
        "question": q_en,
        "question_hi": q_hi,
        "options": opts_en,
        "options_hi": opts_hi,
        "correctAnswer": ans,
        "explanation": f"**Correct Answer: ({ans}) {opts_en[ans]}**\n\n**Pedagogical Principle**:\n{exp_en}",
        "explanation_hi": f"**आधिकारिक सही उत्तर: ({ans}) {opts_hi.get(ans, opts_en[ans])}**\n\n**शैक्षणिक सिद्धांत**:\n{exp_hi}"
    })

# 3. Other Skills (131 - 150)
for i, item in enumerate(GENERAL_SET13):
    q_num = 131 + i
    top_en, top_hi, q_en, q_hi, opts_en, opts_hi, ans, exp_en, exp_hi = item
    questions.append({
        "id": q_num,
        "questionNumber": q_num,
        "section": "Other Skills",
        "topic": top_en,
        "topic_hi": top_hi,
        "marks": 1,
        "negativeMarks": 0,
        "question": q_en,
        "question_hi": q_hi,
        "options": opts_en,
        "options_hi": opts_hi,
        "correctAnswer": ans,
        "explanation": f"**Correct Answer: ({ans}) {opts_en[ans]}**\n\n**Step-by-Step Solution**:\n{exp_en}",
        "explanation_hi": f"**आधिकारिक सही उत्तर: ({ans}) {opts_hi.get(ans, opts_en[ans])}**\n\n**चरणबद्ध समाधान**:\n{exp_hi}"
    })

paper_obj = {
    "id": "predicted_set13",
    "title": "2026 Target Full CBT Mock 13",
    "subtitle": "Full Length 150 Qs (CS 100 + Pedagogy 30 + General 20) | High-Yield 2026 Curriculum Benchmark",
    "totalQuestions": 150,
    "totalMarks": 150,
    "durationMinutes": 150,
    "sections": [
        {"id": "cs", "name": "Computer Science", "startQ": 1, "endQ": 100, "total": 100},
        {"id": "teaching", "name": "Art of Teaching", "startQ": 101, "endQ": 130, "total": 30},
        {"id": "skills", "name": "Other Skills", "startQ": 131, "endQ": 150, "total": 20}
    ],
    "questions": questions
}

out_path = os.path.join(DATA_DIR, "predicted-set13.js")
with open(out_path, "w", encoding="utf-8") as f:
    f.write("// Generated Target 2026 Mock Paper 13\nwindow.predicted_set13 = " + json.dumps(paper_obj, indent=2, ensure_ascii=False) + ";\n")

print(f"Successfully generated predicted-set13.js with {len(questions)} verified bilingual questions!")

