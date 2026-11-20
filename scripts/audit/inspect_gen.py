import json

with open('reports/duplicate_audit_report.json', encoding='utf-8') as f:
    report = json.load(f)

print("Keys:", report.keys())
for p in report.get('paperBreakdown', []):
    if p.get('paperId') == 'drill_general_50':
        print("drill_general_50 in breakdown:", p)

for dup in report.get('crossPaperDuplicates', []):
    for occ in dup.get('occurrences', []):
        if occ.get('paperId') == 'drill_general_50':
            print("Found in crossPaperDuplicates:", dup.get('question_normalized'))
