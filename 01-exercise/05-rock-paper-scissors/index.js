// 무료 강의 👉 https://youtube.com/playlist?list=PLI33CnBTx2MZGD7zAQ810_B8dDU_E8gaq

const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');

const result = ['가위', '바위', '보'];

function show(user, computer, message) {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = message;
}

function game(user, computer) {
  let message;

  if (user === computer) {
    message = '무승부';
  } else {
    switch (user + computer) {
      case '가위바위':
      case '바위보':
      case '보가위':
        message = '컴퓨터 승리!';
        break;
      case '가위보':
      case '바위가위':
      case '보바위':
        message = '당신 승리!';
        break;
    }
  }

  show(user, computer, message);
}

function play(event) {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
}

buttons.forEach((button) => {
  button.addEventListener('click', play);
});
