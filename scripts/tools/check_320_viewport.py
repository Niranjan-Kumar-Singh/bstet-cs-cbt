import subprocess
import os

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
test_screens = [
    ("/#/", "lobby_320"),
    ("/?paper=official_shift1&mode=cbt", "exam_320"),
    ("/#/cheatsheets", "cheatsheets_320"),
    ("/#/dashboard", "dashboard_320"),
    ("/#/topic-practice", "topic_practice_320")
]

for url_path, name in test_screens:
    html = f"""<!DOCTYPE html><html><body style="margin:0;padding:0;">
    <iframe id="ifr" src="{url_path}" style="width:320px;height:650px;border:none;"></iframe>
    <script>
    document.getElementById('ifr').onload = () => {{
        setTimeout(() => {{
            try {{
                const doc = document.getElementById('ifr').contentDocument;
                const cw = doc.documentElement.clientWidth;
                const sw = doc.documentElement.scrollWidth;
                console.log('CHECK_{name}: clientWidth=' + cw + ' scrollWidth=' + sw);
            }} catch(e) {{
                console.error(e);
            }}
        }}, 1400);
    }};
    </script></body></html>"""
    fpath = os.path.join(r"d:\Isha\Question Paper", f"eval_{name}.html")
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(html)
    cmd = [
        CHROME,
        '--headless=new',
        '--no-sandbox',
        '--disable-gpu',
        '--enable-logging=stderr',
        '--virtual-time-budget=3500',
        f'http://localhost:3000/eval_{name}.html'
    ]
    p = subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(fpath):
        os.remove(fpath)
    for l in p.stderr.splitlines():
        if f'CHECK_{name}' in l:
            print(l.split('CONSOLE:')[-1].strip())
