import json, re

with open('js/data/specialist-mastery-drills.js', encoding='utf-8') as f:
    text = f.read()

# It defines window.drill_dbms_sql_50 = {...}; window.drill_os_networks_master_50 = {...}; window.drill_pedagogy_nep_50 = {...};
for varname in ['drill_dbms_sql_50', 'drill_os_networks_master_50', 'drill_pedagogy_nep_50']:
    m = re.search(r'window\.' + varname + r'\s*=\s*(\{[\s\S]*?\});(?=\s*window|\s*$)', text)
    if m:
        pdata = json.loads(m.group(1))
        qs = pdata['questions']
        print(f"Paper {varname}: {len(qs)} questions")
        counts = {'A': 0, 'B': 0, 'C': 0, 'D': 0}
        for q in qs:
            counts[q.get('correctAnswer', '?')] = counts.get(q.get('correctAnswer', '?'), 0) + 1
        print("  Answer distribution:", counts)
