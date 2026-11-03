# -*- coding: utf-8 -*-
"""
Assembles Predicted Set 14 into js/data/predicted-set14.js
"""
import json
import sys
from data_cs_100_set14 import questions as cs_qs
from data_pedagogy_30_set14 import questions as ped_qs
from data_general_20_set14 import questions as gen_qs

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

all_questions = cs_qs + ped_qs + gen_qs
print(f"Total questions assembled for Set 14: {len(all_questions)}")
assert len(all_questions) == 150, f"Expected 150 questions, found {len(all_questions)}"

paper_obj = {
    "id": "predicted_set14",
    "title": "Predicted Mock Paper - Set 14",
    "subtitle": "Bihar STET Paper II (Code 226) • High-Yield Revision Full Mock",
    "totalQuestions": 150,
    "totalMarks": 150,
    "durationMinutes": 150,
    "sections": [
        {
            "id": "cs",
            "name": "Computer Science",
            "startQ": 1,
            "endQ": 100,
            "total": 100
        },
        {
            "id": "teaching",
            "name": "Art of Teaching",
            "startQ": 101,
            "endQ": 130,
            "total": 30
        },
        {
            "id": "skills",
            "name": "Other Skills",
            "startQ": 131,
            "endQ": 150,
            "total": 20
        }
    ],
    "questions": all_questions
}

js_content = "window.predicted_set14 = " + json.dumps(paper_obj, ensure_ascii=False, indent=2) + ";\n"

with open("js/data/predicted-set14.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Successfully written js/data/predicted-set14.js with 150 questions!")

