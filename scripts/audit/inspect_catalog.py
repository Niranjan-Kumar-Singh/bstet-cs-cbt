import json, re

with open('js/data/papers-index.js', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'window\.PAPERS_CATALOG\s*=\s*(\[[\s\S]*?\]);', text)
data = json.loads(m.group(1))
print(f'Total Catalog Papers: {len(data)}')
by_cat = {}
total_qs = 0
for i, p in enumerate(data):
    cat = p.get('category')
    by_cat[cat] = by_cat.get(cat, 0) + 1
    tq = p.get('totalQuestions', 0)
    total_qs += tq
    print(f"{i+1:2d}. {p['id']:28s} | {cat:16s} | {tq:3d} Qs | {p['title']}")

print('--- By Category ---')
for cat, count in by_cat.items():
    print(f'  {cat}: {count} papers')
print(f'Total Questions: {total_qs}')
