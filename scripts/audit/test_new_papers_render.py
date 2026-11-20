import subprocess, time, os, shutil

port = 8091
server = subprocess.Popen(["python", "-m", "http.server", str(port)])
time.sleep(1.5)

try:
    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    temp_dir = os.environ.get("TEMP", "C:\\Temp")
    
    t_lobby = os.path.join(temp_dir, "stet_2019_lobby.png")
    t_exam19 = os.path.join(temp_dir, "stet_2019_exam.png")
    t_exam20 = os.path.join(temp_dir, "stet_2020_exam.png")

    subprocess.run([
        chrome_path, "--headless=new", "--disable-gpu", "--no-sandbox",
        "--window-size=1200,800", f"--screenshot={t_lobby}", f"http://localhost:{port}/"
    ], check=True)

    subprocess.run([
        chrome_path, "--headless=new", "--disable-gpu", "--no-sandbox",
        "--window-size=1200,800", f"--screenshot={t_exam19}", f"http://localhost:{port}/?paper=official_2019"
    ], check=True)

    subprocess.run([
        chrome_path, "--headless=new", "--disable-gpu", "--no-sandbox",
        "--window-size=1200,800", f"--screenshot={t_exam20}", f"http://localhost:{port}/?paper=official_2020"
    ], check=True)

    os.makedirs("reports", exist_ok=True)
    shutil.copyfile(t_lobby, r"reports\stet_2019_lobby.png")
    shutil.copyfile(t_exam19, r"reports\stet_2019_exam.png")
    shutil.copyfile(t_exam20, r"reports\stet_2020_exam.png")
    print("SUCCESS: Rendered and copied all 3 proof screenshots to reports/!")
finally:
    server.terminate()
