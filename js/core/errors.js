/**
 * Errors - Global Error Boundary & Missing Paper Handler
 */

export class ErrorHandler {
  static handleRetiredPaper(paperId, app) {
    const modal = document.getElementById('retired-modal');
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      const closeBtn = document.getElementById('retired-modal-btn');
      if (closeBtn) {
        closeBtn.onclick = () => {
          modal.classList.remove('active');
          modal.setAttribute('aria-hidden', 'true');
          window.location.hash = '#/lobby';
          if (app && app.showView) app.showView('lobby');
        };
      }
    } else {
      alert(`The requested paper (${paperId}) is no longer in the active catalog.`);
      window.location.hash = '#/lobby';
    }
  }
}
