import subprocess
import os

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
TEMP_DIR = os.environ.get('TEMP', '.')
WORKSPACE = r"d:\Isha\Question Paper"

tabs = ['privacy', 'author', 'terms', 'disclaimer', 'adsense']

for tab in tabs:
    with open(os.path.join(WORKSPACE, 'index.html'), 'r', encoding='utf-8') as f:
        html = f.read()

    # Base href
    html = html.replace('<head>', '<head><base href="file:///d:/Isha/Question Paper/">')
    # Make legal-modal active directly
    html = html.replace('class="modal-overlay" id="legal-modal"', 'class="modal-overlay active" id="legal-modal"')
    # Call render immediately after load
    html = html.replace('</body>', f'<script>window.addEventListener("load", ()=>{{ if (window.app) window.app.openLegalModal("{tab}"); }});</script></body>')

    test_html = os.path.join(TEMP_DIR, f'test_{tab}.html')
    with open(test_html, 'w', encoding='utf-8') as f:
        f.write(html)

    # Capture 1200x800
    out_png = os.path.join(WORKSPACE, 'reports', f'modal_{tab}_1200x800.png')
    cmd = [
        CHROME,
        '--headless=new',
        '--no-sandbox',
        '--disable-gpu',
        '--virtual-time-budget=2000',
        f'--screenshot={out_png}',
        '--window-size=1200,800',
        f'file:///{test_html}'
    ]
    subprocess.run(cmd, check=True)
    print(f'Captured: {out_png}')

    # Capture 1024x640
    out_png_compact = os.path.join(WORKSPACE, 'reports', f'modal_{tab}_1024x640.png')
    cmd_compact = [
        CHROME,
        '--headless=new',
        '--no-sandbox',
        '--disable-gpu',
        '--virtual-time-budget=2000',
        f'--screenshot={out_png_compact}',
        '--window-size=1024,640',
        f'file:///{test_html}'
    ]
    subprocess.run(cmd_compact, check=True)
    print(f'Captured: {out_png_compact}')

print('All screenshots captured with virtual time budget')
