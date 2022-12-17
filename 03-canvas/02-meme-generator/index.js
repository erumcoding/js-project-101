// 💡 https://github.com/erumcoding/js-101-part-1

const canvas = document.querySelector('canvas');
const imageFile = document.querySelector('#image-file');
const textInputs = document.querySelectorAll('.text');
const topTextInput = document.querySelector('#top-text');
const bottomTextInput = document.querySelector('#bottom-text');
const ctx = canvas.getContext('2d');

let image;
let width;
let height;

let topText = '';
let bottomText = '';

const drawText = () => {
  const offsetY = height / 20;
  const fontSize = width / 10;

  ctx.font = `${fontSize}px sans-serif`;
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = fontSize / 5;
  ctx.lineJoin = 'round';

  ctx.textBaseline = 'top';
  ctx.strokeText(topText, width / 2, offsetY);
  ctx.fillText(topText, width / 2, offsetY);

  ctx.textBaseline = 'bottom';
  ctx.strokeText(bottomText, width / 2, height - offsetY);
  ctx.fillText(bottomText, width / 2, height - offsetY);
};

const updateTopText = (event) => {
  topText = event.target.value;
  drawText();
};

const updateBottomText = (event) => {
  bottomText = event.target.value;
  drawText();
};

const showInputs = () => {
  textInputs.forEach((input) => {
    input.style.display = 'flex';
  });
};

const uploadImage = () => {
  width = image.width;
  height = image.height;

  canvas.width = width;
  canvas.height = height;

  ctx.drawImage(image, 0, 0);
  showInputs();
  drawText();
};

const createImage = (event) => {
  const imageUrl = URL.createObjectURL(event.target.files[0]);

  image = document.createElement('img');
  image.src = imageUrl;
  image.addEventListener('load', uploadImage);
};

imageFile.addEventListener('change', createImage);
topTextInput.addEventListener('change', updateTopText);
bottomTextInput.addEventListener('change', updateBottomText);
