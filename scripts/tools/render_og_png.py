import os
import subprocess
import tempfile

def render_og_png():
    html_content = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body, html { width: 1200px; height: 630px; overflow: hidden; background: #0f172a; }
  img { width: 1200px; height: 630px; display: block; border: 0; }
</style>
</head>
<body>
<img src="og-preview.svg" width="1200" height="630">
</body>
</html>"""

    temp_html = os.path.abspath('temp_og_render.html')
    with open(temp_html, 'w', encoding='utf-8') as f:
        f.write(html_content)

    user_data = tempfile.mkdtemp()
    chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
    abs_out = os.path.abspath('og-preview.png')

    cmd = [
        chrome_path,
        '--headless=new',
        '--disable-gpu',
        '--hide-scrollbars',
        f'--user-data-dir={user_data}',
        '--window-size=1200,630',
        f'--screenshot={abs_out}',
        f'file:///{temp_html}'
    ]

    try:
        subprocess.run(cmd, check=True)
        if os.path.exists(temp_html):
            os.remove(temp_html)
        if os.path.exists(abs_out):
            size = os.path.getsize(abs_out)
            print(f"SUCCESS: og-preview.png generated at {abs_out} ({size:,} bytes)")
        else:
            print("ERROR: og-preview.png was not created")
    except Exception as e:
        print(f"FAILED: {e}")

if __name__ == '__main__':
    render_og_png()
