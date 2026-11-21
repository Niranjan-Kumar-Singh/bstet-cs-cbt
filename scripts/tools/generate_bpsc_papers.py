import json, os, re

def build_tre1():
    with open('incoming/tre1_extracted_qs.json', encoding='utf-8') as f:
        qs_raw = json.load(f)

    # Official answer key for TRE 1.0 Series A
    # Verified against official final answer keys and academic subject keys
    tre1_keys = {
        1: 'A', 2: 'A', 3: 'A', 4: 'A', 5: 'B', 6: 'B', 7: 'C', 8: 'C', 9: 'C', 10: 'B',
        11: 'A', 12: 'A', 13: 'A', 14: 'A', 15: 'D', 16: 'B', 17: 'B', 18: 'A', 19: 'C', 20: 'E',
        21: 'A', 22: 'A', 23: 'A', 24: 'A', 25: 'C', 26: 'B', 27: 'B', 28: 'A', 29: 'A', 30: 'A',
        31: 'D', 32: 'B', 33: 'A', 34: 'B', 35: 'A', 36: 'C', 37: 'B', 38: 'B', 39: 'A', 40: 'C',
        # Computer Science Q41-120
        41: 'C', 42: 'A', 43: 'E', 44: 'D', 45: 'B', 46: 'B', 47: 'A', 48: 'E', 49: 'A', 50: 'C',
        51: 'C', 52: 'C', 53: 'D', 54: 'B', 55: 'B', 56: 'A', 57: 'A', 58: 'C', 59: 'C', 60: 'C',
        61: 'A', 62: 'A', 63: 'C', 64: 'B', 65: 'B', 66: 'B', 67: 'D', 68: 'A', 69: 'A', 70: 'A',
        71: 'A', 72: 'A', 73: 'B', 74: 'B', 75: 'B', 76: 'B', 77: 'B', 78: 'A', 79: 'E', 80: 'B',
        81: 'C', 82: 'C', 83: 'A', 84: 'A', 85: 'A', 86: 'C', 87: 'C', 88: 'A', 89: 'E', 90: 'B',
        91: 'C', 92: 'B', 93: 'D', 94: 'C', 95: 'A', 96: 'B', 97: 'A', 98: 'A', 99: 'E', 100: 'B',
        101: 'B', 102: 'A', 103: 'B', 104: 'A', 105: 'E', 106: 'C', 107: 'A', 108: 'A', 109: 'C', 110: 'A',
        111: 'B', 112: 'B', 113: 'D', 114: 'B', 115: 'A', 116: 'A', 117: 'A', 118: 'A', 119: 'A', 120: 'B'
    }

    questions = []
    for item in qs_raw:
        q = item['qnum']
        ans = tre1_keys.get(q, 'A')
        is_cs = q >= 41
        section_name = "Part II: Computer Science" if is_cs else "Part I: General Studies"
        topic = "Computer Science Core" if is_cs else "General Studies & Aptitude"
        topic_hi = "कंप्यूटर साइंस मुख्य विषय" if is_cs else "सामान्य अध्ययन और योग्यता"

        clean_opts = {}
        for k in ['A', 'B', 'C', 'D', 'E']:
            clean_opts[k] = item['options'].get(k, '').replace('□', '').strip()

        q_obj = {
            "qnum": q,
            "section": section_name,
            "topic": topic,
            "topic_hi": topic_hi,
            "question": item['question'].replace('□', '').strip(),
            "options": clean_opts,
            "correctAnswer": ans,
            "id": q,
            "questionNumber": q,
            "marks": 1,
            "negativeMarks": 0,
            "explanation": f"**Official Answer: ({ans})**\n\nOfficial Answer Key released by BPSC (Advt. No. 26/2023, Exam Date: 26-08-2023, Paper 4, Booklet Series A).",
            "explanation_hi": f"**आधिकारिक सही उत्तर: ({ans})**\n\nबिहार लोक सेवा आयोग (BPSC TRE 1.0 Advt 26/2023) द्वारा जारी आधिकारिक उत्तर कुंजी (सीरीज A) के अनुसार।"
        }
        questions.append(q_obj)

    tre1_data = {
        "id": "bpsc_tre1_2023",
        "title": "BPSC TRE 1.0 PGT Computer Science (Class 11-12)",
        "subtitle": "Held On: 26 August 2023 (Paper 4 · Booklet Series A) | Official BPSC Question Paper & Final Answer Key",
        "category": "BPSC TRE PYQ",
        "isOfficial": True,
        "totalQuestions": 120,
        "totalMarks": 120,
        "durationMinutes": 120,
        "sections": [
            {
                "id": "part1",
                "name": "Part I: General Studies",
                "startQ": 1,
                "endQ": 40,
                "total": 40
            },
            {
                "id": "part2",
                "name": "Part II: Computer Science",
                "startQ": 41,
                "endQ": 120,
                "total": 80
            }
        ],
        "questions": questions
    }

    out_content = "// BPSC TRE 1.0 PGT Computer Science (Class 11-12) Official Question Paper\n"
    out_content += "window.bpsc_tre1_2023 = " + json.dumps(tre1_data, indent=2, ensure_ascii=False) + ";\n"

    with open('js/data/bpsc-tre1-2023.js', 'w', encoding='utf-8') as f:
        f.write(out_content)
    print("Created js/data/bpsc-tre1-2023.js successfully!")

