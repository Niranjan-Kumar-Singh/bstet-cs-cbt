/**
 * Bihar STET CBT Analytics & Scorecard Calculator
 * Evaluates performance against official Bihar STET qualifying cutoffs and computes topic mastery.
 */

class ExamAnalytics {
  static evaluate(paper, responses, timeSpentPerQ = {}) {
    let totalQuestions = paper.questions.length;
    let totalScore = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;
    
    let sectionStats = {};
    paper.sections.forEach(s => {
      sectionStats[s.id] = {
        name: s.name,
        total: 0,
        score: 0,
        correct: 0,
        incorrect: 0,
        unattempted: 0
      };
    });

    let topicStats = {};

    let questionReviews = [];

    paper.questions.forEach(q => {
      const userChoice = responses[q.id];
      const isCorrect = userChoice === q.correctAnswer;
      const isAttempted = !!userChoice;

      // Find section
      const sec = paper.sections.find(s => q.questionNumber >= s.startQ && q.questionNumber <= s.endQ) || paper.sections[0];
      
      sectionStats[sec.id].total++;

      // Track topic
      const topic = q.topic || "Computer Science";
      if (!topicStats[topic]) {
        topicStats[topic] = { total: 0, correct: 0, incorrect: 0, unattempted: 0 };
      }
      topicStats[topic].total++;

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
        // BSTET has no negative marking: totalScore -= 0
        sectionStats[sec.id].incorrect++;
        topicStats[topic].incorrect++;
      }

      questionReviews.append || questionReviews.push({
        ...q,
        userResponse: userChoice || null,
        isCorrect: isCorrect,
        isAttempted: isAttempted,
        timeSpent: timeSpentPerQ[q.id] || 0
      });
    });

    const maxMarks = totalQuestions; // 1 mark per question
    const percentage = ((totalScore / maxMarks) * 100).toFixed(1);
    const attemptedCount = correctCount + incorrectCount;
    const accuracy = attemptedCount > 0 ? ((correctCount / attemptedCount) * 100).toFixed(1) : 0;

    // Official Bihar STET Qualifying Cutoffs
    const cutoffs = {
      General: { minPct: 50.0, minMarks: 75.0, qualified: totalScore >= 75.0 },
      BC: { minPct: 45.5, minMarks: 68.25, qualified: totalScore >= 68.25 },
      EBC: { minPct: 42.5, minMarks: 63.75, qualified: totalScore >= 63.75 },
      SC_ST_Women_PwD: { minPct: 40.0, minMarks: 60.0, qualified: totalScore >= 60.0 }
    };

    const isQualified = cutoffs.General.qualified;

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
      cutoffs,
      isQualified,
      sectionStats,
      topicStats,
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
        isQualified: report.isQualified
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
