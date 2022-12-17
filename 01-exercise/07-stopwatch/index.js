// 💡 https://github.com/erumcoding/js-101-part-1

const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let timerId;

let [msec, sec, min] = [0, 0, 0];

const displayTimer = () => {
  const time = document.querySelector('.time');

  const fMin = min < 10 ? `0${min}` : min;
  const fSec = sec < 10 ? `0${sec}` : sec;
  const fMsec = msec < 10 ? `0${msec}` : msec;

  time.innerText = `${fMin} : ${fSec} : ${fMsec}`;
};

const timer = () => {
  msec++;

  if (msec === 100) {
    msec = 0;
    sec++;

    if (sec === 60) {
      sec = 0;
      min++;
    }
  }

  displayTimer();
};

const start = () => {
  // Start 버튼 연타해도 계속해서 타이머가 생성되지 않게끔 조건문 추가
  if (!timerId) {
    timerId = setInterval(timer, 10);
  }
};

const stop = () => {
  clearInterval(timerId);
};

const reset = () => {
  stop();
  [msec, sec, min] = [0, 0, 0];
  displayTimer();
};

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
