// import { saveLocalStorage, loadLocalStorage, removeLocalStorage } from "./localStorage";

// import getMoviesApi from './getMoviesApi';
// import { appendMoviesMarkup } from './moviesMarkup';





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


function appendMoviesMarkup() {

    const body = document.querySelector('body');

    const movieMarkup = `<li class="film-list__item"><img src="" alt="" class="film-list__item-poster" loading="lazy">
     <h3 class="film-list__item-title">Title</h3>
     <div class="film-list__item-info"><span class="film-list__item-genres">:Жанры</span>|<span class="film-list__item-year">Год</span></div>
   </li>`;

    body.insertAdjacentHTML('beforeend', movieMarkup);
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



