import json, re

with open('js/data/topical-drills.js', encoding='utf-8') as f:
    text = f.read()
m = re.search(r'window\.topical_drills\s*=\s*(\{[\s\S]*\});', text)
data = json.loads(m.group(1))
q30 = data['drill_general_50']['questions'][29]
print("drill_general_50 Q30:")
print(f"Q: {q30['question']}")
print(f"Topic: {q30['topic']}")
