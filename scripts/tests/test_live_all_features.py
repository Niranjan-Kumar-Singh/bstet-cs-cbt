import os
import sys
import subprocess
import tempfile
import json

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
REPORTS_DIR = r"d:\Isha\Question Paper\reports\verification"
os.makedirs(REPORTS_DIR, exist_ok=True)

# 1. Test Lobby
print("Testing Lobby View...")
out_lobby = os.path.join(REPORTS_DIR, "live_lobby_v4.png")
user_data1 = tempfile.mkdtemp()
cmd1 = [
    CHROME, '--headless=new', '--no-sandbox', '--disable-gpu',
    f'--user-data-dir={user_data1}',
    '--virtual-time-budget=4000',
    f'--screenshot={out_lobby}',
    '--window-size=1280,850',
    'http://localhost:3000/'
]
subprocess.run(cmd1, check=True)
print(f"Lobby screenshot: {os.path.getsize(out_lobby):,} bytes")

# 2. Test Cheatsheets View
print("Testing Cheatsheets View...")
out_cheat = os.path.join(REPORTS_DIR, "live_cheatsheets_v4.png")
user_data2 = tempfile.mkdtemp()
cmd2 = [
    CHROME, '--headless=new', '--no-sandbox', '--disable-gpu',
    f'--user-data-dir={user_data2}',
    '--virtual-time-budget=4000',
    f'--screenshot={out_cheat}',
    '--window-size=1280,950',
    'http://localhost:3000/#/cheatsheets'
]
subprocess.run(cmd2, check=True)
print(f"Cheatsheets screenshot: {os.path.getsize(out_cheat):,} bytes")

# 3. Test BPSC TRE 1.0 Exam View
print("Testing BPSC TRE 1.0 Exam View...")
out_exam = os.path.join(REPORTS_DIR, "live_bpsc_tre1_exam_v4.png")
user_data3 = tempfile.mkdtemp()
cmd3 = [
    CHROME, '--headless=new', '--no-sandbox', '--disable-gpu',
    f'--user-data-dir={user_data3}',
    '--virtual-time-budget=4000',
    f'--screenshot={out_exam}',
    '--window-size=1280,850',
    'http://localhost:3000/?paper=bpsc_tre1_2023&mode=cbt'
]
subprocess.run(cmd3, check=True)
print(f"Exam view screenshot: {os.path.getsize(out_exam):,} bytes")

print("All screenshots generated successfully!")
