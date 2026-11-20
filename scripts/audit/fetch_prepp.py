import urllib.request, re, ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# Let's search prepp for the pdf link
url = "https://prepp.in/news/e-1082-bpsc-tre-3-0-final-answer-key-out-download-pdf-for-class-11-12"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

try:
    with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
    print('Fetched Prepp page. Length:', len(html))
    links = re.findall(r'href=[\'"]([^\'"]*?\.pdf)[\'"]', html, re.I)
    print('Found PDF links:', len(links))
    for l in links:
        if 'computer' in l.lower() or '22' in l.lower():
            print('  ->', l)
except Exception as e:
    print('Error:', e)
