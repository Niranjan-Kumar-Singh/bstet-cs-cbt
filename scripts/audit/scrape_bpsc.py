import urllib.request, re, ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request(
    'https://www.bpsc.bih.nic.in/',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)

try:
    with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
    print('Fetched BPSC homepage. Length:', len(html))

    # Search for Computer Science links
    matches = re.findall(r'<a[^>]*href=[\'"]([^\'"]*?)[\'"][^>]*>([\s\S]*?)</a>', html, re.I)
    cs_matches = []
    for url, text in matches:
        clean_text = re.sub(r'<[^>]+>', '', text).strip()
        if 'computer' in clean_text.lower() or '22/2024' in clean_text.lower() or 'tre 3' in clean_text.lower():
            cs_matches.append((url, clean_text))

    print(f'Found {len(cs_matches)} matches:')
    for u, t in cs_matches[:10]:
        print('  URL:', u)
        print('  Text:', t[:80])
except Exception as e:
    print('Error accessing BPSC:', e)
