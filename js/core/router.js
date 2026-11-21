/**
 * Router - Client-Side Hash & Query Parameter Router
 * Supports hash routes (#/, #/dashboard, #/topic-practice, #/test/<paperId>, #/result)
 * and legacy query parameters (?paper=...) with smooth view transitions.
 */

export class Router {
  constructor(app) {
    this.app = app;
    this.routes = {};
    window.addEventListener('hashchange', () => this.handleRoute());
  }

  register(route, handler) {
    this.routes[route] = handler;
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    const [path, queryString] = hash.split('?');

    // Parse query params if present in search or hash
    const searchParams = new URLSearchParams(window.location.search);
    const hashParams = new URLSearchParams(queryString || '');

    const paperParam = searchParams.get('paper') || hashParams.get('paper');
    if (paperParam) {
      this.handlePaperParam(paperParam);
      return;
    }

    // Direct hash routes
    if (path === '/' || path === '/lobby' || path === '') {
      this.app.showView('lobby');
      this.updateActiveNavLink('nav-link-lobby');
      return;
    }

    if (path === '/dashboard') {
      this.app.showView('dashboard');
      this.updateActiveNavLink('nav-link-dashboard');
      if (this.app.renderDashboard) {
        this.app.renderDashboard();
      }
      return;
    }

    if (path === '/topic-practice') {
      this.app.showView('topic-practice');
      this.updateActiveNavLink('nav-link-topic-practice');
      const unitParam = hashParams.get('unit');
      if (this.app.renderTopicPractice) {
        this.app.renderTopicPractice(unitParam);
      }
      return;
    }

    if (path === '/cheatsheets') {
      this.app.showView('cheatsheets');
      this.updateActiveNavLink('nav-link-cheatsheets');
      if (this.app.renderCheatsheets) {
        this.app.renderCheatsheets();
      }
      return;
    }

    if (path.startsWith('/test/')) {
      const paperId = path.replace('/test/', '');
      this.handlePaperParam(paperId);
      return;
    }

    if (path === '/result' || path.startsWith('/result/')) {
      if (this.app.lastAnalyticsReport) {
        this.app.showView('result');
      } else {
        const history = this.app.getExamHistory ? this.app.getExamHistory() : [];
        if (history.length > 0) {
          this.app.displayHistoricalResult(history[0]);
        } else {
          this.navigate('/lobby');
        }
      }
      return;
    }

    if (path === '/about') {
      this.app.showView('lobby');
      const aboutEl = document.getElementById('about-section');
      if (aboutEl) {
        aboutEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Default fallback: show dedicated not-found view for unrecognized routes
    this.app.showView('not-found');
  }

  handlePaperParam(paperId) {
    const catalog = window.PAPERS_CATALOG || [];
    const paper = catalog.find(p => p.id === paperId);
    if (paper) {
      this.app.selectPaper(paper.id);
    } else {
      console.warn(`[Router] Requested paper '${paperId}' not found in active catalog.`);
      this.app.showRetiredPaperNotice(paperId);
    }
  }

  updateActiveNavLink(activeId) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    });
    const el = document.getElementById(activeId);
    if (el) {
      el.classList.add('active');
      el.setAttribute('aria-current', 'page');
    }
  }

  navigate(route) {
    window.location.hash = route;
  }
}
