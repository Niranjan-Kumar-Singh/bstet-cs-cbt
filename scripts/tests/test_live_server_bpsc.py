import os
import sys
import subprocess
import tempfile

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
REPORTS_DIR = r"d:\Isha\Question Paper\reports\verification"
os.makedirs(REPORTS_DIR, exist_ok=True)

test_targets = [
    ("http://localhost:3000/", "live_lobby_25papers.png", 1280, 800),
    ("http://localhost:3000/?paper=bpsc_tre1_2023&mode=cbt", "live_bpsc_tre1_exam.png", 1280, 800),
    ("http://localhost:3000/?paper=bpsc_tre2_2023&mode=cbt", "live_bpsc_tre2_exam.png", 1280, 800),
    ("http://localhost:3000/?paper=bpsc_tre3_2024&mode=cbt", "live_bpsc_tre3_exam.png", 1280, 800),
    ("http://localhost:3000/#/dashboard", "live_dashboard.png", 1280, 800),
]

print("================================================================")
print("TESTING LIVE SERVER http://localhost:3000/ WITH HEADLESS CHROME")
print("================================================================\n")

for url, fname, w, h in test_targets:
    out_path = os.path.join(REPORTS_DIR, fname)
    user_data = tempfile.mkdtemp()
    cmd = [
        CHROME,
        '--headless=new',
        '--no-sandbox',
        '--disable-gpu',
        f'--user-data-dir={user_data}',
        '--virtual-time-budget=3500',
        f'--screenshot={out_path}',
        f'--window-size={w},{h}',
        url
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"❌ FAIL: Chrome error on {url}: {res.stderr}")
        sys.exit(1)
    
    if os.path.exists(out_path):
        size = os.path.getsize(out_path)
        print(f"✅ PASS: {url} -> {fname} ({size:,} bytes)")
    else:
        print(f"❌ FAIL: Screenshot {fname} not generated!")
        sys.exit(1)

print("\n================================================================")
print("LIVE HEADLESS VERIFICATION COMPLETED SUCCESSFULLY")
print("================================================================")
