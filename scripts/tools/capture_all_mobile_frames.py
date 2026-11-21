import subprocess
import os
import json

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
REPORTS_DIR = r"d:\Isha\Question Paper\reports\mobile_audit_v2"
os.makedirs(REPORTS_DIR, exist_ok=True)

test_screens = [
    ("/#/", "frame_lobby_375.png"),
    ("/?paper=official_shift1&mode=cbt", "frame_exam_cbt_375.png"),
    ("/#/cheatsheets", "frame_cheatsheets_375.png"),
    ("/#/dashboard", "frame_dashboard_375.png"),
    ("/#/topic-practice", "frame_topic_practice_375.png")
]

for url_path, out_fname in test_screens:
    html_page = f"""<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f1f5f9;">
<iframe id="testframe" src="{url_path}" style="width:375px;height:812px;border:none;background:#ffffff;"></iframe>
<script>
const ifr = document.getElementById('testframe');
ifr.onload = () => {{
  setTimeout(() => {{
    try {{
      const doc = ifr.contentDocument || ifr.contentWindow.document;
      const docW = doc.documentElement.clientWidth;
      const scrollW = doc.documentElement.scrollWidth;
      console.log('DIAG_{out_fname}: docW=' + docW + ', scrollW=' + scrollW);
    }} catch(e) {{}}
  }}, 1500);
}};
</script>
</body>
</html>
"""
    tmp_html = os.path.join(r"d:\Isha\Question Paper", f"eval_{out_fname.replace('.png', '')}.html")
    with open(tmp_html, 'w', encoding='utf-8') as f:
        f.write(html_page)

    out_png = os.path.join(REPORTS_DIR, out_fname)
    cmd = [
        CHROME,
        '--headless=new',
        '--no-sandbox',
        '--disable-gpu',
        '--enable-logging=stderr',
        '--virtual-time-budget=3500',
        f'--screenshot={out_png}',
        '--window-size=420,860',
        f'http://localhost:3000/{os.path.basename(tmp_html)}'
    ]
    p = subprocess.run(cmd, capture_output=True, text=True)
    size = os.path.getsize(out_png) if os.path.exists(out_png) else 0
    print(f"Captured {out_fname} ({size:,} bytes)")
    for line in p.stderr.splitlines():
        if f'DIAG_{out_fname}' in line:
            print("  " + line.split('CONSOLE:')[-1].strip())
