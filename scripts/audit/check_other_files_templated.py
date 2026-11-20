import json, re

with open('js/data/specialist-mastery-drills.js', encoding='utf-8') as f:
    text = f.read()

templated_pattern = re.compile(r'\b(case|scenario|deployment|series|practice|workflow|drill|module|instance|exercise|variant|item)\s+\d+\b', re.I)

matches = templated_pattern.findall(text)
print("specialist-mastery-drills matches:", matches)

with open('js/data/sachin-art-of-teaching.js', encoding='utf-8') as f:
    text2 = f.read()
matches2 = templated_pattern.findall(text2)
print("sachin-art-of-teaching matches:", matches2)
