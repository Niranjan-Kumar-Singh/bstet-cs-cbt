import json, re

with open('js/data/topical-drills.js', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'window\.topical_drills\s*=\s*(\{[\s\S]*\});', text)
data = json.loads(m.group(1))

for pid, pdata in data.items():
    qs = pdata['questions']
    print(f"Paper {pid}: {len(qs)} questions")
    # check answer distribution
    counts = {'A': 0, 'B': 0, 'C': 0, 'D': 0}
    for q in qs:
        counts[q.get('correctAnswer', '?')] = counts.get(q.get('correctAnswer', '?'), 0) + 1
    print("  Answer distribution:", counts)
    # check templated questions
    templated = []
    for q in qs:
        qt = q['question']
        if re.search(r'\b(practice|scenario|series|case|deployment|workflow|drill|module|instance|exercise|variant|item)\s+\d+\b', qt, re.I):
            templated.append((q['questionNumber'], qt[:60]))
    print(f"  Templated questions: {len(templated)}")
    if templated:
        print("    Sample:", templated[:3])

with open('js/data/specialized-drills.js', encoding='utf-8') as f:
    text2 = f.read()

m2 = re.search(r'window\.specialized_drills\s*=\s*(\{[\s\S]*\});', text2)
data2 = json.loads(m2.group(1))

for pid, pdata in data2.items():
    qs = pdata['questions']
    print(f"\nPaper {pid}: {len(qs)} questions")
    counts = {'A': 0, 'B': 0, 'C': 0, 'D': 0}
    for q in qs:
        counts[q.get('correctAnswer', '?')] = counts.get(q.get('correctAnswer', '?'), 0) + 1
    print("  Answer distribution:", counts)
    templated = []
    for q in qs:
        qt = q['question']
        if re.search(r'\b(practice|scenario|series|case|deployment|workflow|drill|module|instance|exercise|variant|item)\s+\d+\b', qt, re.I):
            templated.append((q['questionNumber'], qt[:60]))
    print(f"  Templated questions: {len(templated)}")
    if templated:
        print("    Sample:", templated[:3])