def build_tre2():
    with open('incoming/tre2_extracted_qs.json', encoding='utf-8') as f:
        qs_raw = json.load(f)

    # 100% verified official final Series A answer key
    tre2_keys = [
        'B', 'B', 'D', 'D', 'A', 'E', 'D', 'D', 'A', 'B',
        'C', 'B', 'A', 'A', 'A', 'B', 'C', 'A', 'B', 'C',
        'D', 'A', 'E', 'A', 'A', 'E', 'C', 'C', 'B', 'C',
        'C', 'B', 'C', 'B', 'B', 'D', 'A', 'A', 'A', 'C',
        'B', 'B', 'C', 'C', 'D', 'A', 'B', 'A', 'C', 'A',
        'C', 'C', 'C', 'A', 'A', 'B', 'B', 'B', 'B', 'A',
        'B', 'C', 'C', 'C', 'B', 'C', 'C', 'D', 'B', 'E',
        'A', 'B', 'A', 'A', 'A', 'D', 'C', 'A', 'B', 'B',
        'C', 'C', 'B', 'C', 'B', 'C', 'C', 'C', 'B', 'A',
        'A', 'A', 'B', 'D', 'B', 'A', 'A', 'B', 'D', 'B',
        'B', 'B', 'A', 'A', 'E', 'B', 'C', 'C', 'C', 'B',
        'A', 'A', 'A', 'B', 'C', 'C', 'A', 'D', 'B', 'A',
        'A', 'B', 'B', 'B', 'A', 'C', 'A', 'B', 'B', 'B',
        'A', 'C', 'B', 'C', 'B', 'A', 'C', 'C', 'C', 'B',
        'A', 'B', 'C', 'A', 'A', 'B', 'C', 'A', 'C', 'B'
    ]

    questions = []
    for idx, item in enumerate(qs_raw):
        q = item['qnum']
        ans = tre2_keys[idx]
        is_deleted = (q == 104)

        if q <= 30:
            sec_id = "part1"
            sec_name = "Part I: Language (English & Hindi)"
            topic = "General English" if q <= 8 else "General Hindi"
            topic_hi = "सामान्य अंग्रेजी" if q <= 8 else "सामान्य हिन्दी"
        elif q <= 70:
            sec_id = "part2"
            sec_name = "Part II: General Studies"
            topic = "General Studies & Mathematics"
            topic_hi = "सामान्य अध्ययन एवं गणित"
        else:
            sec_id = "part3"
            sec_name = "Part III: Computer Science"
            topic = "Computer Science Core"
            topic_hi = "कंप्यूटर साइंस मुख्य विषय"

        clean_opts = {}
        for k in ['A', 'B', 'C', 'D', 'E']:
            clean_opts[k] = item['options'].get(k, '').replace('□', '').strip()

        expl = f"**Official Answer: ({ans})**\n\nOfficial Answer Key released by BPSC (Advt. No. 27/2023, Exam Date: 15-12-2023, Booklet Series A)."
        expl_hi = f"**आधिकारिक सही उत्तर: ({ans})**\n\nबिहार लोक सेवा आयोग (BPSC TRE 2.0 Advt 27/2023) द्वारा जारी आधिकारिक उत्तर कुंजी (सीरीज A) के अनुसार।"
        if is_deleted:
            expl += "\n\n*Note: This question was cancelled / deleted by BPSC in final key evaluation.*"
            expl_hi += "\n\n*विशेष नोट: BPSC द्वारा अंतिम मूल्यांकन में यह प्रश्न निरस्त (Delete) कर दिया गया था।*"

        q_obj = {
            "qnum": q,
            "section": sec_name,
            "topic": topic,
            "topic_hi": topic_hi,
            "question": item['question'].replace('□', '').strip(),
            "options": clean_opts,
            "correctAnswer": ans,
            "id": q,
            "questionNumber": q,
            "marks": 1,
            "negativeMarks": 0,
            "isDeleted": is_deleted,
            "explanation": expl,
            "explanation_hi": expl_hi
        }
        questions.append(q_obj)

    tre2_data = {
        "id": "bpsc_tre2_2023",
        "title": "BPSC TRE 2.0 PGT Computer Science (Class 11-12)",
        "subtitle": "Held On: 15 December 2023 (Booklet Series A) | Official BPSC Question Paper & Final Answer Key",
        "category": "BPSC TRE PYQ",
        "isOfficial": True,
        "totalQuestions": 150,
        "totalMarks": 150,
        "durationMinutes": 150,
        "sections": [
            {
                "id": "part1",
                "name": "Part I: Language (English & Hindi)",
                "startQ": 1,
                "endQ": 30,
                "total": 30
            },
            {
                "id": "part2",
                "name": "Part II: General Studies",
                "startQ": 31,
                "endQ": 70,
                "total": 40
            },
            {
                "id": "part3",
                "name": "Part III: Computer Science",
                "startQ": 71,
                "endQ": 150,
                "total": 80
            }
        ],
        "questions": questions
    }

    out_content = "// BPSC TRE 2.0 PGT Computer Science (Class 11-12) Official Question Paper\n"
    out_content += "window.bpsc_tre2_2023 = " + json.dumps(tre2_data, indent=2, ensure_ascii=False) + ";\n"

    with open('js/data/bpsc-tre2-2023.js', 'w', encoding='utf-8') as f:
        f.write(out_content)
    print("Created js/data/bpsc-tre2-2023.js successfully!")

if __name__ == '__main__':
    build_tre1()
    build_tre2()
