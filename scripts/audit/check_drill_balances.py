import json, re

files = [
    ('js/data/topical-drills.js', r'window\.topical_drills\s*=\s*(\{[\s\S]*\});'),
    ('js/data/specialized-drills.js', r'window\.specialized_drills\s*=\s*(\{[\s\S]*\});'),
    ('js/data/specialist-mastery-drills.js', r'window\.drill_(\w+)\s*=\s*(\{[\s\S]*\});'),
    ('js/data/sachin-art-of-teaching.js', r'window\.sachin_art_of_teaching\s*=\s*(\{[\s\S]*\});')
]

for fname, pattern in files:
    with open(fname, encoding='utf-8') as f:
        content = f.read()
    if fname == 'js/data/specialist-mastery-drills.js':
        matches = re.findall(r'window\.(drill_\w+)\s*=\s*(\{[\s\S]*?\n\};)', content)
        for var_name, json_str in matches:
            data = json.loads(json_str)
            counts = {'A':0, 'B':0, 'C':0, 'D':0, 'E':0}
            for q in data.get('questions', []):
                counts[q.get('correctAnswer', '?')] = counts.get(q.get('correctAnswer', '?'), 0) + 1
            print(f"{var_name}: {counts}")
    else:
        m = re.search(pattern, content)
        if m:
            data = json.loads(m.group(1))
            for pid, pdata in data.items():
                if isinstance(pdata, dict) and 'questions' in pdata:
                    counts = {'A':0, 'B':0, 'C':0, 'D':0, 'E':0}
                    for q in pdata['questions']:
                        counts[q.get('correctAnswer', '?')] = counts.get(q.get('correctAnswer', '?'), 0) + 1
                    print(f"{pid}: {counts}")
