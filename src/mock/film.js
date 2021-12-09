import dayjs from 'dayjs';
import {getRandomInteger} from './utils';
import {comments} from './comment';

const COUNT_CHARACTERS = 139;

const titles = [
  'Lawrence of Arabia',
  'American beauty',
  'Lady bird',
  'Saint frances',
  'Song of the sea'
];

const genres = ['Comedy', 'Drama', 'Music'];

const writers = ['Takeshi Kitano', 'Henry', 'Tolstoy', 'Dad and Mom'];

const actors = [
  'Morgan Freeman', 'Mary Beth Hughes', 'Matt Damon', 'Tom Cruse', 'Nikole Kidman'
];

const descriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget sodales efficitur ipsum.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra sodales efficitur ipsum.',
  'Nullam nunc ex, convallis sed nibh finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.'
];

const postersUrl = [
  './images/posters/the-dance-of-life.jpg',
  './images/posters/made-for-each-other.png',
  './images/posters/popeye-meets-sinbad.png',
  './images/posters/sagebrush-trail.jpg',
  './images/posters/santa-claus-conquers-the-martians.jpg',
  './images/posters/the-great-flamarion.jpg',
  './images/posters/the-man-with-the-golden-arm.jpg'
];

const getPartOfArray = (data) => {
  if (!data.length) {
    return [];
  }
  const randomIndex = getRandomInteger(0, data.length - 1);
  return data.slice(randomIndex);
};

const getDescription = () => {
  const desc = getPartOfArray(descriptions).join(' ');
  return desc.length > COUNT_CHARACTERS ? `${desc}...` : desc;
};

export const generateFilm = () => {

  const isWatched = Boolean(getRandomInteger());

  return {
    id: getRandomInteger(11, 22),
    comments: getRandomInteger() ? getPartOfArray(comments).map((c) => ({id: c.id})) : null,
    filmInfo: {
      description: getDescription(),
      title: titles[getRandomInteger(0, titles.length - 1)],
      alternativeTitle: titles[getRandomInteger(0, titles.length - 1)],
      poster: postersUrl[getRandomInteger(0, postersUrl.length - 1)],
      runtime: 85,
      ageRating: 0,
      totalRating: 5.3,
      director: 'Tom Ford',
      writers: writers[getRandomInteger(0, writers.length - 1)],
      actors: getPartOfArray(actors),
      release: {
        date: dayjs().subtract(getRandomInteger(0, 50), 'year').toDate(),
        country: 'England'
      },
      genre: getPartOfArray(genres),
    },
    userDetails: {
      isWatched,
      watchlist: !isWatched,
      watchingDate: isWatched ? dayjs().subtract(getRandomInteger(0, 12), 'month').toDate() : null,
      isFavorite: Boolean(getRandomInteger())
    }
  };
};

