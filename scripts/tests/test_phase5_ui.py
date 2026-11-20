import os
import subprocess
import tempfile

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
WORKSPACE = r"d:\Isha\Question Paper"

views = [
    ("#/", "phase5_lobby_desktop.png", 1280, 800),
    ("#/", "phase5_lobby_mobile.png", 375, 812),
    ("#/dashboard", "phase5_dashboard_desktop.png", 1280, 800),
    ("#/topic-practice", "phase5_topic_practice_desktop.png", 1280, 800),
    ("#/test/drill_cs_100", "phase5_exam_screen_desktop.png", 1280, 800),
    ("#/test/drill_cs_100", "phase5_exam_screen_mobile.png", 375, 812)
]

print("=" * 60)
print("🚀 RUNNING PHASE 5 RESPONSIVE SCREENSHOT VERIFICATION MATRIX")
print("=" * 60)

for url_hash, fname, w, h in views:
    out_path = os.path.join(WORKSPACE, 'reports', fname)
    user_data = tempfile.mkdtemp()
    url = f"file:///{WORKSPACE}/index.html{url_hash}"
    cmd = [
        CHROME,
        '--headless=new',
        '--no-sandbox',
        '--disable-gpu',
        f'--user-data-dir={user_data}',
        '--virtual-time-budget=2000',
        f'--screenshot={out_path}',
        f'--window-size={w},{h}',
        url
    ]
    subprocess.run(cmd, check=True)
    size = os.path.getsize(out_path)
    print(f"  📸 Captured {fname}: {w}x{h} ({size:,} bytes)")

print("=" * 60)
print("🎉 ALL 6 RESPONSIVE VIEW SCREENSHOTS CAPTURED CLEANLY!")
print("=" * 60)
