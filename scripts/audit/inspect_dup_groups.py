import json

with open('reports/duplicate_audit_report.json', encoding='utf-8') as f:
    report = json.load(f)

for g in report.get('dupGroups', []):
    occs = g.get('occurrences', [])
    for occ in occs:
        if 'drill_general_50' in str(occ):
            print("drill_general_50 matched group:")
            print(f"Norm text: {g.get('normalized')}")
            print(f"Occurrences: {occs}")
