// 무료 강의 👉 https://youtube.com/playlist?list=PLI33CnBTx2MZGD7zAQ810_B8dDU_E8gaq

const openButton = document.querySelector('.open');
const container = document.querySelector('.container');
const closeButton = document.querySelector('.close');

openButton.addEventListener('click', () => {
  container.style.display = 'flex';
  openButton.style.display = 'none';
});

closeButton.addEventListener('click', () => {
  container.style.display = 'none';
  openButton.style.display = 'block';
});
