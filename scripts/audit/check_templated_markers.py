import json, re

files = [
    ('js/data/topical-drills.js', r'window\.topical_drills\s*=\s*(\{[\s\S]*\});'),
    ('js/data/specialized-drills.js', r'window\.specialized_drills\s*=\s*(\{[\s\S]*\});'),
    ('js/data/specialist-mastery-drills.js', r'window\.drill_(\w+)\s*=\s*(\{[\s\S]*?\n\};)')
]

templated_pattern = re.compile(r'\b(case|scenario|deployment|series|practice|workflow|drill|module|instance|exercise|variant|item)\s+\d+\b', re.I)

found_templated = 0
for fname, pattern in files[:2]:
    with open(fname, encoding='utf-8') as f:
        text = f.read()
    m = re.search(pattern, text)
    if m:
        data = json.loads(m.group(1))
        for pid, pdata in data.items():
            for i, q in enumerate(pdata['questions']):
                q_text = q.get('question', '')
                matches = templated_pattern.findall(q_text)
                if matches:
                    print(f"[{pid} Q{i+1}] Templated marker: {matches} -> {q_text[:70]}")
                    found_templated += 1

print(f"Total templated filler markers found: {found_templated}")
