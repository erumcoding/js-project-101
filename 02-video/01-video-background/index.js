// 💡 https://github.com/erumcoding/js-101-part-1

const button = document.querySelector('button');

const togglePlay = () => {
  const video = document.querySelector('video');

  if (video.paused) {
    button.innerText = 'Pause';
    video.play();
  } else {
    button.innerText = 'Play';
    video.pause();
  }
};

button.addEventListener('click', togglePlay);
