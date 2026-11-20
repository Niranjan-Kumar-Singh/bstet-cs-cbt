import glob, re

for fpath in sorted(glob.glob('js/data/official-*.js')):
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read(3000)
    m_id = re.search(r'id:\s*["\']([^"\']+)["\']', content)
    m_title = re.search(r'title:\s*["\']([^"\']+)["\']', content)
    m_sub = re.search(r'subtitle:\s*["\']([^"\']+)["\']', content)
    m_q = re.search(r'question:\s*["\']([^"\']+)["\']', content)
    print(fpath)
    print('  ID:', m_id.group(1) if m_id else None)
    print('  Title:', m_title.group(1) if m_title else None)
    print('  Subtitle:', m_sub.group(1) if m_sub else None)
    print('  Q1:', m_q.group(1)[:80] if m_q else None)
