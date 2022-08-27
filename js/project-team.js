import { saveLocalStorage, loadLocalStorage, removeLocalStorage } from "./localStorage";
import { appendMoviesMarkup } from './moviesMarkup';


const watchedBtn = document.querySelector('button[data-action="watched"]');
const queueBtn = document.querySelector('button[data-action="queue"]');


if (queueBtn.classList.contains('.js-current')) {
  const queueKey = loadLocalStorage('queueKey');
  appendMoviesMarkup(queueKey);
  return;
}
watchedBtn.classList.contains('.js-current');
const watchedKey = loadLocalStorage('watchedKey');


console.log(watchedKey);

if (watchedKey === null || watchedKey === undefined) {
    // Тут должна быть заглушка для MyLibrary - картинка или текст, что фильмов в библиотеке нет
    console.log('Супер!')
    // return;
}





// ====================================================
// FUNCTION

//Сохранить в локал
function saveLocalStorage(key, value) {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
}

//Витягує ключь з локал
function loadLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data === null ? undefined : JSON.parse(data);
  } catch (error) {
    console.log('Get error: ', error.message);
  }
}
// Видаляє локал ключь
function removeLocalStorage(key) {
  return localStorage.removeItem(key);
}

function onPageStart() {
  getMovies.resetPage();
  getMovies.getStartMovies().then(movies => {
    appendMoviesMarkup(movies);
  });
}

function appendMoviesMarkup(movies) {
  movies.forEach(movie => {
    const movieTitle = movie.title;
    const moviePoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const movieReleaseDate = movie.release_date.split('').slice(0, 4).join('');
    const movieGenres = getGenres(movie.genre_ids);

    const movieMarkup = `<li class="film-list__item"><img src="${moviePoster}" alt="${movieTitle}" class="film-list__item-poster" loading="lazy">
     <h3 class="film-list__item-title">${movieTitle}</h3>
     <div class="film-list__item-info"><span class="film-list__item-genres">${movieGenres}</span>|<span class="film-list__item-year">${movieReleaseDate}</span></div>
   </li>`;

    moviesGallery.insertAdjacentHTML('beforeend', movieMarkup);
  });
}


function getGenres(ids) {
  const genres = ids.map(id => {
    const genre = genresArray.find(genre => genre.id === id).name;
    return genre;
  });
  if (genres.length >= 4) {
    genres.splice(2, 10, 'Other');
  }
  return genres.join(', ');
}



