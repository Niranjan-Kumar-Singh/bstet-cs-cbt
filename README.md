# 🎯 Bihar STET Paper II (Computer Science) CBT Mock Exam Portal

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-bstet--cs--cbt.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://bstet-cs-cbt.vercel.app)
[![Subject](https://img.shields.io/badge/Subject-Computer%20Science%20(Code%20226)-2563eb?style=for-the-badge)](#)
[![Target](https://img.shields.io/badge/Target-Bihar%20STET%20Class%2011--12-16a34a?style=for-the-badge)](#)
[![Questions](https://img.shields.io/badge/Questions-2%2C450%2B%20High--Yield-dc2626?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](LICENSE)

**An authentic, state-of-the-art Computer-Based Test (CBT) mock exam simulation platform for Bihar STET Paper II (Higher Secondary Teacher Recruitment - Class 11-12 Computer Science, Subject Code: 226).**

[⚡ Launch Live Portal](https://bstet-cs-cbt.vercel.app) • [📖 Browse Test Catalog](#-exam-papers-catalog-18-full-length-sets) • [🚀 Deploy Guide](#-quick-deployment-guide)

</div>

---

## 🌟 Why This Portal?

Preparing for the **Bihar State Teacher Eligibility Test (STET) Paper II Computer Science** requires not just theoretical knowledge, but real-time speed, sectional time management, and familiarity with the authentic **TCS iON CBT** interface.

This portal provides a zero-lag, distraction-free examination simulator loaded with **18 full-length mock papers (2,450+ questions)**, officially verified answer keys, authentic timers, instant cut-off evaluations, and deep conceptual explanations for every single question.

---

## 🚀 Key Features

### ⏱ 1. Authentic TCS iON CBT Examination Engine
- **Zero-Scroll Pinned Timer**: The 150-minute countdown timer is locked at the very top of the viewport (`Y = 0`), ensuring it is **100% visible at all times** on mobile phones, tablets, and laptops without any scrolling.
- **Section Switcher Bar**: Seamlessly switch between sections anytime:
  - **Section 1: Computer Science Knowledge** (100 Qs / 100 Marks)
  - **Section 2: Art of Teaching (Pedagogy)** (30 Qs / 30 Marks)
  - **Section 3: General Skills (Reasoning, Math, GK, EVS)** (20 Qs / 20 Marks)
- **150-Question Interactive Palette**: Dynamic color-coded question statuses:
  - 🟢 **Answered** (Recorded)
  - 🔴 **Not Answered** (Visited but unanswered)
  - ⚪ **Not Visited** (Unopened)
  - 🟣 **Marked for Review** (Flagged)
  - 🟣🟢 **Answered & Marked for Review** (Will be considered for evaluation)
- **Exam Controls**: `« Previous`, `Next »`, `Mark for Review`, `Clear Response`, `Save & Next »`, and `Submit Exam`.
- **Keyboard Shortcuts**: Numbers `1-4` or `A-D` to select options, `N` for Next, `P` for Previous, `M` for Mark for Review.

### 📱 2. Mobile-First & Touch-Optimized Interface
- **Slide-Over Palette Drawer**: On mobile screens, the 150-question palette slides in smoothly from the right, keeping the question reading space clean and focused.
- **Dual-Row Ergonomic Touch Bar**: Bottom actions are split into two accessible rows so fingers never miss a button.
- **Zero Horizontal Scrolling**: Responsive typography and cards built to fit phone viewports (375px–430px) and wide desktop monitors.

### 📊 3. Grand Scorecard, Cutoff Calculator & Topic Strength Radar
- **Bihar STET Official Cutoff Verdicts**:
  - **General (Unreserved)**: 50% (75.0 Marks)
  - **BC (Backward Class)**: 45.5% (68.25 Marks)
  - **EBC (Extremely Backward Class)**: 42.5% (63.75 Marks)
  - **SC / ST / Divyang / Female**: 40% (60.0 Marks)
- **Topic Strength Radar**: Highlights your strongest and weakest units across all 15 syllabus topics (Data Structures, DBMS, OS, Networks, OOP/C++, Web Tech, Digital Logic, Python, Pedagogy, etc.) to guide targeted revision.
- **Interactive Solutions Review**:
  - Filters: **All (150)**, **❌ Incorrect Only**, **⚠️ Skipped / Unattempted**, and **✅ Correct Confirmed**.
  - Side-by-side comparison of **Your Selected Option** vs **Official Correct Answer**.
  - **"💡 Conceptual Explanation & Theory"** box breaking down the underlying concepts for each question.

### 💾 4. Persistent Local History & Solutions Review
- Tests are automatically saved to your browser's `localStorage` (`BSTET_EXAM_HISTORY` + `BSTET_REPORT_${id}`).
- Revisit past attempts from the Lobby table anytime and click **"📖 Review Solutions"** to analyze past mistakes.
- Zero data loss on page refreshes or browser restarts.

---

## 📚 Exam Papers Catalog (18 Full-Length Sets)

| Category | Sets | Questions | Description |
| :--- | :---: | :---: | :--- |
| **Official PYQ Papers** | **5 Sets** | **750 Qs** | Real official Bihar STET papers (03 Nov 2025 Shift 1 & 2, 04 Nov 2025 Shift 2, 07 Nov 2025 Shift 1, and 12 Sep 2023) with **100% verified official keys** extracted from PDF checkmark coordinates. |
| **2026 Predicted Mocks** | **10 Sets** | **1,500 Qs** | High-probability predicted full-length papers (Sets 1 to 10) covering all 15 CS syllabus units, 30 Art of Teaching topics, and 20 General Skills topics. |
| **Sectional Mastery Drills** | **3 Sets** | **200 Qs** | Focused practice: **CS 100Q Mastery Drill**, **Pedagogy 50Q Drill**, and **General Skills 50Q Drill**. |
| **Grand Total** | **18 Papers** | **2,450+ Qs** | Complete readiness curriculum with in-depth explanations. |

---

## 🛠 Tech Stack

- **Frontend Core**: Vanilla HTML5, CSS3, Modern JavaScript (ES6+ Modules)
- **State Engine**: Pure client-side state machine (`js/exam-engine.js`)
- **Analytics Engine**: Deterministic cutoff & topic strength calculator (`js/analytics.js`)
- **Data Layer**: Modular data files (`js/data/*.js`) containing structured question arrays
- **Dependencies**: **Zero** external runtime dependencies (100% offline and standalone)
- **Deployment**: Optimized for Vercel, Netlify, or GitHub Pages

---

## 💻 Local Quick Start

Clone the repository and run locally in one command:

```bash
# 1. Clone the repository
git clone https://github.com/Niranjan-Kumar-Singh/bstet-cs-cbt.git

# 2. Enter project folder
cd bstet-cs-cbt

# 3. Run with Python's built-in server (or open index.html directly)
python -m http.server 8080
```

Open **`http://localhost:8080/index.html`** in your browser.

---

## 🚀 Quick Deployment Guide

### Deploy on Vercel (Instant 1-Click)
1. Fork or push this repository to your GitHub account: `https://github.com/Niranjan-Kumar-Singh/bstet-cs-cbt`
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New" → "Project"** and import `bstet-cs-cbt`.
4. Framework Preset: **Other** (Root directory `./`).
5. Click **"Deploy"**. Your portal will be live at `https://bstet-cs-cbt.vercel.app`!

---

## 👨‍💻 Author & Developer

**Niranjan Kumar Singh**  
- ✉ **Email**: [niranjansingh1419@gmail.com](mailto:niranjansingh1419@gmail.com)  
- 📷 **Instagram**: [@niranjan.ks.in](https://www.instagram.com/niranjan.ks.in)  
- 🐙 **GitHub**: [@Niranjan-Kumar-Singh](https://github.com/Niranjan-Kumar-Singh)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

<div align="center">

*"कठिन परिश्रम का कोई विकल्प नहीं होता — लक्ष्य पर ध्यान केंद्रित रखें और सफलता आपकी होगी!"*

</div>
