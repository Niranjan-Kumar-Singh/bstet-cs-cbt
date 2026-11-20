import json

with open('incoming/stet_2019_extracted_draft.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Type: {type(data)}")
if isinstance(data, list):
    print(f"Count: {len(data)}")
    if data:
        print("First item:", json.dumps(data[0], indent=2))
        print("Item keys:", [q.get("num") or q.get("qNo") or q.get("id") for q in data[:10]])
elif isinstance(data, dict):
    print("Keys:", data.keys())
