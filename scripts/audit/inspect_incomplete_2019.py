import json

with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

# Import our assemble_stet_2019 script functions or inspect incomplete questions
import sys
sys.path.append('scripts/audit')
from assemble_stet_2019 import extracted_qs

incomplete = [q for q in extracted_qs if not all(q["options"][k] for k in "ABCD")]
print(f"Total incomplete: {len(incomplete)}")
for q in incomplete[:15]:
    print(f"\n--- Q{q['num']} (Page {q['page']}) ---")
    print(f"Statement: {q['statement']}")
    print(f"Options: {q['options']}")
