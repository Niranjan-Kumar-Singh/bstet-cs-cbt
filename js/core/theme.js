/**
 * Theme - Dark / Light Theme Controller
 */
import { Store } from './store.js';

export class ThemeManager {
  static init() {
    const savedTheme = Store.getTheme();
    this.apply(savedTheme);
  }

  static apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    Store.setTheme(theme);
    this.updateToggleIcons(theme);
  }

  static toggle() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    this.apply(next);
    return next;
  }

  static updateToggleIcons(theme) {
    const icon = theme === 'dark' ? '☀️' : '🌙';
    const btns = document.querySelectorAll('#theme-toggle-btn, #exam-theme-toggle-btn');
    btns.forEach(btn => {
      if (btn) btn.textContent = icon;
    });
  }
}
