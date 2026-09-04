import json
import os
import random

# Load comprehensive questions pool covering all 15 CS units, 30 pedagogy topics, and 20 general skill topics
from question_pool import CS_QUESTION_POOL, PEDAGOGY_QUESTION_POOL, GENERAL_QUESTION_POOL

def build_predicted_paper(paper_id, paper_title, paper_desc, variant_seed=1):
    questions = []
    
    # 1. Select 100 Computer Science Questions (Q1 to Q100)
    cs_pool_size = len(CS_QUESTION_POOL)
    step = 3 + (variant_seed * 7)
    start_offset = (variant_seed * 19) % cs_pool_size
    
    for i in range(1, 101):
        idx = (start_offset + (i - 1) * step) % cs_pool_size
        item = CS_QUESTION_POOL[idx]
        
        q_obj = {
            "id": i,
            "questionNumber": i,
            "section": "Computer Science",
            "topic": item["topic"],
            "marks": 1,
            "negativeMarks": 0,
            "question": item["question"],
            "options": item["options"],
            "correctAnswer": item["correctAnswer"],
            "explanation": f"**Correct Answer: ({item['correctAnswer']}) {item['options'][item['correctAnswer']]}**\n\n**Theoretical Analysis & Rule**:\n{item['explanation']}"
        }
        questions.append(q_obj)

    # 2. Select 30 Art of Teaching Questions (Q101 to Q130)
    ped_pool_size = len(PEDAGOGY_QUESTION_POOL)
    ped_offset = (variant_seed * 11) % ped_pool_size
    for i in range(101, 131):
        idx = (ped_offset + (i - 101) * 2) % ped_pool_size
        item = PEDAGOGY_QUESTION_POOL[idx]
        
        q_obj = {
            "id": i,
            "questionNumber": i,
            "section": "Art of Teaching",
            "topic": "Art of Teaching",
            "marks": 1,
            "negativeMarks": 0,
            "question": item["question"],
            "options": item["options"],
            "correctAnswer": item["correctAnswer"],
            "explanation": f"**Correct Answer: ({item['correctAnswer']}) {item['options'][item['correctAnswer']]}**\n\n**Pedagogical Principle**:\n{item['explanation']}"
        }
        questions.append(q_obj)

    # 3. Select 20 Other Skills Questions (Q131 to Q150)
    gen_pool_size = len(GENERAL_QUESTION_POOL)
    gen_offset = (variant_seed * 5) % gen_pool_size
    for i in range(131, 151):
        idx = (gen_offset + (i - 131)) % gen_pool_size
        item = GENERAL_QUESTION_POOL[idx]
        
        q_obj = {
            "id": i,
            "questionNumber": i,
            "section": "Other Skills",
            "topic": item["topic"],
            "marks": 1,
            "negativeMarks": 0,
            "question": item["question"],
            "options": item["options"],
            "correctAnswer": item["correctAnswer"],
            "explanation": f"**Correct Answer: ({item['correctAnswer']}) {item['options'][item['correctAnswer']]}**\n\n**Solution & Conceptual Rationale**:\n{item['explanation']}"
        }
        questions.append(q_obj)

    return {
        "id": paper_id,
        "title": paper_title,
        "subtitle": paper_desc,
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
