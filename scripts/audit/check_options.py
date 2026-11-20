import json, re

for fname in ['js/data/topical-drills.js', 'js/data/specialized-drills.js']:
    with open(fname, encoding='utf-8') as f:
        content = f.read()
    m = re.search(r'window\.\w+\s*=\s*(\{[\s\S]*\});', content)
    if m:
        data = json.loads(m.group(1))
        for pid, pdata in data.items():
            for i, q in enumerate(pdata['questions']):
                exp = q.get('explanation', '')
                if re.search(r'\b(option|विकल्प)\s+[A-D]\b', exp, re.I):
                    print(f"{pid} Q{i+1}: {exp[:60]}")
