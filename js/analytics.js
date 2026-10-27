/**
 * Bihar STET CBT Analytics & Scorecard Calculator
 * Evaluates performance against official Bihar STET qualifying cutoffs,
 * calculates percentile projections, sectional pacing, and computes topic mastery diagnostics.
 */

class ExamAnalytics {
  static evaluate(paper, responses, timeSpentPerQ = {}) {
    let totalQuestions = paper.questions.length;
    let totalScore = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;
    let totalTimeSpent = 0;
    
    let sectionStats = {};
    paper.sections.forEach(s => {
      sectionStats[s.id] = {
        name: s.name,
        name_hi: window.BSTET_I18N ? window.BSTET_I18N.translateSection(s.name) : s.name,
        total: 0,
        score: 0,
        correct: 0,
        incorrect: 0,
        unattempted: 0,
        timeSpent: 0
      };
    });

    let topicStats = {};
    let questionReviews = [];

    paper.questions.forEach((q, idx) => {
      const qNum = idx + 1;
      const userChoice = responses[q.id];
      const isCorrect = userChoice === q.correctAnswer;
      const isAttempted = !!userChoice;
      const timeSpent = timeSpentPerQ[q.id] || 0;
      totalTimeSpent += timeSpent;

      // Find section based on linear 1-based question number
      const sec = (paper.sections && paper.sections.find(s => qNum >= s.startQ && qNum <= s.endQ)) || (paper.sections && paper.sections[0]) || { id: "cs", total: 0, score: 0, correct: 0, incorrect: 0, unattempted: 0, timeSpent: 0 };
      if (!sectionStats[sec.id]) {
        sectionStats[sec.id] = {
          name: sec.name || "General",
          name_hi: sec.name || "सामान्य",
          total: 0,
          score: 0,
          correct: 0,
          incorrect: 0,
          unattempted: 0,
          timeSpent: 0
        };
      }
      
      sectionStats[sec.id].total++;
      sectionStats[sec.id].timeSpent += timeSpent;

      // Track topic
      const topic = q.topic || "Computer Science";
      if (!topicStats[topic]) {
        topicStats[topic] = { 
          name: topic,
          name_hi: q.topic_hi || (window.BSTET_I18N ? window.BSTET_I18N.translateTopic(topic) : topic),
          total: 0, 
          correct: 0, 
          incorrect: 0, 
          unattempted: 0,
          timeSpent: 0
        };
      }
      topicStats[topic].total++;
      topicStats[topic].timeSpent += timeSpent;

      if (!isAttempted) {
        unattemptedCount++;
        sectionStats[sec.id].unattempted++;
        topicStats[topic].unattempted++;
      } else if (isCorrect) {
        correctCount++;
        totalScore += (q.marks || 1);
        sectionStats[sec.id].score += (q.marks || 1);
        sectionStats[sec.id].correct++;
        topicStats[topic].correct++;
      } else {
        incorrectCount++;
        // Bihar STET has no negative marking
        sectionStats[sec.id].incorrect++;
        topicStats[topic].incorrect++;
      }

      questionReviews.push({
        ...q,
        questionNumber: qNum,
        userResponse: userChoice || null,
        isCorrect: isCorrect,
        isAttempted: isAttempted,
        timeSpent: timeSpent
      });
    });

    const maxMarks = totalQuestions;
    const percentage = ((totalScore / maxMarks) * 100).toFixed(1);
    const attemptedCount = correctCount + incorrectCount;
    const accuracy = attemptedCount > 0 ? ((correctCount / attemptedCount) * 100).toFixed(1) : 0;

    // Time & Pacing calculation
    const avgTimePerAttempt = attemptedCount > 0 ? Math.round(totalTimeSpent / attemptedCount) : 0;
    let paceCategory = "Optimal";
    let paceDescription = "Pacing is balanced for 150-minute exam";
    if (avgTimePerAttempt < 40 && attemptedCount >= 10) {
      paceCategory = "Rapid";
      paceDescription = "High speed; ensure thorough reading of questions";
    } else if (avgTimePerAttempt > 75) {
      paceCategory = "Slow";
      paceDescription = "Pace needs acceleration to avoid missing final questions";
    }

    // Official Bihar STET Qualifying Cutoffs
    const cutoffs = {
      General: {
        category: "General (UR)",
        category_hi: "सामान्य (अनारक्षित)",
        minPct: 50.0,
        minMarks: 75.0,
        qualified: totalScore >= 75.0,
        margin: (totalScore - 75.0).toFixed(1)
      },
      BC: {
        category: "Backward Class (BC)",
        category_hi: "पिछड़ा वर्ग (BC)",
        minPct: 45.5,
        minMarks: 68.25,
        qualified: totalScore >= 68.25,
        margin: (totalScore - 68.25).toFixed(2)
      },
      EBC: {
        category: "Extremely Backward Class (EBC)",
        category_hi: "अत्यंत पिछड़ा वर्ग (EBC)",
        minPct: 42.5,
        minMarks: 63.75,
        qualified: totalScore >= 63.75,
        margin: (totalScore - 63.75).toFixed(2)
      },
      SC_ST_Women_PwD: {
        category: "SC / ST / Divyang / Women",
        category_hi: "अ.जा. / अ.ज.जा. / दिव्यांग / महिला",
        minPct: 40.0,
        minMarks: 60.0,
        qualified: totalScore >= 60.0,
        margin: (totalScore - 60.0).toFixed(1)
      }
    };

    const isQualified = cutoffs.General.qualified;

    // Percentile Projection Model (Normal Distribution mean 68, SD 18 for 150 Qs)
    const z = (totalScore - 68) / 18.0;
    let estPercentile = 50.0;
    // Standard normal CDF approximation
    const cdf = 1.0 / (1.0 + Math.exp(-1.7 * z));
    estPercentile = Math.max(1.0, Math.min(99.9, cdf * 100)).toFixed(1);

    // Topic Diagnostic Tiers
    const strongTopics = [];
    const moderateTopics = [];
    const weakTopics = [];

    Object.values(topicStats).forEach(stat => {
      const acc = stat.total > 0 ? (stat.correct / stat.total) * 100 : 0;
      stat.accuracy = acc.toFixed(0);
      if (acc >= 75) {
        strongTopics.push(stat);
      } else if (acc >= 50) {
        moderateTopics.push(stat);
      } else {
        weakTopics.push(stat);
      }
    });

    const resultReport = {
      paperId: paper.id,
      paperTitle: paper.title,
      timestamp: Date.now(),
      totalQuestions,
      maxMarks,
      totalScore,
      percentage: parseFloat(percentage),
      correctCount,
      incorrectCount,
      unattemptedCount,
      attemptedCount,
      accuracy: parseFloat(accuracy),
      totalTimeSpent,
      avgTimePerAttempt,
      paceCategory,
      paceDescription,
      estPercentile: parseFloat(estPercentile),
      cutoffs,
      isQualified,
      sectionStats,
      topicStats,
      strongTopics,
      moderateTopics,
      weakTopics,
      questionReviews
    };

    // Save to local test history
    ExamAnalytics.saveAttempt(resultReport);

    return resultReport;
  }

