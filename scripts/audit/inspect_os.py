import json, re

with open('js/data/specialized-drills.js', encoding='utf-8') as f:
    text = f.read()
m = re.search(r'window\.specialized_drills\s*=\s*(\{[\s\S]*\});', text)
data = json.loads(m.group(1))
qs = data['drill_os_networks_50']['questions']
for i in range(44, len(qs)):
    print(f"Q{i+1}: {qs[i]['question']}")
    print(f"     ans: {qs[i]['correctAnswer']}")
