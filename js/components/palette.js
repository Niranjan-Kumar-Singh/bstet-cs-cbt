/**
 * Palette Component - TCS iON Question Palette Grid & Legend
 */

export class PaletteComponent {
  static renderGrid(questions, currentIndex, answers, onSelect) {
    const container = document.getElementById('palette-grid');
    if (!container) return;

    container.innerHTML = '';
    questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = String(idx + 1);

      // Status class determination
      const ans = answers[idx];
      if (ans && ans.isAnswered && ans.isMarkedForReview) {
        btn.classList.add('status-ans-marked');
      } else if (ans && ans.isMarkedForReview) {
        btn.classList.add('status-marked');
      } else if (ans && ans.isAnswered) {
        btn.classList.add('status-answered');
      } else if (ans && ans.isVisited) {
        btn.classList.add('status-not-answered');
      } else {
        btn.classList.add('status-not-visited');
      }

      if (idx === currentIndex) {
        btn.classList.add('current-active');
      }

      btn.onclick = () => onSelect(idx);
      container.appendChild(btn);
    });
  }

  static updateCounts(answers, totalQuestions) {
    let answered = 0;
    let notAnswered = 0;
    let marked = 0;
    let ansMarked = 0;
    let visited = 0;

    Object.values(answers).forEach(a => {
      if (a.isVisited) visited++;
      if (a.isAnswered && a.isMarkedForReview) ansMarked++;
      else if (a.isMarkedForReview) marked++;
      else if (a.isAnswered) answered++;
      else if (a.isVisited) notAnswered++;
    });

    const notVisited = totalQuestions - visited;

    const elAns = document.getElementById('legend-answered');
    const elNotAns = document.getElementById('legend-not-answered');
    const elNotVis = document.getElementById('legend-not-visited');
    const elMark = document.getElementById('legend-marked');
    const elAnsMark = document.getElementById('legend-ans-marked');

    if (elAns) elAns.textContent = String(answered);
    if (elNotAns) elNotAns.textContent = String(notAnswered);
    if (elNotVis) elNotVis.textContent = String(notVisited);
    if (elMark) elMark.textContent = String(marked);
    if (elAnsMark) elAnsMark.textContent = String(ansMarked);
  }
}
