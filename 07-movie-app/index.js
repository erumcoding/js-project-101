// 💡 https://github.com/erumcoding/js-101-part-1

import { API_KEY } from './env.js';
const form = document.querySelector('form');

const removeAll = () => {
  const movies = document.querySelectorAll('.movie');

  movies.forEach((movie) => {
    movie.remove();
  });
};

const searchMovie = (event) => {
  event.preventDefault();

  const input = document.querySelector('input');
  const { value: keyword } = input;
  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}`;

  if (keyword) {
    removeAll();

    fetch(searchURL)
      .then((response) => response.json())
      .then(({ results }) => {
        results.forEach((movie) => {
          createBlock(movie);
        });
      });
  }
};

const movieDetail = (event) => {
  const { id } = event.target.parentElement;
  const detailURL = `https://www.themoviedb.org/movie/${id}`;
  window.open(detailURL, '_blank');
};

const createBlock = ({
  id,
  poster_path,
  original_title,
  title,
  vote_average,
  release_date,
}) => {
  const parent = document.querySelector('.contents');
  const movie = document.createElement('div');
  const poster = document.createElement('img');
  const detail = document.createElement('div');
  const h3 = document.createElement('h3');
  const info = document.createElement('div');
  const date = document.createElement('div');
  const rate = document.createElement('div');

  movie.className = 'movie';
  detail.className = 'detail';
  info.className = 'info';
  date.className = 'date';
  rate.className = 'rate';

  movie.id = id;
  poster.src = `https://image.tmdb.org/t/p/original/${poster_path}`;
  h3.innerText = `${original_title} (${title})`;
  date.innerText = release_date;
  rate.innerText = `⭐️ ${vote_average}`;

  info.append(date, rate);
  detail.append(info, h3);
  movie.append(poster, detail);
  parent.append(movie);

  poster.addEventListener('click', movieDetail);
};

const getPopularMovies = () => {
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=1`;

  fetch(URL)
    .then((response) => response.json())
    .then(({ results }) => {
      results.forEach((movie) => {
        createBlock(movie);
      });
    });
};

getPopularMovies();
form.addEventListener('submit', searchMovie);
