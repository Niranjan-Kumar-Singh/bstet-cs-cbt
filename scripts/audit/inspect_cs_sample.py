import json

with open(r'incoming\stet_2019_extracted_draft.json', 'r', encoding='utf-8') as f:
    qs = json.load(f)

for idx, q in enumerate(qs[50:90], start=51):
    print(f"[{idx}] p.{q['page']}: {q['statement'][:80]}")
    opts = q['options']
    print(f"    (A) {opts['A'][:30]} | (B) {opts['B'][:30]} | (C) {opts['C'][:30]} | (D) {opts['D'][:30]}")
