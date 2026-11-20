import subprocess, time, os, urllib.request

port = 8099
server = subprocess.Popen(["python", "-m", "http.server", str(port)])
time.sleep(1.5)

try:
    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    if not os.path.exists(chrome_path):
        chrome_path = r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"

    temp_dir = os.environ.get("TEMP", "C:\\Temp")
    temp_img1 = os.path.join(temp_dir, "bpsc_lobby.png")
    temp_img2 = os.path.join(temp_dir, "bpsc_exam.png")

    # 1. Lobby screenshot
    cmd1 = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--window-size=1200,800",
        f"--screenshot={temp_img1}",
        f"http://localhost:{port}/"
    ]
    subprocess.run(cmd1, check=True)

    # 2. CBT Exam screenshot for BPSC TRE 3.0
    cmd2 = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--window-size=1200,800",
        f"--screenshot={temp_img2}",
        f"http://localhost:{port}/?paper=bpsc_tre3_2024"
    ]
    subprocess.run(cmd2, check=True)

    os.makedirs("reports", exist_ok=True)
    import shutil
    shutil.copyfile(temp_img1, r"reports\bpsc_lobby.png")
    shutil.copyfile(temp_img2, r"reports\bpsc_exam.png")
    print("Rendered and copied reports/bpsc_lobby.png and reports/bpsc_exam.png successfully!")
finally:
    server.terminate()
