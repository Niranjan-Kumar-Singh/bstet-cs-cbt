/**
 * Bihar STET Paper II CBT Portal - Internationalization (i18n) & Bilingual Engine
 * Seamless English & Hindi (हिन्दी) support for UI, questions, options, topics, and analysis.
 */

window.BSTET_I18N = {
  currentLang: localStorage.getItem('BSTET_LANG') || 'en',

  translations: {
    en: {
      portal_title: "Bihar STET Paper II (Computer Science)",
      portal_tagline: "Official CBT Mock Exam & Readiness Portal • Class 11-12 (Code 226)",
      mission_pill: "🔥 MISSION BSTET 2026",
      motivational_quote: '"Work hard in silence, let your success make the noise!"',
      hero_title: "BSTET Paper II (Computer Science) CBT Portal",
      hero_subtitle: "Official Examination Simulator for Higher Secondary Teachers (Class 11-12 Code 226). Practice with 23 comprehensive mock papers (3,000+ questions) under authentic TCS iON CBT conditions with in-depth conceptual explanations.",
      
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

      filter_all: "All Mock Tests (23)",
      filter_official: "Official PYQ Papers (5)",
      filter_predicted: "2026 Predicted Mock Sets (12)",
      filter_drill: "Sectional & Topic Drills (6)",

      start_cbt: "⚡ Start CBT Mock",
      practice_mode: "📖 Practice Mode",
      questions_label: "Questions",
      marks_label: "Total Marks",
      duration_label: "Duration",
      mins: "Mins",
      qs: "Qs",

      my_history: "My Test History & Solutions Review",
      history_desc: "All your completed tests are stored securely in your browser. Click 'Review Solutions' on any past attempt to analyze your mistakes and study detailed explanations anytime!",
      clear_history: "🗑 Clear History",
      table_paper: "Mock Paper",
      table_date: "Date & Time",
      table_score: "Score & %",
      table_accuracy: "Accuracy",
      table_status: "Status",
      table_action: "Action",
      review_solutions: "📖 Review Solutions",
      no_history: "No test attempts recorded yet. Launch a mock test above to see your analytics!",

      cbt_live: "CBT LIVE",
      pause: "Pause",
      resume: "Resume",
      paper_btn: "Paper",
      concept_btn: "💡 Concept",
      lang_btn: "🌐 Language",
      toggle_lang: "हिन्दी",

      question_prefix: "Question",
      of_label: "of",
      marks_pos: "Marks: +1.0 | Negative: 0.0",

      btn_prev: "« Prev",
      btn_next: "Next »",
      btn_clear: "Clear",
      btn_mark_review: "Mark Review",
      btn_save_next: "Save & Next »",
      btn_submit: "Submit Exam",
      btn_palette: "📋 Palette",

      legend_answered: "Answered",
      legend_not_answered: "Not Answered",
      legend_not_visited: "Not Visited",
      legend_marked: "Marked for Review",
      legend_ans_marked: "Answered & Marked for Review",

      modal_mode_title: "Select Exam Mode",
      modal_cbt_title: "⚡ Real CBT Exam Simulation Mode (Recommended)",
      modal_cbt_desc: "Strict 150-minute countdown timer, official question palette, hidden answers until final submission. Simulates authentic Bihar STET exam pressure.",
      modal_prac_title: "📖 Practice & Study Mode",
      modal_prac_desc: "No timer pressure. Immediate 'Show Concept Explanation' button enabled to verify official answers and study theoretical explanations on the spot.",
      modal_cancel: "Cancel",
      modal_start: "Start Test Now »",

      submit_confirm_title: "Confirm Final Exam Submission",
      submit_confirm_desc: "Please review your attempt summary below before final submission. Once submitted, you cannot change your answers.",
      submit_total: "Total Questions",
      submit_answered: "Answered",
      submit_unanswered: "Unanswered",
      submit_marked: "Marked for Review",
      submit_prompt: "Are you sure you want to end and submit this exam session?",
      submit_continue: "Continue Exam",
      submit_yes: "Yes, Submit Exam",

      res_title: "Bihar STET Exam Result & Performance Analysis",
      res_subtitle: "Class 11-12 Computer Science (Code 226) • Comprehensive Diagnostic Scorecard",
      res_qualified: "🎉 QUALIFIED",
      res_not_qualified: "⚠️ NOT QUALIFIED",
      res_back_lobby: "← Back to Exam Portal",
      res_retake: "🔄 Retake This Test",
      res_print: "🖨️ Print / Save PDF Scorecard",
      res_share: "📋 Share Summary",

      stat_percentage: "Percentage",
      stat_accuracy: "Accuracy Rate",
      stat_attempted: "Attempted",
      stat_speed: "Avg Pace / Question",
      stat_percentile: "Est. Percentile",

      sec_breakdown_title: "Sectional Performance Analysis",
      topic_radar_title: "Syllabus Diagnostic & Topic Strength Matrix",
      topic_strong: "🟢 Strengths (≥ 75%)",
      topic_moderate: "🟡 Moderate (50% - 74%)",
      topic_weak: "🔴 Needs Revision (< 50%)",

      sol_review_title: "Comprehensive Question Review & Conceptual Solutions",
      sol_review_subtitle: "Review each question, compare your choice with the verified official answer key, and study the conceptual theory behind each topic.",
      sol_filter_all: "All Questions",
      sol_filter_incorrect: "❌ Incorrect Only (Mistakes)",
      sol_filter_unattempted: "⚠️ Unattempted / Skipped",
      sol_filter_correct: "✅ Correct (Confirmed)",
      sol_correct_badge: "[Official Correct Answer]",
      sol_wrong_badge: "[Your Choice - Incorrect]",
      sol_theory_label: "📖 Conceptual Explanation & Theory:",
      time_spent_label: "Time Spent:"
    },

    hi: {
      portal_title: "बिहार STET पेपर II (कंप्यूटर साइंस)",
      portal_tagline: "आधिकारिक CBT मॉक परीक्षा एवं तैयारी पोर्टल • उच्च माध्यमिक (कक्षा 11-12, कोड 226)",
      mission_pill: "🔥 मिशन BSTET 2026",
      motivational_quote: '"मेहनत इतनी खामोशी से करो कि तुम्हारी सफलता शोर मचा दे!"',
      hero_title: "BSTET पेपर II (कंप्यूटर साइंस) CBT पोर्टल",
      hero_subtitle: "उच्च माध्यमिक शिक्षक भर्ती (कक्षा 11-12, विषय कोड 226) हेतु आधिकारिक परीक्षा सिमुलेटर। 23 संपूर्ण मॉक पेपर्स (3,000+ प्रश्न) के साथ वास्तविक TCS iON CBT इंटरफ़ेस पर विस्तृत व्याख्या सहित अभ्यास करें।",

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

      filter_all: "सभी मॉक टेस्ट (23)",
      filter_official: "आधिकारिक पिछले वर्ष के प्रश्न (5)",
      filter_predicted: "2026 संभावित मॉक सेट्स (12)",
      filter_drill: "विषयवार अभ्यास ड्रिल्स (6)",

      start_cbt: "⚡ CBT टेस्ट शुरू करें",
      practice_mode: "📖 अभ्यास मोड",
      questions_label: "प्रश्न",
      marks_label: "कुल अंक",
      duration_label: "अवधि",
      mins: "मिनट",
      qs: "प्रश्न",

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

      cbt_live: "CBT लाइव",
      pause: "विराम",
      resume: "पुनः आरंभ",
      paper_btn: "प्रश्न पत्र",
      concept_btn: "💡 सिद्धांत",
      lang_btn: "🌐 भाषा",
      toggle_lang: "English",

      question_prefix: "प्रश्न",
      of_label: "का",
      marks_pos: "अंक: +1.0 | ऋणात्मक: 0.0",

      btn_prev: "« पिछला",
      btn_next: "अगला »",
      btn_clear: "उत्तर साफ़ करें",
      btn_mark_review: "समीक्षा हेतु चिन्हित करें",
      btn_save_next: "सहेजें और अगला »",
      btn_submit: "परीक्षा जमा करें",
      btn_palette: "📋 प्रश्न पैलेट",

      legend_answered: "उत्तर दिया गया",
      legend_not_answered: "उत्तर नहीं दिया",
      legend_not_visited: "अभी तक नहीं देखा",
      legend_marked: "समीक्षा हेतु चिन्हित",
      legend_ans_marked: "उत्तर दिया व समीक्षा हेतु चिन्हित",

      modal_mode_title: "परीक्षा मोड चुनें",
      modal_cbt_title: "⚡ वास्तविक CBT परीक्षा सिमुलेशन (अनुशंसित)",
      modal_cbt_desc: "कड़ा 150 मिनट का उलटी गिनती टाइमर, आधिकारिक पैलेट, अंतिम सबमिशन तक उत्तर छिपे रहेंगे। वास्तविक बिहार STET परीक्षा जैसा माहौल।",
      modal_prac_title: "📖 अभ्यास एवं अध्ययन मोड",
      modal_prac_desc: "बिना समय का दबाव। प्रत्येक प्रश्न पर तुरंत 'सिद्धांत व्याख्या' देखने की सुविधा जिससे आप मौके पर ही आधिकारिक उत्तर और विस्तृत अवधारणा सीख सकें।",
      modal_cancel: "रद्द करें",
      modal_start: "अभी टेस्ट शुरू करें »",

      submit_confirm_title: "अंतिम परीक्षा सबमिशन की पुष्टि करें",
      submit_confirm_desc: "कृपया सबमिट करने से पहले अपने प्रयास का विवरण नीचे देखें। एक बार सबमिट करने के बाद आप उत्तर नहीं बदल सकते।",
      submit_total: "कुल प्रश्न",
      submit_answered: "उत्तर दिए",
      submit_unanswered: "अनुत्तरित",
      submit_marked: "समीक्षा हेतु चिन्हित",
      submit_prompt: "क्या आप वाकई इस परीक्षा सत्र को समाप्त और सबमिट करना चाहते हैं?",
      submit_continue: "परीक्षा जारी रखें",
      submit_yes: "हाँ, परीक्षा जमा करें",

      res_title: "बिहार STET परीक्षा परिणाम एवं विश्लेषण",
      res_subtitle: "कक्षा 11-12 कंप्यूटर साइंस (कोड 226) • विस्तृत प्रदर्शन स्कोरकार्ड",
      res_qualified: "🎉 उत्तीर्ण (QUALIFIED)",
      res_not_qualified: "⚠️ अनुत्तीर्ण (NOT QUALIFIED)",
      res_back_lobby: "← मुख्य पोर्टल पर वापस जाएं",
      res_retake: "🔄 यह टेस्ट दोबारा दें",
      res_print: "🖨️ स्कोरकार्ड प्रिंट / PDF सेव करें",
      res_share: "📋 सारांश कॉपी करें",

      stat_percentage: "प्रतिशत",
      stat_accuracy: "सटीकता दर",
      stat_attempted: "प्रयास किए",
      stat_speed: "औसत गति / प्रश्न",
      stat_percentile: "अनुमानित पर्सेंटाइल",

      sec_breakdown_title: "खंडवार प्रदर्शन विश्लेषण",
      topic_radar_title: "पाठ्यक्रम निदान एवं विषय शक्ति मैट्रिक्स",
      topic_strong: "🟢 मजबूत विषय (≥ 75%)",
      topic_moderate: "🟡 मध्यम विषय (50% - 74%)",
      topic_weak: "🔴 सुधार की आवश्यकता (< 50%)",

      sol_review_title: "विस्तृत प्रश्न समीक्षा एवं अवधारणात्मक समाधान",
      sol_review_subtitle: "प्रत्येक प्रश्न की समीक्षा करें, आधिकारिक उत्तर कुंजी से मिलान करें, और प्रत्येक विषय के गहन सिद्धांतों को समझें।",
      sol_filter_all: "सभी प्रश्न",
      sol_filter_incorrect: "❌ केवल गलत (गलतियों की समीक्षा)",
      sol_filter_unattempted: "⚠️ अप्रयुक्त / छोड़े गए प्रश्न",
      sol_filter_correct: "✅ सही उत्तर (सत्यापित)",
      sol_correct_badge: "[आधिकारिक सही उत्तर]",
      sol_wrong_badge: "[आपका विकल्प - गलत]",
      sol_theory_label: "📖 अवधारणात्मक व्याख्या एवं सिद्धांत:",
      time_spent_label: "लिया गया समय:"
    }
  },

  topicMap: {
    "Digital Logic": "डिजिटल लॉजिक एवं संख्या प्रणाली",
    "Computer Organization": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
    "Computer Organization and Architecture": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
    "Programming and Data Structures": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
    "Data Structures": "डेटा संरचना (Data Structures)",
    "Algorithms": "एल्गोरिदम एवं जटिलता (Algorithms)",
    "Operating System": "ऑपरेटिंग सिस्टम (OS)",
    "Database Management System": "डेटाबेस प्रबंधन प्रणाली (DBMS & SQL)",
    "Computer Network": "कंप्यूटर नेटवर्क (Computer Networks)",
    "Software Engineering": "सॉफ्टवेयर इंजीनियरिंग (Software Engg)",
    "Object Oriented Programming": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP / C++ / Python)",
    "Web-Based Application Development": "वेब आधारित अनुप्रयोग विकास (Web Tech)",
    "Theory of Computation": "गणना का सिद्धांत (Theory of Computation - Automata)",
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
