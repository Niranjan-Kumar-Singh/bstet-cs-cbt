# 🎯 Bihar STET Paper II (Computer Science) CBT Mock Exam Portal

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-bstet--cs--cbt.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://bstet-cs-cbt.vercel.app)
[![Subject](https://img.shields.io/badge/Subject-Computer%20Science%20(Code%20226)-2563eb?style=for-the-badge)](#)
[![Target](https://img.shields.io/badge/Target-Bihar%20STET%20Class%2011--12-16a34a?style=for-the-badge)](#)
[![Papers Catalog](https://img.shields.io/badge/Catalog-35%20Verified%20Papers-purple?style=for-the-badge)](#)
[![Questions](https://img.shields.io/badge/Questions-3%2C650%20Bilingual-dc2626?style=for-the-badge)](#)
[![Bilingual](https://img.shields.io/badge/Language-English%20%7C%20%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%80-orange?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-gray?style=for-the-badge)](LICENSE)

**An authentic, high-fidelity Computer-Based Test (CBT) mock exam simulation platform for Bihar STET Paper II (Higher Secondary Teacher Recruitment - Class 11-12 Computer Science, Subject Code: 226).**

[⚡ Launch Live Portal](https://bstet-cs-cbt.vercel.app) • [📖 Browse Test Catalog](#-exam-papers-catalog-35-papers--3650-questions) • [👨‍💻 About the Architect](#-system-architecture--developer-profile) • [🚀 Deploy Guide](#-quick-deployment-guide)

</div>

---

## 🌟 Why This Portal?

Preparing for the **Bihar State Teacher Eligibility Test (STET) Paper II Computer Science** requires subject mastery, sectional pacing, and direct familiarity with the authentic **TCS iON CBT** interface in both **English and Hindi (हिन्दी)**.

Commercial coaching portals often lock test series behind subscriptions, paywalls, or cluttered advertisements. This platform was engineered from the ground up as a completely open, zero-monetization exam portal with:
- **35 Full Papers & Topic Drills (3,650 Questions)** with zero translation gaps.
- **TCS iON CBT Parity**: Locked sticky timer at viewport top (`Y = 0`), authentic question palette, and keyboard shortcuts.
- **Accessible Typography**: Live multi-tier font zoom controls (`A-`, `A`, `A+`) across lobby and examination views.
- **Full Bilingual Parity**: Instant toggling between English and Hindi across the entire user interface—from question statements and options to action buttons, legends, and conceptual explanations.
- **Official BSEB Cutoff Matrix**: Real-time evaluation against General (50%), BC (45.5%), EBC (42.5%), and SC/ST/Divyang/Female (40%) qualifying standards.
- **100% Client-Side Privacy**: Zero server tracking; all attempt data and scorecards remain strictly on your local device.

---

## 🚀 Core Features

### 🌐 1. Complete Bilingual Engine (English & हिन्दी)
- **Global & In-Exam Language Toggle**: Switch between **English** and **हिन्दी** at any point. When toggled, all UI elements—navigation, hero metrics, filter tabs, paper cards, in-exam headers, action buttons, candidate details, palette legends, and solution explanations—update synchronously.
- **Question-Level Segmented Control**: Inspect individual questions in English, Hindi, or **Dual Mode (👁️ Both)** simultaneously.
- **Accurate Bilingual Technical Vocabulary**: Preserves industry standard terms (e.g., `Normalization`, `Deadlock`, `Cache Memory`, `Pipelining`) while providing natural Hindi translations.

### ⏱ 2. Authentic TCS iON CBT Interface
- **Locked Sticky Timer (`Y = 0`)**: The 150-minute countdown timer stays permanently visible on both mobile devices and desktops without any layout shift.
- **Section Switcher Bar**: Seamlessly toggle between:
  - **Section 1: Computer Science Knowledge** (100 Qs / 100 Marks)
  - **Section 2: Art of Teaching (Pedagogy)** (30 Qs / 30 Marks)
  - **Section 3: General Skills (Reasoning, Math, GK, EVS)** (20 Qs / 20 Marks)
- **150-Question Interactive Palette**: Standard status colors:
  - 🟢 **Answered** (Recorded)
  - 🔴 **Not Answered** (Visited but unselected)
  - ⚪ **Not Visited** (Unopened)
  - 🟣 **Marked for Review** (Flagged for later review)
  - 🟣🟢 **Answered & Marked for Review** (Will be evaluated)
- **Keyboard Shortcuts**: `1-4` / `A-D` to choose options, `N` for Save & Next, `P` for Previous, `M` for Mark for Review, and `L` / `H` to toggle question language.

### 🔍 3. Accessible Font Scaling (`A-`, `A`, `A+`)
- Dedicated typography zoom controls available in both the global navbar and in-exam header.
- Proportional scaling system:
  - `A-` (Small / 90%)
  - `A` (Normal / 100% default)
  - `A+` (Large / 112% & Extra Large / 125%)
- Resizes question statements, option cards, conceptual explanation boxes, and review solutions with full persistence in `localStorage`.

### 📊 4. Diagnostic Performance Analytics
- **SVG Circular Progress Gauges**: Score percentage, accuracy rate, and question-level pacing.
- **Category Cutoff Verdicts**: Instant pass/fail status calculated against Bihar STET reservation quotas:
  - **General (UR)**: 75.0 Marks (50%)
  - **Backward Class (BC)**: 68.25 Marks (45.5%)
  - **Extremely Backward Class (EBC)**: 63.75 Marks (42.5%)
  - **SC / ST / Divyang / Female**: 60.0 Marks (40%)
- **Three-Tier Topic Diagnostic Matrix**: Isolates Strengths (≥ 75%), Moderate Areas (50–74%), and High-Priority Revision Areas (< 50%).
- **Interactive Solutions Review**: Filter by Incorrect, Skipped, Correct, or by syllabus topic with bilingual explanations.
- **Print & PDF Export**: Clean, official print stylesheets for saving scorecards.

---

## 📚 Exam Papers Catalog (35 Papers • 3,650 Questions)

| Category | Sets | Total Qs | Key Highlights |
| :--- | :---: | :---: | :--- |
| **Official PYQ Full Papers** | **5 Papers** | **750 Qs** | Authentic BSEB shift papers (03 Nov 2025 Shift 1 & 2, 04 Nov 2025 Shift 2, 07 Nov 2025 Shift 1, 12 Sep 2023) with 100% verified official answer keys. |
| **Sachin Academy Official PYQ Sets** | **5 Papers** | **150 Qs** | Authentic shift-wise Art of Teaching papers (18 Sep 2023 Shift 1 & 2, 15 Sep 2023 Shift 1 & 2, 14 Sep 2023 Shift 1) verified by Sachin Academy pedagogy faculty. |
| **2026 High-Yield Predicted Mocks** | **15 Papers** | **2,250 Qs** | Full-length 150Q simulated tests (Sets 01 to 15) strictly adhering to the 100-30-20 exam blueprint with bilingual parity. |
| **Pedagogy Master Drills** | **2 Papers** | **150 Qs** | Dedicated Art of Teaching drills: **Sachin Academy 100Q Master Drill** and **50Q Recent Exams Sprint**. |
| **Sectional & Specialized Drills** | **8 Papers** | **350 Qs** | Deep subject drills: DBMS & SQL, OS & Networks, Data Structures & Algorithms, Digital Logic & Microprocessors, Computer Architecture, Web Tech & Python, and General Skills. |
| **Grand Total** | **35 Papers** | **3,650 Qs** | Complete coverage of Bihar STET Paper II & BPSC TRE Higher Secondary curriculum. |

---

## 👨‍💻 System Architecture & Developer Profile

### Architect & Lead Engineer: **Niranjan Kumar Singh**
- **Role**: Platform Architect & EdTech Systems Developer
- **Email**: [niranjansingh1419@gmail.com](mailto:niranjansingh1419@gmail.com)
- **Instagram**: [@niranjan.ks.in](https://www.instagram.com/niranjan.ks.in)
- **Location**: Patna, Bihar, India

### Engineering Philosophy
This simulator was built as an independent, non-commercial educational resource to support teaching aspirants across Bihar. No login credentials, payment details, or personal data are collected. Everything executes client-side with zero server latency.

---

## 🛠 Technology Stack

- **Core Engine**: Semantic HTML5, CSS3 Custom Properties (Variables), Vanilla ECMAScript 2022 (ES6+).
- **Architecture**: Modular decoupled architecture (`ExamEngine`, `App`, `Analytics`, `BSTET_I18N`).
- **Data Layer**: Deferred JSON-compatible JavaScript modules (`js/data/papers-index.js`, `js/data/*.js`).
- **Security & Performance**: Zero external runtime dependencies, strict Content-Type options, SAMEORIGIN frame guards, and aggressive static asset caching via Vercel Edge.

---

## 💻 Quick Deployment Guide

### Run Locally
```bash
# 1. Clone the repository
git clone https://github.com/Niranjan-Kumar-Singh/bstet-cs-cbt.git

# 2. Navigate to directory
cd bstet-cs-cbt

# 3. Serve via any local web server
# Using Python:
python -m http.server 8080

# Using Node:
npx serve .
```

Open `http://localhost:8080` in your browser.

### Deploy to Vercel
```bash
npx vercel --prod
```

---

## 📄 License & Attribution

This project is open-source under the [MIT License](LICENSE).  
Created and maintained with care by **Niranjan Kumar Singh**.
