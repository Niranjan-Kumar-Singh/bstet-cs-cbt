import os
import sys
import json
import subprocess
import tempfile

WORKSPACE = r"d:\Isha\Question Paper"
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
FINAL_REPORTS_DIR = os.path.join(WORKSPACE, "reports", "final")
os.makedirs(FINAL_REPORTS_DIR, exist_ok=True)

def test_headless_execution():
    print("=" * 60)
    print("🚀 RUNNING FINAL HEADLESS ACCEPTANCE & VIEWPORT AUDIT")
    print("=" * 60)

    views = [
        ("#/", "lobby_desktop.png", 1280, 800),
        ("#/", "lobby_mobile.png", 375, 812),
        ("#/dashboard", "dashboard_desktop.png", 1280, 800),
        ("#/topic-practice", "topic_practice_desktop.png", 1280, 800),
        ("#/test/drill_cs_100", "exam_cbt_desktop.png", 1280, 800),
        ("#/test/drill_cs_100", "exam_cbt_mobile.png", 375, 812)
    ]

    for url_hash, fname, w, h in views:
        out_path = os.path.join(FINAL_REPORTS_DIR, fname)
        user_data = tempfile.mkdtemp()
        url = f"file:///{WORKSPACE}/index.html{url_hash}"
        cmd = [
            CHROME,
            '--headless=new',
            '--no-sandbox',
            '--disable-gpu',
            f'--user-data-dir={user_data}',
            '--virtual-time-budget=2500',
            f'--screenshot={out_path}',
            f'--window-size={w},{h}',
            url
        ]
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode != 0:
            print(f"❌ ERROR capturing {fname}: {res.stderr}")
            sys.exit(1)
        size = os.path.getsize(out_path)
        print(f"  📸 Captured {fname}: {w}x{h} ({size:,} bytes)")

    print("=" * 60)
    print("🎉 ALL FINAL ACCEPTANCE SCREENSHOTS CAPTURED CLEANLY!")
    print("=" * 60)

if __name__ == '__main__':
    test_headless_execution()
