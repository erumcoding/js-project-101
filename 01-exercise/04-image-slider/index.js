// 💡 https://github.com/erumcoding/js-101-part-1

const images = document.querySelectorAll('.item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;
let lastIndex = images.length - 1;

const updateImage = () => {
  images.forEach((img) => {
    img.classList.remove('show');
  });

  images[index].classList.add('show');
};

const moveToNext = () => {
  if (index === lastIndex) {
    index = 0;
  } else {
    index++;
  }

  updateImage();
};

const moveToPrev = () => {
  if (index === 0) {
    index = lastIndex;
  } else {
    index--;
  }

  updateImage();
};

prevButton.addEventListener('click', moveToPrev);
nextButton.addEventListener('click', moveToNext);
