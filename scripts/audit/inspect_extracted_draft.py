import json

with open(r'incoming\stet_2019_extracted_draft.json', 'r', encoding='utf-8') as f:
    qs = json.load(f)

print(f"Total extracted: {len(qs)}")
for idx, q in enumerate(qs[:25]):
    print(f"[{idx+1}] p.{q['page']} Q.{q.get('num', '?')}: {q['statement'][:70]}")
    print(f"    A: {q['options']['A'][:40]} | B: {q['options']['B'][:40]}")
    print(f"    C: {q['options']['C'][:40]} | D: {q['options']['D'][:40]}")
