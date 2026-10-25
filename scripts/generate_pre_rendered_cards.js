const fs = require('fs');
const path = require('path');

const papersIndexContent = fs.readFileSync(path.join(__dirname, '../js/data/papers-index.js'), 'utf8');
const vm = require('vm');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(papersIndexContent, sandbox);

const catalog = sandbox.window.PAPERS_CATALOG || [];

const html = catalog.map(paper => {
  return `        <div class="paper-card" data-id="${paper.id}" data-category="${paper.category}">
          <div>
            <div class="paper-header">
              <span class="badge ${paper.badgeClass}">${paper.badge}</span>
              <span style="font-size: 12px; font-weight: 600; color: var(--text-muted);">${paper.difficulty}</span>
            </div>
            <h3 class="paper-title">${paper.title}</h3>
            <p class="paper-subtitle">${paper.subtitle}</p>
            <div class="paper-stats-list">
              <div class="stat-item">
                <span class="label">Questions</span>
                <span class="val">${paper.totalQuestions} Qs</span>
              </div>
              <div class="stat-item">
                <span class="label">Total Marks</span>
                <span class="val">${paper.totalMarks}</span>
              </div>
              <div class="stat-item">
                <span class="label">Duration</span>
                <span class="val">${paper.durationMinutes} Mins</span>
              </div>
            </div>
          </div>
          <div class="paper-card-actions">
            <button class="btn btn-primary" data-action="cbt" data-id="${paper.id}">
              ⚡ Start CBT Mock
            </button>
            <button class="btn btn-outline" data-action="practice" data-id="${paper.id}">
              📖 Practice Mode
            </button>
          </div>
        </div>`;
}).join('\n');

fs.writeFileSync(path.join(__dirname, '../scratch_cards.html'), html, 'utf8');
console.log(`Generated ${catalog.length} pre-rendered cards HTML`);
