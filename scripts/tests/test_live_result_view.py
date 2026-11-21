import os
import sys
import subprocess
import tempfile
import time

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
REPORTS_DIR = r"d:\Isha\Question Paper\reports\verification"
out_result = os.path.join(REPORTS_DIR, "live_result_share_hub.png")

# We can launch a node script with puppeteer or write an HTML test runner that automatically loads the result view on mount
html_test_path = r"d:\Isha\Question Paper\test_result_preview.html"
with open(r"d:\Isha\Question Paper\index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Inject script before </body> to automatically switch to result view with sample data
sample_trigger = """
<script>
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (window.app) {
      const mockReport = {
        paperId: 'bpsc_tre1_2023',
        paperTitle: 'BPSC TRE 1.0 PGT Computer Science (Class 11-12)',
        totalScore: 94,
        maxMarks: 120,
        percentage: 78.3,
        accuracy: 85,
        avgTimePerAttempt: 48,
        estPercentile: 96,
        isQualified: true,
        attempted: 112,
        totalQuestions: 120,
        cutoffs: {
          General: { category: 'General (UR)', minPct: 50, minMarks: 60, qualified: true, margin: '+34' }
        },
        sectionStats: {
          GeneralStudies: { name: 'Part I: General Studies', score: 28, total: 40, correct: 28, incorrect: 8, unattempted: 4, timeSpent: 1200 },
          ComputerScience: { name: 'Part II: Computer Science', score: 66, total: 80, correct: 66, incorrect: 10, unattempted: 4, timeSpent: 3600 }
        },
        strongTopics: [{ name: 'DBMS & SQL', accuracy: 92, correct: 18, total: 20 }],
        moderateTopics: [{ name: 'Computer Networks', accuracy: 70, correct: 14, total: 20 }],
        weakTopics: [],
        questionReviews: []
      };
      window.app.lastAnalyticsReport = mockReport;
      window.app.showResultView(mockReport);
      window.app.showView('result');
    }
  }, 1000);
});
</script>
"""

modified_html = content.replace("</body>", sample_trigger + "\n</body>")
with open(html_test_path, "w", encoding="utf-8") as f:
    f.write(modified_html)

user_data = tempfile.mkdtemp()
cmd = [
    CHROME, '--headless=new', '--no-sandbox', '--disable-gpu',
    f'--user-data-dir={user_data}',
    '--virtual-time-budget=5000',
    f'--screenshot={out_result}',
    '--window-size=1280,1100',
    'http://localhost:3000/test_result_preview.html'
]
subprocess.run(cmd, check=True)

if os.path.exists(html_test_path):
    os.remove(html_test_path)

if os.path.exists(out_result):
    print(f"Result View Screenshot: {os.path.getsize(out_result):,} bytes")
else:
    print("Failed to capture result screenshot")
