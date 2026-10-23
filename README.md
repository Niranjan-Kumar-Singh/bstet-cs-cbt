# 🎯 Bihar STET Paper II (Computer Science) CBT Mock Exam Portal

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-bstet--cs--cbt.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://bstet-cs-cbt.vercel.app)
[![Subject](https://img.shields.io/badge/Subject-Computer%20Science%20(Code%20226)-2563eb?style=for-the-badge)](#)
[![Target](https://img.shields.io/badge/Target-Bihar%20STET%20Class%2011--12-16a34a?style=for-the-badge)](#)
[![Questions](https://img.shields.io/badge/Questions-3%2C000%2B%20Bilingual-dc2626?style=for-the-badge)](#)
[![Bilingual](https://img.shields.io/badge/Language-English%20%7C%20%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%80-orange?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](LICENSE)

**An authentic, state-of-the-art Computer-Based Test (CBT) mock exam simulation platform for Bihar STET Paper II (Higher Secondary Teacher Recruitment - Class 11-12 Computer Science, Subject Code: 226).**

[⚡ Launch Live Portal](https://bstet-cs-cbt.vercel.app) • [📖 Browse Test Catalog](#-exam-papers-catalog-23-full-length-sets--drills) • [🚀 Deploy Guide](#-quick-deployment-guide)

</div>

---

## 🌟 Why This Portal?

Preparing for the **Bihar State Teacher Eligibility Test (STET) Paper II Computer Science** requires not just theoretical knowledge, but real-time speed, sectional time management, and familiarity with the authentic **TCS iON CBT** interface in both **English and Hindi (हिन्दी)**.

This portal provides a zero-lag, distraction-free examination simulator loaded with **23 full-length mock papers and mastery drills (3,000+ questions)**, officially verified answer keys, authentic timers, instant cut-off evaluations, SVG performance gauges, and deep conceptual explanations for every single question.

---

## 🚀 Key Features

### 🌐 1. Complete Bilingual Support (English & हिन्दी)
- **Instant Language Toggle**: Seamlessly switch the entire exam platform or individual questions between **English** and **हिन्दी** with a single click.
- **Bilingual Technical Vocabulary**: Precise translations for all 15 Computer Science syllabus units, Art of Teaching pedagogy concepts, and options.
- **Bilingual Solution Reviews**: Study explanations in either English or Hindi according to your preferred medium of study.

### ⏱ 2. Authentic TCS iON CBT Examination Engine
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
- **Keyboard Shortcuts**: Numbers `1-4` or `A-D` to select options, `N` for Next, `P` for Previous, `M` for Mark for Review, `L` to toggle language.

### 📊 3. Production-Grade Scorecard & Performance Analytics
- **SVG Circular Progress Gauges**: Real-time visual donut gauges for Score, Accuracy Rate, and Average Question Pacing.
- **Official Bihar STET Reservation Cutoff Matrix**: Instant pass/fail qualification verdicts and score margins against all 4 official cutoff categories:
  - **General (Unreserved)**: 50% (75.0 Marks)
  - **BC (Backward Class)**: 45.5% (68.25 Marks)
  - **EBC (Extremely Backward Class)**: 42.5% (63.75 Marks)
  - **SC / ST / Divyang / Female**: 40% (60.0 Marks)
- **Three-Tier Topic Diagnostic Matrix**:
  - 🟢 **Strengths (≥ 75%)**: Topics where you have achieved mastery.
  - 🟡 **Moderate Areas (50% - 74%)**: Topics requiring formula consolidation.
  - 🔴 **High-Priority Revision (< 50%)**: Actionable revision advice pinpointing exact weak units.
- **Interactive Solutions Review**:
  - Filter by: **All (150)**, **❌ Incorrect Only**, **⚠️ Skipped**, and **✅ Correct Confirmed**.
  - **Topic Filter Dropdown**: Isolate questions from any of the 15 units or pedagogy.
  - Question-level time spent counter (e.g. `⏱ 42s spent`).
  - **🖨️ Print / Save PDF**: Print-ready official scorecard styling (`@media print`).
  - **📋 Share Summary**: Instant copy-to-clipboard for study groups on WhatsApp/Telegram.

---

## 📚 Exam Papers Catalog (23 Full-Length Sets & Drills)

| Category | Sets | Questions | Description |
| :--- | :---: | :---: | :--- |
| **Official PYQ Papers** | **5 Sets** | **750 Qs** | Real official Bihar STET papers (03 Nov 2025 Shift 1 & 2, 04 Nov 2025 Shift 2, 07 Nov 2025 Shift 1, and 12 Sep 2023) with **100% verified official keys**. |
| **2026 Predicted Mocks** | **12 Sets** | **1,800 Qs** | High-probability predicted full-length papers (Sets 1 to 12) strictly covering all 15 CS syllabus units, 30 Art of Teaching topics, and 20 General Skills topics with bilingual support. |
| **Sectional & Specialized Drills** | **6 Sets** | **500 Qs** | Focused practice: **CS 100Q Drill**, **Pedagogy 50Q Drill**, **General Skills 50Q Drill**, **DSA & SQL 50Q Drill**, **OS & Networks 50Q Drill**, and **Modern Tech 50Q Drill**. |
| **Grand Total** | **23 Papers** | **3,000+ Qs** | Complete readiness curriculum with in-depth bilingual explanations. |

---

## 🛠 Tech Stack

- **Frontend Core**: Vanilla HTML5, CSS3, Modern JavaScript (ES6+ Modules)
- **Internationalization**: Zero-dependency bilingual engine (`js/i18n.js`)
- **State Engine**: Pure client-side state machine (`js/exam-engine.js`)
- **Analytics Engine**: Deterministic cutoff, pacing & topic strength calculator (`js/analytics.js`)
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
