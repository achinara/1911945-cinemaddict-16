import {renderTemplate, RenderPosition} from './render';
import {createMenuTemplate} from './view/menu';
import {createFilmsTemplate} from './view/films';
import {createFilmsListTemplate} from './view/films-list';
import {createFilmCardTemplate} from './view/film-card';
import {createUserProfileTemplate} from './view/user-profile';
import {createShowMoreTemplate} from './view/show-more';
import {createMoreDetailsPopupTemplate} from './view/popup';
import {generateFilm} from './mock/film';


const FILMS_COUNT = 5;
const films = Array.from({length: FILMS_COUNT}, generateFilm);

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');

renderTemplate(siteHeaderElement, createUserProfileTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createMenuTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(siteMainElement, createFilmsTemplate(), RenderPosition.BEFOREEND);

const filmsElement = document.querySelector('.films');
renderTemplate(filmsElement, createFilmsListTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(filmsElement, createShowMoreTemplate(), RenderPosition.BEFOREEND);

const filmsContainerElement = document.querySelector('.films-list__container');

for (let i = 0; i < FILMS_COUNT; i++) {
  renderTemplate(filmsContainerElement, createFilmCardTemplate(films[i]), RenderPosition.BEFOREEND);
}

// renderTemplate(siteFooterElement, createMoreDetailsPopupTemplate(), RenderPosition.AFTEREND);