  static saveAttempt(report) {
    try {
      const attemptId = 'attempt_' + Date.now();
      report.id = attemptId;

      // Save full report
      localStorage.setItem(`BSTET_REPORT_${attemptId}`, JSON.stringify(report));

      // Save index in history
      const historyRaw = localStorage.getItem('BSTET_EXAM_HISTORY');
      const history = historyRaw ? JSON.parse(historyRaw) : [];
      
      history.unshift({
        id: attemptId,
        paperId: report.paperId,
        paperTitle: report.paperTitle,
        timestamp: report.timestamp,
        score: report.totalScore,
        maxMarks: report.maxMarks,
        percentage: report.percentage,
        accuracy: report.accuracy,
        isQualified: report.isQualified,
        estPercentile: report.estPercentile
      });

      // Keep max 30 attempts
      if (history.length > 30) {
        const removed = history.pop();
        localStorage.removeItem(`BSTET_REPORT_${removed.id}`);
      }
      localStorage.setItem('BSTET_EXAM_HISTORY', JSON.stringify(history));
    } catch (e) {
      console.warn("Could not save attempt history", e);
    }
  }

  static getAttempt(attemptId) {
    try {
      const raw = localStorage.getItem(`BSTET_REPORT_${attemptId}`);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  static getHistory() {
    try {
      const historyRaw = localStorage.getItem('BSTET_EXAM_HISTORY');
      return historyRaw ? JSON.parse(historyRaw) : [];
    } catch (e) {
      return [];
    }
  }

  static clearHistory() {
    try {
      const history = ExamAnalytics.getHistory();
      history.forEach(item => {
        localStorage.removeItem(`BSTET_REPORT_${item.id}`);
      });
      localStorage.removeItem('BSTET_EXAM_HISTORY');
    } catch (e) {}
  }
}

window.ExamAnalytics = ExamAnalytics;
