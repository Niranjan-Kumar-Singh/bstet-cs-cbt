import subprocess, os

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
WORKSPACE = r"d:\Isha\Question Paper"
out_png = os.path.join(WORKSPACE, 'reports', 'lobby_phase4.png')

cmd = [
    CHROME,
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--virtual-time-budget=2000',
    f'--screenshot={out_png}',
    '--window-size=1280,800',
    f'file:///{WORKSPACE}/index.html'
]

print("Launching Chrome headless to verify clean load...")
subprocess.run(cmd, check=True)
print(f"Captured clean load screenshot: {out_png} (Size: {os.path.getsize(out_png)} bytes)")
