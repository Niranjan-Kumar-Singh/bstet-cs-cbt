/**
 * Charts Component - Renders SVG Donut Performance Gauges
 */

export class ChartsComponent {
  static updateDonut(circleEl, percentage) {
    if (!circleEl) return;
    const radius = circleEl.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    circleEl.style.strokeDasharray = `${circumference} ${circumference}`;
    circleEl.style.strokeDashoffset = offset;
  }

  static renderTopicDiagnostic(matrix, container) {
    if (!container) return;
    container.innerHTML = '';
    matrix.forEach(item => {
      const row = document.createElement('div');
      row.className = `diag-item diag-tier-${item.tier}`;
      row.innerHTML = `
        <div class="diag-topic-info">
          <span class="diag-name">${item.topic}</span>
          <span class="diag-score">${item.correct}/${item.total} (${item.pct}%)</span>
        </div>
        <div class="diag-bar-track">
          <div class="diag-bar-fill" style="width: ${item.pct}%;"></div>
        </div>
      `;
      container.appendChild(row);
    });
  }
}
