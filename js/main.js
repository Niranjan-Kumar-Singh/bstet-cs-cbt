/**
 * Bihar STET CBT Portal - Main ES Module Entry Point
 */
import { Store } from './core/store.js';
import { Router } from './core/router.js';
import { ThemeManager } from './core/theme.js';
import { A11yManager } from './core/a11y.js';
import { ErrorHandler } from './core/errors.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize core system state
  ThemeManager.init();
  A11yManager.init();

  // 2. Ensure application controller is mounted
  if (!window.app && typeof App !== 'undefined') {
    window.app = new App();
  }

  // 3. Register client router
  if (window.app) {
    window.app.router = new Router(window.app);
    window.app.router.handleRoute();
  }

  // 4. Register Progressive Web App service worker if supported
  if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
    navigator.serviceWorker.register('/sw.js').catch(err => {
      console.warn('[PWA] Service worker registration failed:', err);
    });
  }

  console.log('[BSTET CBT] System modules initialized successfully. Zero external runtime dependencies.');
});

export { Store, Router, ThemeManager, A11yManager, ErrorHandler };
