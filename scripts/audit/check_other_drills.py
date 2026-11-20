import re, json

with open('js/data/specialist-mastery-drills.js', encoding='utf-8') as f:
    text = f.read()

for match in re.finditer(r'window\.(drill_\w+)\s*=\s*(\{)', text):
    var_name = match.group(1)
    start_pos = match.start(2)
    brace_count = 0
    end_pos = start_pos
    for idx in range(start_pos, len(text)):
        if text[idx] == '{':
            brace_count += 1
        elif text[idx] == '}':
            brace_count -= 1
            if brace_count == 0:
                end_pos = idx + 1
                break
    data = json.loads(text[start_pos:end_pos])
    counts = {'A':0, 'B':0, 'C':0, 'D':0}
    for q in data.get('questions', []):
        counts[q.get('correctAnswer', '?')] = counts.get(q.get('correctAnswer', '?'), 0) + 1
    print(f"{var_name}: {counts}")

with open('js/data/sachin-art-of-teaching.js', encoding='utf-8') as f:
    text2 = f.read()
m2 = re.search(r'window\.sachin_art_of_teaching\s*=\s*(\{[\s\S]*\});', text2)
if m2:
    sdata = json.loads(m2.group(1))
    for pid in ['sachin_pedagogy_master', 'sachin_curated_recent_50']:
        if pid in sdata:
            counts = {'A':0, 'B':0, 'C':0, 'D':0}
            for q in sdata[pid]['questions']:
                counts[q.get('correctAnswer', '?')] = counts.get(q.get('correctAnswer', '?'), 0) + 1
            print(f"{pid}: {counts}")
