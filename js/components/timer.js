/**
 * Timer Component - Countdown Timer with Alerts & Persistence
 */
import { formatTime } from '../core/utils.js';

export class TimerComponent {
  constructor(durationMinutes, onTick, onExpire) {
    this.totalSeconds = durationMinutes * 60;
    this.remainingSeconds = this.totalSeconds;
    this.onTick = onTick;
    this.onExpire = onExpire;
    this.intervalId = null;
    this.isPaused = false;
  }

  start() {
    this.stop();
    this.intervalId = setInterval(() => {
      if (this.isPaused) return;

      this.remainingSeconds--;
      if (this.onTick) this.onTick(this.remainingSeconds);

      if (this.remainingSeconds <= 0) {
        this.stop();
        if (this.onExpire) this.onExpire();
      }
    }, 1000);
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  getFormattedTime() {
    return formatTime(Math.max(0, this.remainingSeconds));
  }
}
