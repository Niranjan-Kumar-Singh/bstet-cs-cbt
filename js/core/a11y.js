/**
 * A11y - Accessibility & Font Zoom Controller
 */
import { Store } from './store.js';

export class A11yManager {
  static init() {
    const saved = Store.getFontSize();
    this.apply(saved);
  }

  static apply(size) {
    const validSizes = ['small', 'normal', 'large', 'xlarge'];
    const target = validSizes.includes(size) ? size : 'normal';
    document.documentElement.setAttribute('data-font-size', target);
    Store.setFontSize(target);
  }

  static increase() {
    const current = Store.getFontSize();
    const map = { small: 'normal', normal: 'large', large: 'xlarge', xlarge: 'xlarge' };
    this.apply(map[current] || 'normal');
  }

  static decrease() {
    const current = Store.getFontSize();
    const map = { xlarge: 'large', large: 'normal', normal: 'small', small: 'small' };
    this.apply(map[current] || 'normal');
  }

  static reset() {
    this.apply('normal');
  }
}
