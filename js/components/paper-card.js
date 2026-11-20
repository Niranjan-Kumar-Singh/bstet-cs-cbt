/**
 * Paper Card Component - Renders paper cards for the lobby grid
 */
import { escapeHtml } from '../core/utils.js';

export class PaperCardComponent {
  static render(paper, isHindi = false) {
    const title = isHindi && window.BSTET_I18N ? window.BSTET_I18N.translatePaperTitle(paper.id, paper.title) : paper.title;
    const subtitle = isHindi && window.BSTET_I18N ? window.BSTET_I18N.translatePaperSubtitle(paper.id, paper.subtitle) : paper.subtitle;
    const badgeText = isHindi && window.BSTET_I18N ? window.BSTET_I18N.translateBadge(paper.badge) : paper.badge;
    const diffText = isHindi && window.BSTET_I18N ? window.BSTET_I18N.translateDifficulty(paper.difficulty) : paper.difficulty;

    const btnText = isHindi ? 'मॉक टेस्ट शुरू करें' : 'Start Mock Test';
    const qsLabel = isHindi ? 'प्रश्न' : 'Questions';
    const marksLabel = isHindi ? 'अंक' : 'Marks';
    const minsLabel = isHindi ? 'मिनट' : 'Mins';

    return `
      <div class="paper-card" data-paper-id="${escapeHtml(paper.id)}" data-category="${escapeHtml(paper.category)}">
        <div class="card-header">
          <div class="card-badge ${escapeHtml(paper.badgeClass)}">${escapeHtml(badgeText)}</div>
          <div class="card-difficulty">${escapeHtml(diffText)}</div>
        </div>
        <div class="card-body">
          <h3 class="card-title">${escapeHtml(title)}</h3>
          <p class="card-subtitle">${escapeHtml(subtitle)}</p>
          <div class="card-meta">
            <div class="meta-item">
              <span class="meta-val">${paper.totalQuestions}</span>
              <span class="meta-lbl">${qsLabel}</span>
            </div>
            <div class="meta-item">
              <span class="meta-val">${paper.totalMarks}</span>
              <span class="meta-lbl">${marksLabel}</span>
            </div>
            <div class="meta-item">
              <span class="meta-val">${paper.durationMinutes}</span>
              <span class="meta-lbl">${minsLabel}</span>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary start-paper-btn" data-paper-id="${escapeHtml(paper.id)}">
            ${btnText} &rarr;
          </button>
        </div>
      </div>
    `;
  }
}
