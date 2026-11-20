/**
 * Store - Centralized LocalStorage State Manager
 * Preserves backward compatibility for all user storage keys.
 */

export const StorageKeys = {
  HISTORY: 'BSTET_EXAM_HISTORY',
  LANG: 'BSTET_LANG',
  THEME: 'BSTET_THEME',
  FONT_SIZE: 'BSTET_FONT_SIZE',
  ACTIVE_ATTEMPT: 'BSTET_ACTIVE_ATTEMPT'
};

export class Store {
  static getHistory() {
    try {
      const data = localStorage.getItem(StorageKeys.HISTORY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('[Store] Could not read exam history:', e);
      return [];
    }
  }

  static saveAttempt(attempt) {
    try {
      const history = this.getHistory();
      history.unshift(attempt);
      localStorage.setItem(StorageKeys.HISTORY, JSON.stringify(history.slice(0, 50)));
    } catch (e) {
      console.warn('[Store] Could not save exam attempt:', e);
    }
  }

  static clearHistory() {
    try {
      localStorage.removeItem(StorageKeys.HISTORY);
    } catch (e) {
      console.warn('[Store] Could not clear history:', e);
    }
  }

  static getTheme() {
    try {
      return localStorage.getItem(StorageKeys.THEME) || 'light';
    } catch (e) {
      return 'light';
    }
  }

  static setTheme(theme) {
    try {
      localStorage.setItem(StorageKeys.THEME, theme);
    } catch (e) {
      console.warn('[Store] Could not set theme:', e);
    }
  }

  static getLanguage() {
    try {
      return localStorage.getItem(StorageKeys.LANG) || 'en';
    } catch (e) {
      return 'en';
    }
  }

  static setLanguage(lang) {
    try {
      localStorage.setItem(StorageKeys.LANG, lang);
    } catch (e) {
      console.warn('[Store] Could not set language:', e);
    }
  }

  static getFontSize() {
    try {
      return localStorage.getItem(StorageKeys.FONT_SIZE) || 'normal';
    } catch (e) {
      return 'normal';
    }
  }

  static setFontSize(size) {
    try {
      localStorage.setItem(StorageKeys.FONT_SIZE, size);
    } catch (e) {
      console.warn('[Store] Could not set font size:', e);
    }
  }

  static getActiveAttempt() {
    try {
      const data = localStorage.getItem(StorageKeys.ACTIVE_ATTEMPT);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  static saveActiveAttempt(state) {
    try {
      localStorage.setItem(StorageKeys.ACTIVE_ATTEMPT, JSON.stringify(state));
    } catch (e) {
      console.warn('[Store] Could not save active attempt:', e);
    }
  }

  static clearActiveAttempt() {
    try {
      localStorage.removeItem(StorageKeys.ACTIVE_ATTEMPT);
    } catch (e) {
      console.warn('[Store] Could not clear active attempt:', e);
    }
  }
}
