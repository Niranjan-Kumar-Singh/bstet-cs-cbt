import os
import re
import json
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

data_dir = r"d:\Isha\Question Paper\js\data"
files = [f for f in sorted(os.listdir(data_dir)) if f.endswith('.js') and f != 'papers-index.js']
print(f"Auditing {len(files)} paper files in {data_dir}...\n")

total_q_count = 0
errors = []

for fname in files:
    fpath = os.path.join(data_dir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Search for all "questionNumber": ... within questions
    q_ids = re.findall(r'"questionNumber":\s*(\d+)', content)
    answers = re.findall(r'"correctAnswer":\s*"([A-D])"', content)
    q_hi = re.findall(r'"question_hi"\s*:', content)
    opt_hi = re.findall(r'"options_hi"\s*:', content)
    title_m = re.search(r'"title":\s*"([^"]+)"', content)
    title = title_m.group(1) if title_m else "Unknown Title"

    count = len(q_ids)
    total_q_count += count

    print(f"✓ {fname:<24}: {count:>3} Qs, {len(answers):>3} Answers, {len(q_hi):>3} Hindi Qs, {len(opt_hi):>3} Hindi Opts | {title[:40]}")

    if count != len(answers):
        errors.append(f"{fname}: Questions ({count}) != Answers ({len(answers)})")
    if count != len(q_hi):
        errors.append(f"{fname}: Questions ({count}) != Hindi translations ({len(q_hi)})")

print(f"\nTotal verified questions in catalog: {total_q_count}")
if errors:
    print(f"\n❌ {len(errors)} ERRORS DETECTED:")
    for e in errors:
        print("  -", e)
else:
    print("\n✅ PERFECT INTEGRITY: All papers have matching question IDs, answers (A-D), and Hindi translations!")
