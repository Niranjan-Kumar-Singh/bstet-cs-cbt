# -*- coding: utf-8 -*-
"""
Assembles 3 Specialist Mastery Drills into js/data/specialist-mastery-drills.js
"""
import json
import sys
from data_drill_dbms_50 import questions as dbms_qs
from data_drill_os_net_50 import questions as os_net_qs
from data_drill_pedagogy_50 import questions as ped_qs

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

assert len(dbms_qs) == 50
assert len(os_net_qs) == 50
assert len(ped_qs) == 50

drill1 = {
    "id": "drill_dbms_sql_50",
    "title": "DBMS & SQL Deep Mastery Drill",
    "subtitle": "Normalization (1NF-BCNF), Relational Algebra, SQL Queries, ACID & Concurrency",
    "totalQuestions": 50,
    "totalMarks": 50,
    "durationMinutes": 60,
    "sections": [
        {
            "id": "dbms",
            "name": "DBMS & SQL Specialist",
            "startQ": 1,
            "endQ": 50,
            "total": 50
        }
    ],
    "questions": dbms_qs
}

drill2 = {
    "id": "drill_os_networks_master_50",
    "title": "OS & Computer Networks Mastery Drill",
    "subtitle": "Scheduling, Synchronization, Deadlocks, Paging, OSI/TCP, Subnetting & Security",
    "totalQuestions": 50,
    "totalMarks": 50,
    "durationMinutes": 60,
    "sections": [
        {
            "id": "os_net",
            "name": "OS & Networks Specialist",
            "startQ": 1,
            "endQ": 50,
            "total": 50
        }
    ],
    "questions": os_net_qs
}

drill3 = {
    "id": "drill_pedagogy_nep_50",
    "title": "Art of Teaching & NEP 2020 High-Yield Drill",
    "subtitle": "Bloom's Taxonomy, Piaget, Vygotsky, Kohlberg, CCE, Inclusive Education & NEP 2020",
    "totalQuestions": 50,
    "totalMarks": 50,
    "durationMinutes": 60,
    "sections": [
        {
            "id": "pedagogy",
            "name": "Art of Teaching & NEP 2020",
            "startQ": 1,
            "endQ": 50,
            "total": 50
        }
    ],
    "questions": ped_qs
}

out_js = (
    "// Specialist Mastery Drills for Bihar STET Paper II CS (Code 226) & BPSC TRE\n"
    "window.drill_dbms_sql_50 = " + json.dumps(drill1, ensure_ascii=False, indent=2) + ";\n\n"
    "window.drill_os_networks_master_50 = " + json.dumps(drill2, ensure_ascii=False, indent=2) + ";\n\n"
    "window.drill_pedagogy_nep_50 = " + json.dumps(drill3, ensure_ascii=False, indent=2) + ";\n"
)

with open("js/data/specialist-mastery-drills.js", "w", encoding="utf-8") as f:
    f.write(out_js)

print("Successfully generated js/data/specialist-mastery-drills.js with 3 specialized papers (150 total Qs)!")

