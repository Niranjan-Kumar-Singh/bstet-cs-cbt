/**
 * Bihar STET Paper II CBT Portal - Internationalization (i18n) & Bilingual Engine
 * Seamless English & Hindi (हिन्दी) support for entire UI, test cards, exam controls,
 * questions, options, topics, scorecards, and analysis.
 */

window.BSTET_I18N = {
  currentLang: localStorage.getItem('BSTET_LANG') || 'en',

  translations: {
    en: {
      // Navbar & Branding
      portal_title: "Bihar STET Paper II (Computer Science)",
      portal_tagline: "Official CBT Mock Exam & Readiness Portal • Class 11-12 (Code 226)",
      lang_name: "English",
      toggle_to_lang: "हिन्दी",

      // Hero Section
      mission_pill: "🔥 MISSION BSTET 2026",
      motivational_quote: '"Work hard in silence, let your success make the noise!"',
      hero_title: "BSTET Paper II (Computer Science) CBT Portal",
      hero_subtitle: "Official Examination Simulator for Higher Secondary Teachers (Class 11-12 Code 226). Practice with 35 comprehensive mock papers (3,650+ questions including Sachin Academy PYQ Collection) under authentic TCS iON CBT conditions with in-depth conceptual explanations.",
      
      // Meta Metrics Grid
      meta_subject: "Subject Knowledge",
      meta_subject_val: "100 Qs / 100 Marks",
      meta_pedagogy: "Art of Teaching",
      meta_pedagogy_val: "30 Qs / 30 Marks",
      meta_skills: "General Skills",
      meta_skills_val: "20 Qs / 20 Marks",
      meta_duration: "Total Duration",
      meta_duration_val: "150 Minutes",
      meta_cutoff: "Qualifying Cutoff",
      meta_cutoff_val: "Gen 50% (75 Marks)",

      // Filter Tabs
      filter_all: "All Mock Tests",
      filter_official: "Official PYQ Papers",
      filter_predicted: "2026 Predicted Mock Sets",
      filter_drill: "Sectional & Topic Drills",

      // Test Cards
      start_cbt: "⚡ Start CBT Mock",
      practice_mode: "📖 Practice Mode",
      questions_label: "Questions",
      marks_label: "Total Marks",
      duration_label: "Duration",
      mins: "Mins",
      qs: "Qs",

      // Test History Section
      my_history: "My Test History & Solutions Review",
      history_desc: "All completed mock attempts are stored directly in your browser. Review detailed solutions and scorecards anytime!",
      clear_history: "🗑 Clear History",
      table_paper: "Mock Paper",
      table_date: "Date & Time",
      table_score: "Score & %",
      table_accuracy: "Accuracy",
      table_status: "Status",
      table_action: "Action",
      review_solutions: "📖 Review Solutions",
      no_history: "No test records found yet. Start any mock test above to see your scorecard and performance analytics here!",

      // In-Exam Header
      cbt_live: "CBT LIVE",
      pause: "Pause",
      resume: "Resume",
      paper_btn: "Paper",
      concept_btn: "💡 Concept",
      exam_lang_btn: "Switch to हिन्दी",
      view_question_lbl: "View Question:",
      marks_pos: "Marks: +1.0 | Negative: 0.0",

      // Question View
      question_prefix: "Question",
      of_label: "of",
      immediate_exp_title: "📖 Immediate Concept Explanation:",

      // In-Exam Bottom Action Bar
      btn_prev: "« Prev",
      btn_next: "Next »",
      btn_clear: "Clear",
      btn_mark_review: "Mark Review",
      btn_save_next: "Save & Next »",
      btn_submit: "Submit Exam",
      mobile_palette_btn: "📋 Palette",

      // Candidate Card & Palette
      candidate_lbl: "Candidate: Aspirant (Class 11-12)",
      subject_lbl: "Subject: Computer Science (226)",
      palette_heading: "Question Palette",
      close_btn: "✕ Close",

      // Palette Legends
      legend_answered: "Answered",
      legend_not_answered: "Not Answered",
      legend_not_visited: "Not Visited",
      legend_marked: "Marked for Review",
      legend_ans_marked: "Answered & Marked for Review",

      // Submit Confirmation Modal
      sub_modal_title: "Submit Examination Session",
      sub_modal_answered: "Answered",
      sub_modal_unanswered: "Unanswered",
      sub_modal_marked: "Marked for Review",
      sub_modal_prompt: "Are you sure you want to end and submit this exam session?",
      sub_modal_cancel: "Continue Exam",
      sub_modal_confirm: "Yes, Submit Exam",

      // Mode Selection Modal
      mode_modal_title: "Choose Examination Mode",
      mode_cbt_title: "Timed CBT Exam Mode",
      mode_cbt_desc: "Strict 150-minute countdown timer, official section breakdown, authentic TCS iON interface. Immediate score and performance analytics upon submission.",
      mode_practice_title: "Untimed Practice & Review Mode",
      mode_practice_desc: "No timer pressure. Immediate step-by-step conceptual explanations displayed right after each question.",
      mode_cancel: "Cancel",
      mode_proceed: "Proceed to Exam",

      // Pause Modal
      pause_modal_title: "Examination Paused",
      pause_modal_desc: "Your test countdown timer is frozen and answering is locked. Click the button below to resume right where you left off.",
      pause_modal_resume: "▶ Resume Exam",

      // Question Paper Modal
      qp_modal_title: "Question Paper Full Preview",

      // Quick Exam Directory & SEO
      seo_dir_title: "🔍 Quick Exam Directory & Popular Search Queries",
      seo_dir_desc: "Find practice sets, previous year papers, and syllabus topics easily:",

      // Developer Signature Card
      dev_role_label: "System Architecture & Engineering",
      dev_spec_badge: "BSEB Code 226 Compliance",
      dev_role_title: "Platform Architect & EdTech Systems Developer",
      dev_statement: "Engineered as an independent, non-commercial examination simulator to provide Bihar STET Paper II (Computer Science) and BPSC TRE aspirants with an authentic TCS iON test environment. Designed with strict bilingual parity, verified pedagogical solutions, official qualifying cutoffs, and client-side zero-latency execution.",
      dev_policies_btn: "Platform Policies & Transparency",

      // Legal Bar
      link_privacy: "Privacy Policy",
      link_terms: "Terms of Service",
      link_disclaimer: "Disclaimer",
      link_sitemap: "Sitemap (XML)",
      link_robots: "Robots.txt"
    },

    hi: {
      // Navbar & Branding
      portal_title: "बिहार STET पेपर II (कंप्यूटर साइंस)",
      portal_tagline: "आधिकारिक CBT मॉक परीक्षा एवं तैयारी पोर्टल • उच्च माध्यमिक (कक्षा 11-12, कोड 226)",
      lang_name: "हिन्दी",
      toggle_to_lang: "English",

      // Hero Section
      mission_pill: "🔥 मिशन BSTET 2026",
      motivational_quote: '"मेहनत इतनी खामोशी से करो कि तुम्हारी सफलता शोर मचा दे!"',
      hero_title: "BSTET पेपर II (कंप्यूटर साइंस) CBT पोर्टल",
      hero_subtitle: "उच्च माध्यमिक शिक्षक भर्ती (कक्षा 11-12, विषय कोड 226) हेतु आधिकारिक परीक्षा सिमुलेटर। 35 संपूर्ण मॉक पेपर्स (3,650+ प्रश्न जिसमें सचिन एकेडमी शिक्षण कला संग्रह शामिल है) के साथ वास्तविक TCS iON CBT इंटरफ़ेस पर विस्तृत व्याख्या सहित अभ्यास करें।",

      // Meta Metrics Grid
      meta_subject: "विषय ज्ञान (कंप्यूटर साइंस)",
      meta_subject_val: "100 प्रश्न / 100 अंक",
      meta_pedagogy: "शिक्षण कला (Pedagogy)",
      meta_pedagogy_val: "30 प्रश्न / 30 अंक",
      meta_skills: "सामान्य कौशल व तर्कशक्ति",
      meta_skills_val: "20 प्रश्न / 20 अंक",
      meta_duration: "कुल समय",
      meta_duration_val: "150 मिनट (2.5 घंटे)",
      meta_cutoff: "उत्तीर्ण कट-ऑफ",
      meta_cutoff_val: "सामान्य 50% (75 अंक)",

      // Filter Tabs
      filter_all: "सभी मॉक टेस्ट",
      filter_official: "आधिकारिक पिछले वर्ष के प्रश्न",
      filter_predicted: "2026 संभावित मॉक सेट्स",
      filter_drill: "विषयवार अभ्यास ड्रिल्स",

      // Test Cards
      start_cbt: "⚡ CBT टेस्ट शुरू करें",
      practice_mode: "📖 अभ्यास मोड",
      questions_label: "प्रश्न",
      marks_label: "कुल अंक",
      duration_label: "अवधि",
      mins: "मिनट",
      qs: "प्रश्न",

      // Test History Section
      my_history: "मेरा टेस्ट इतिहास एवं समाधान समीक्षा",
      history_desc: "आपके सभी पूर्ण किए गए टेस्ट आपके ब्राउज़र में सुरक्षित हैं। अपनी गलतियों का विश्लेषण करने और विस्तृत समाधान पढ़ने के लिए 'समाधान देखें' पर क्लिक करें!",
      clear_history: "🗑 इतिहास साफ़ करें",
      table_paper: "मॉक पेपर",
      table_date: "दिनांक एवं समय",
      table_score: "प्राप्तांक एवं %",
      table_accuracy: "सटीकता (Accuracy)",
      table_status: "परिणाम",
      table_action: "कार्य",
      review_solutions: "📖 समाधान देखें",
      no_history: "अभी तक कोई टेस्ट रिकॉर्ड नहीं है। अपना स्कोरकार्ड देखने के लिए ऊपर दिए गए किसी भी मॉक टेस्ट को शुरू करें!",

      // In-Exam Header
      cbt_live: "CBT लाइव",
      pause: "विराम",
      resume: "पुनः आरंभ",
      paper_btn: "प्रश्न पत्र",
      concept_btn: "💡 सिद्धांत",
      exam_lang_btn: "Switch to English",
      view_question_lbl: "प्रश्न देखें:",
      marks_pos: "अंक: +1.0 | ऋणात्मक: 0.0",

      // Question View
      question_prefix: "प्रश्न",
      of_label: "/",
      immediate_exp_title: "📖 तत्काल वैचारिक समाधान:",

      // In-Exam Bottom Action Bar
      btn_prev: "« पिछला",
      btn_next: "अगला »",
      btn_clear: "उत्तर साफ़ करें",
      btn_mark_review: "समीक्षा हेतु चिह्नित",
      btn_save_next: "सहेजें और अगला »",
      btn_submit: "परीक्षा जमा करें",
      mobile_palette_btn: "📋 पैलेट",

      // Candidate Card & Palette
      candidate_lbl: "परीक्षार्थी: अभ्यर्थी (कक्षा 11-12)",
      subject_lbl: "विषय: कंप्यूटर साइंस (226)",
      palette_heading: "प्रश्न पैलेट",
      close_btn: "✕ बंद करें",

      // Palette Legends
      legend_answered: "उत्तर दिया गया",
      legend_not_answered: "उत्तर नहीं दिया",
      legend_not_visited: "देखा नहीं गया",
      legend_marked: "समीक्षा हेतु चिह्नित",
      legend_ans_marked: "उत्तरित एवं समीक्षा हेतु चिह्नित",

      // Submit Confirmation Modal
      sub_modal_title: "परीक्षा सत्र जमा करें",
      sub_modal_answered: "उत्तर दिया गया",
      sub_modal_unanswered: "उत्तर नहीं दिया",
      sub_modal_marked: "समीक्षा हेतु चिह्नित",
      sub_modal_prompt: "क्या आप वाकई इस परीक्षा सत्र को समाप्त और जमा करना चाहते हैं?",
      sub_modal_cancel: "परीक्षा जारी रखें",
      sub_modal_confirm: "हाँ, परीक्षा जमा करें",

      // Mode Selection Modal
      mode_modal_title: "परीक्षा मोड चुनें",
      mode_cbt_title: "समयबद्ध CBT परीक्षा मोड",
      mode_cbt_desc: "सख्त 150 मिनट का उलटी गिनती टाइमर, आधिकारिक अनुभाग विभाजन, वास्तविक TCS iON इंटरफ़ेस। सबमिट करने पर तत्काल स्कोर और प्रदर्शन विश्लेषण।",
      mode_practice_title: "अनटैम्ड अभ्यास एवं समीक्षा मोड",
      mode_practice_desc: "कोई टाइमर दबाव नहीं। प्रत्येक प्रश्न के ठीक बाद तत्काल चरण-दर-चरण वैचारिक व्याख्या प्रदर्शित होती है।",
      mode_cancel: "रद्द करें",
      mode_proceed: "परीक्षा शुरू करें",

      // Pause Modal
      pause_modal_title: "परीक्षा रोकी गई",
      pause_modal_desc: "आपका परीक्षा टाइमर रुका हुआ है। जहाँ आपने छोड़ा था वहीं से फिर से शुरू करने के लिए नीचे दिए गए बटन पर क्लिक करें।",
      pause_modal_resume: "▶ परीक्षा पुनः आरंभ करें",

      // Question Paper Modal
      qp_modal_title: "संपूर्ण प्रश्न पत्र पूर्वावलोकन",

      // Quick Exam Directory & SEO
      seo_dir_title: "🔍 त्वरित परीक्षा निर्देशिका एवं लोकप्रिय खोज प्रश्न",
      seo_dir_desc: "अभ्यास सेट, पिछले वर्ष के प्रश्न पत्र और पाठ्यक्रम विषय आसानी से खोजें:",

      // Developer Signature Card
      dev_role_label: "सिस्टम आर्किटेक्चर एवं इंजीनियरिंग",
      dev_spec_badge: "BSEB कोड 226 मानक",
      dev_role_title: "प्लेटफॉर्म आर्किटेक्ट एवं एडटेक सिस्टम डेवलपर",
      dev_statement: "बिहार STET पेपर II (कंप्यूटर साइंस कोड 226) और BPSC TRE अभ्यर्थियों को वास्तविक TCS iON परीक्षा माहौल प्रदान करने हेतु इस गैर-व्यावसायिक सिमुलेटर का निर्माण किया गया है। यह पूर्ण द्विभाषी समानता, सत्यापित समाधान और शून्य-विलंबता के साथ कार्य करता है।",
      dev_policies_btn: "प्लेटफॉर्म नीतियां एवं पारदर्शिता",

      // Legal Bar
      link_privacy: "गोपनीयता नीति",
      link_terms: "सेवा की शर्तें",
      link_disclaimer: "अस्वीकरण",
      link_sitemap: "साइटमैप (XML)",
      link_robots: "Robots.txt"
    }
  },

  topicMap: {
    "Digital Logic": "डिजिटल लॉजिक (Digital Electronics)",
    "Computer Organization and Architecture": "कंप्यूटर संगठन एवं आर्किटेक्चर (COA)",
    "Programming and Data Structures": "प्रोग्रामिंग एवं डेटा संरचनाएं (Data Structures)",
    "Algorithms": "एल्गोरिदम (Design & Analysis of Algorithms)",
    "Theory of Computation": "गणना का सिद्धांत (Automata / TOC)",
    "Compiler Design": "कंपाइलर डिज़ाइन (Compiler Design)",
    "Operating System": "ऑपरेटिंग सिस्टम (Operating Systems)",
    "Databases": "डेटाबेस मैनेजमेंट सिस्टम (DBMS & SQL)",
    "Computer Networks": "कंप्यूटर नेटवर्क्स (Computer Networks)",
    "Software Engineering": "सॉफ्टवेयर इंजीनियरिंग (Software Engineering)",
    "Object-Oriented Programming": "ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग (OOP / C++ / Python)",
    "Web-Based Application Development": "वेब आधारित अनुप्रयोग विकास (Web Tech)",
    "Internet of Things": "इंटरनेट ऑफ थिंग्स (IoT)",
    "Artificial Intelligence": "आर्टिफिशियल इंटेलिजेंस (AI & ML)",
    "Fundamental of E-Commerce": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
    "Multimedia": "मल्टीमीडिया तकनीक (Multimedia)",
    "Art of Teaching": "शिक्षण कला (Pedagogy & Teaching Skills)",
    "General Knowledge": "सामान्य ज्ञान (General Knowledge)",
    "Environmental Science": "पर्यावरण विज्ञान (Environmental Science)",
    "Mathematical Aptitude": "गणितीय अभिरुचि (Mathematical Aptitude)",
    "Logical Reasoning": "तार्किक विचार (Logical Reasoning)",
    "Other Skills": "अन्य सामान्य कौशल (General Skills)",
    "Computer Science": "कंप्यूटर साइंस (Computer Science)"
  },

  sectionMap: {
    "Computer Science": "कंप्यूटर साइंस (100 अंक)",
    "Art of Teaching": "शिक्षण कला (30 अंक)",
    "Other Skills": "सामान्य कौशल (20 अंक)"
  },

  t: function(key) {
    const lang = this.currentLang || 'en';
    const dict = this.translations[lang] || this.translations['en'];
    return dict[key] || this.translations['en'][key] || key;
  },

  translateTopic: function(topic) {
    if (!topic) return "कंप्यूटर साइंस";
    if (this.currentLang === 'hi') {
      return this.topicMap[topic] || topic;
    }
    return topic;
  },

  translateSection: function(secName) {
    if (!secName) return "Section";
    if (this.currentLang === 'hi') {
      return this.sectionMap[secName] || secName;
    }
    return secName;
  },

  translatePaperTitle: function(titleOrPaper, paperId) {
    if (!titleOrPaper) return "";
    let title = "";
    let id = paperId || "";
    if (typeof titleOrPaper === "object") {
      title = titleOrPaper.title || "";
      id = titleOrPaper.id || id;
    } else {
      title = String(titleOrPaper);
    }

    if (this.currentLang !== 'hi') return title;

    // Direct mapping by paper ID (fast, infallible)
    const idMap = {
      "official_shift1": "BSTET आधिकारिक 2025 - शिफ्ट 1 (उत्तर कुंजी सहित)",
      "official_shift2": "BSTET आधिकारिक 2025 - शिफ्ट 2 (उत्तर कुंजी सहित)",
      "official_shift3": "BSTET आधिकारिक 2025 - शिफ्ट 3 (उत्तर कुंजी सहित)",
      "official_shift4": "BSTET आधिकारिक 2025 - शिफ्ट 4 (उत्तर कुंजी सहित)",
      "official_2023": "BSTET आधिकारिक 2023 - री-एग्जाम पेपर (150 प्रश्न)",
      "sachin_shift_set1": "BSTET शिक्षण कला 2023 - शिफ्ट 1 (सेट 01)",
      "sachin_shift_set2": "BSTET शिक्षण कला 2023 - शिफ्ट 1 (सेट 02)",
      "sachin_shift_set3": "BSTET शिक्षण कला 2023 - शिफ्ट 2 (सेट 03)",
      "sachin_shift_set4": "BSTET शिक्षण कला 2023 - शिफ्ट 1 (सेट 04)",
      "sachin_shift_set5": "BSTET शिक्षण कला 2023 - शिफ्ट 2 (सेट 05)",
      "sachin_pedagogy_master": "सचिन सर 100Q शिक्षण कला मास्टर PYQ ड्रिल",
      "sachin_curated_recent_50": "शिक्षण कला हालिया परीक्षा 50Q स्प्रिंट",
      "drill_dbms_sql_50": "DBMS एवं SQL गहन अभ्यास ड्रिल (50 प्रश्न)",
      "drill_os_networks_master_50": "OS एवं कंप्यूटर नेटवर्क्स गहन अभ्यास ड्रिल (50 प्रश्न)",
      "drill_pedagogy_nep_50": "शिक्षण कला एवं NEP 2020 उच्च-प्राथमिकता ड्रिल (50 प्रश्न)",
      "drill_cs_100": "कंप्यूटर साइंस 100Q विषयवार मास्टर ड्रिल",
      "drill_pedagogy_50": "शिक्षण कला 50Q पेडागॉजी ड्रिल",
      "drill_general_50": "सामान्य ज्ञान, पर्यावरण व रीजनिंग 50Q ड्रिल",
      "drill_dsa_sql_50": "DSA, एल्गोरिदम व SQL स्पेशलिस्ट 50Q ड्रिल",
      "drill_os_networks_50": "ऑपरेटिंग सिस्टम व नेटवर्किंग 50Q ड्रिल",
      "drill_modern_tech_50": "वेब टेक, पायथन, IoT व AI 50Q ड्रिल"
    };

    if (id && idMap[id]) return idMap[id];

    // Pattern matching by title
    const t = title;
    if (t.includes("Official 2025 - Shift 1")) return "BSTET आधिकारिक 2025 - शिफ्ट 1 (उत्तर कुंजी सहित)";
    if (t.includes("Official 2025 - Shift 2")) return "BSTET आधिकारिक 2025 - शिफ्ट 2 (उत्तर कुंजी सहित)";
    if (t.includes("Official 2025 - Shift 3")) return "BSTET आधिकारिक 2025 - शिफ्ट 3 (उत्तर कुंजी सहित)";
    if (t.includes("Official 2025 - Shift 4")) return "BSTET आधिकारिक 2025 - शिफ्ट 4 (उत्तर कुंजी सहित)";
    if (t.includes("Official 2023")) return "BSTET आधिकारिक 2023 - री-एग्जाम पेपर";
    if (t.includes("Shift 1 (Set 01)")) return "BSTET शिक्षण कला 2023 - शिफ्ट 1 (सेट 01)";
    if (t.includes("Shift 1 (Set 02)")) return "BSTET शिक्षण कला 2023 - शिफ्ट 1 (सेट 02)";
    if (t.includes("Shift 2 (Set 03)")) return "BSTET शिक्षण कला 2023 - शिफ्ट 2 (सेट 03)";
    if (t.includes("Shift 1 (Set 04)")) return "BSTET शिक्षण कला 2023 - शिफ्ट 1 (सेट 04)";
    if (t.includes("Shift 2 (Set 05)")) return "BSTET शिक्षण कला 2023 - शिफ्ट 2 (सेट 05)";
    if (t.includes("100Q") && (t.includes("Pedagogy") || t.includes("Teaching"))) return "सचिन सर 100Q शिक्षण कला मास्टर PYQ ड्रिल";
    if (t.includes("Recent Exams") || t.includes("50Q Sprint")) return "शिक्षण कला हालिया परीक्षा 50Q स्प्रिंट";
    if (t.includes("DBMS & SQL")) return "DBMS एवं SQL गहन अभ्यास ड्रिल (50 प्रश्न)";
    if (t.includes("OS & Computer Networks") || t.includes("Networks Mastery")) return "OS एवं कंप्यूटर नेटवर्क्स गहन अभ्यास ड्रिल (50 प्रश्न)";
    if (t.includes("Art of Teaching & NEP 2020")) return "शिक्षण कला एवं NEP 2020 उच्च-प्राथमिकता ड्रिल (50 प्रश्न)";
    if (t.includes("100Q Subject Mastery")) return "कंप्यूटर साइंस 100Q विषयवार मास्टर ड्रिल";
    if (t.includes("50Q Pedagogy Drill")) return "शिक्षण कला 50Q पेडागॉजी ड्रिल";
    if (t.includes("50Q General Skills")) return "सामान्य ज्ञान, पर्यावरण व रीजनिंग 50Q ड्रिल";
    if (t.includes("DSA, Algorithms")) return "DSA, एल्गोरिदम व SQL स्पेशलिस्ट 50Q ड्रिल";
    if (t.includes("Operating Systems & Networking")) return "ऑपरेटिंग सिस्टम व नेटवर्किंग 50Q ड्रिल";
    if (t.includes("Web Development, Python")) return "वेब टेक, पायथन, IoT व AI 50Q ड्रिल";

    const m = t.match(/Predicted Full Mock (\d+)/i) || t.match(/Predicted Mock Paper - Set (\d+)/i) || t.match(/Predicted Mock (\d+)/i) || t.match(/Set (\d+)/i);
    if (m) {
      return `2026 संभावित फुल मॉक टेस्ट (सेट ${m[1]})`;
    }
    return t;
  },

  translatePaperSubtitle: function(subOrPaper, paperId) {
    if (!subOrPaper) return "";
    let sub = "";
    let id = paperId || "";
    if (typeof subOrPaper === "object") {
      sub = subOrPaper.subtitle || "";
      id = subOrPaper.id || id;
    } else {
      sub = String(subOrPaper);
    }

    if (this.currentLang !== 'hi') return sub;

    // Direct mapping by ID
    const subMap = {
      "official_shift1": "परीक्षा तिथि: 03 नवंबर 2025 (शिफ्ट 1) | आधिकारिक प्रतिक्रिया एवं सत्यापित उत्तर कुंजी",
      "official_shift2": "परीक्षा तिथि: 03 नवंबर 2025 (शिफ्ट 2) | आधिकारिक प्रतिक्रिया एवं सत्यापित उत्तर कुंजी",
      "official_shift3": "परीक्षा तिथि: 04 नवंबर 2025 (शिफ्ट 2) | आधिकारिक प्रतिक्रिया एवं सत्यापित उत्तर कुंजी",
      "official_shift4": "परीक्षा तिथि: 07 नवंबर 2025 (शिफ्ट 1) | आधिकारिक प्रतिक्रिया एवं सत्यापित उत्तर कुंजी",
      "official_2023": "BSEB 2023 आधिकारिक परीक्षा | 150 द्विभाषी प्रश्न आधिकारिक उत्तर कुंजी सहित",
      "sachin_shift_set1": "आधिकारिक 18 सितंबर 2023 शिफ्ट I पेडागॉजी पेपर (30 प्रश्न) • सचिन एकेडमी द्वारा सत्यापित",
      "sachin_shift_set2": "आधिकारिक 15 सितंबर 2023 शिफ्ट I पेडागॉजी पेपर (30 प्रश्न) • सचिन एकेडमी द्वारा सत्यापित",
      "sachin_shift_set3": "आधिकारिक 15 सितंबर 2023 शिफ्ट II पेडागॉजी पेपर (30 प्रश्न) • सचिन एकेडमी द्वारा सत्यापित",
      "sachin_shift_set4": "आधिकारिक 14 सितंबर 2023 शिफ्ट I पेडागॉजी पेपर (30 प्रश्न) • सचिन एकेडमी द्वारा सत्यापित",
      "sachin_shift_set5": "आधिकारिक 18 सितंबर 2023 शिफ्ट II पेडागॉजी पेपर (30 प्रश्न) • सचिन एकेडमी द्वारा सत्यापित",
      "sachin_pedagogy_master": "सचिन सर (Sachin Academy) द्वारा चयनित बिहार STET 2020-2024 के शीर्ष 100 प्रश्न",
      "sachin_recent_50q": "हालिया बिहार STET परीक्षा (कक्षा 11-12, कोड 226) से चयनित शिफ्ट प्रश्न",
      "drill_dbms_sql_50": "नॉर्मलाइजेशन (1NF-BCNF), रिलेशनल बीजगणित, SQL क्वेरी, ACID एवं कॉनकरेंसी",
      "drill_os_networks_master_50": "प्रोसेस सिंक, डेडलॉक्स, पेजिंग, OSI लेयर्स, TCP/IP, CIDR सबनेटिंग व सुरक्षा",
      "drill_pedagogy_nep_50": "ब्लूम वर्गीकरण, रचनावाद, पियाजे, वायगोत्स्की, CCE एवं NEP 2020 रूपरेखा"
    };

    if (id && subMap[id]) return subMap[id];

    if (sub.includes("Held On: 03 Nov 2025 (Shift 1)")) return "परीक्षा तिथि: 03 नवंबर 2025 (शिफ्ट 1) | आधिकारिक प्रतिक्रिया एवं सत्यापित उत्तर कुंजी";
    if (sub.includes("Held On: 03 Nov 2025 (Shift 2)")) return "परीक्षा तिथि: 03 नवंबर 2025 (शिफ्ट 2) | आधिकारिक प्रतिक्रिया एवं सत्यापित उत्तर कुंजी";
    if (sub.includes("Held On: 04 Nov 2025")) return "परीक्षा तिथि: 04 नवंबर 2025 (शिफ्ट 2) | आधिकारिक प्रतिक्रिया एवं सत्यापित उत्तर कुंजी";
    if (sub.includes("Held On: 07 Nov 2025")) return "परीक्षा तिथि: 07 नवंबर 2025 (शिफ्ट 1) | आधिकारिक प्रतिक्रिया एवं सत्यापित उत्तर कुंजी";
    if (sub.includes("Held On: 12 Sep 2023") || sub.includes("Held On: 2023")) return "BSEB 2023 आधिकारिक परीक्षा | 150 द्विभाषी प्रश्न विस्तृत समाधान सहित";
    if (sub.includes("Sachin Choudhary") || sub.includes("Sachin Academy")) return "सचिन सर (Sachin Academy) द्वारा चयनित बिहार STET 2020-2024 के शीर्ष 100 प्रश्न";
    if (sub.includes("Recent Bihar STET Exams")) return "हालिया बिहार STET परीक्षा (कक्षा 11-12, कोड 226) से चयनित शिफ्ट प्रश्न";
    if (sub.includes("Normalization (1NF-BCNF)")) return "नॉर्मलाइजेशन (1NF-BCNF), रिलेशनल बीजगणित, SQL क्वेरी, ACID एवं कॉनकरेंसी";
    if (sub.includes("Process Sync, Deadlocks")) return "प्रोसेस सिंक, डेडलॉक्स, पेजिंग, OSI लेयर्स, TCP/IP, CIDR सबनेटिंग व सुरक्षा";
    if (sub.includes("Bloom's Taxonomy, Constructivism")) return "ब्लूम वर्गीकरण, रचनावाद, पियाजे, वायगोत्स्की, CCE एवं NEP 2020 रूपरेखा";

    if (sub.includes("100 CS") || sub.includes("30 Art of Teaching") || sub.includes("Full Syllabus Simulation")) {
      return "100 CS + 30 शिक्षण कला + 20 सामान्य कौशल | आधिकारिक TCS iON परीक्षा पैटर्न";
    }

    return sub;
  },

  translateBadge: function(badge) {
    if (!badge) return "";
    if (this.currentLang !== 'hi') return badge;
    const badgeMap = {
      "Official Key": "आधिकारिक कुंजी",
      "2026 Predicted": "2026 संभावित",
      "Subject Drill": "विषय ड्रिल",
      "Pedagogy Drill": "शिक्षण कला ड्रिल",
      "General Skills": "सामान्य दक्षता",
      "DSA & DBMS": "DSA एवं DBMS",
      "OS & Networks": "OS एवं नेटवर्क्स",
      "Modern Tech": "आधुनिक तकनीक",
      "Sachin Academy PYQs": "सचिन एकेडमी PYQ",
      "Recent Shift PYQ": "हालिया शिफ्ट PYQ",
      "DBMS Specialist": "DBMS स्पेशलिस्ट",
      "Teaching & NEP": "शिक्षण एवं NEP 2020"
    };
    return badgeMap[badge] || badge;
  },

  translateDifficulty: function(diff) {
    if (!diff) return "";
    if (this.currentLang !== 'hi') return diff;
    const diffMap = {
      "Real Exam Standard": "वास्तविक परीक्षा स्तर",
      "Official Shift PYQ": "आधिकारिक शिफ्ट PYQ",
      "High Probability": "उच्च संभावना प्रश्न",
      "Bilingual & Rank Booster": "रैंक बूस्टर स्तर",
      "Grand Simulation": "ग्रैंड सिमुलेशन स्तर",
      "Focused Mastery": "गहन विषयवार अभ्यास",
      "Pedagogy Focus": "शिक्षण कला फोकस",
      "General Focus": "सामान्य कौशल फोकस",
      "Core Mastery": "कोर विषय प्रवीणता",
      "Core Systems": "सिस्टम्स कोर",
      "Emerging Tech": "नवीनतम तकनीक",
      "Pedagogy Mastery": "शिक्षण कला विशेषज्ञता",
      "Core Database": "डेटाबेस कोर",
      "Systems Mastery": "सिस्टम्स मास्टरी",
      "High-Yield Pedagogy": "उच्च-प्राथमिकता पेडागॉजी"
    };
    return diffMap[diff] || diff;
  },

  setLang: function(lang) {
    if (lang !== 'en' && lang !== 'hi') lang = 'en';
    this.currentLang = lang;
    localStorage.setItem('BSTET_LANG', lang);
    document.documentElement.setAttribute('lang', lang);
    return lang;
  },

  toggleLang: function() {
    const next = this.currentLang === 'en' ? 'hi' : 'en';
    return this.setLang(next);
  }
};
