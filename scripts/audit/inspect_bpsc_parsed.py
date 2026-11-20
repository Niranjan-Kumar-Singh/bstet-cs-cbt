import sys
sys.path.append('scripts/audit')
from test_gs_full_parse import parsed_gs
from test_cs_full_parse import parsed_cs

print(f"Parsed GS: {len(parsed_gs)}, Parsed CS: {len(parsed_cs)}")

for q in parsed_gs:
    for k, v in q['options'].items():
        if len(v) > 200 or 'PART -' in v or 'Directions' in v:
            print(f"Anomaly in GS Q{q['qnum']} ({k}): {v[:100]}")

for q in parsed_cs:
    for k, v in q['options'].items():
        if len(v) > 200 or 'PART -' in v or 'Directions' in v:
            print(f"Anomaly in CS Q{q['qnum']} ({k}): {v[:100]}")

print("Inspection completed.")
