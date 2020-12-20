class CountdownTimer {
  timerId = null;
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  changeDate() {
    let time = this.targetDate - new Date();

    this.days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((time % (1000 * 60)) / 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("jan 01, 2021"),
});

const days = document.querySelector('[data-value="days"]');
const hours = document.querySelector('[data-value="hours"]');
const mins = document.querySelector('[data-value="mins"]');
const secs = document.querySelector('[data-value="secs"]');

let timerId = setInterval(() => {
  timer.changeDate();
  days.textContent = String(timer.days).padStart(2, "0");
  hours.textContent = String(timer.hours).padStart(2, "0");
  mins.textContent = String(timer.mins).padStart(2, "0");
  secs.textContent = String(timer.secs).padStart(2, "0");
}, 1000);
