import dayjs from 'dayjs';
import {getRandomInteger} from './utils';

const emotions = ['smile', 'sleeping', 'puke', 'angry'];

const textComment = [
  'Interesting setting and a good cast',
  'Booooooooooring',
  'Haha, it\'s so funny )))',
  'Very very old. Meh',
  'Almost two hours? Seriously?',
];

const authors = [
  'Ilya O\'Reilly',
  'Vasya',
  'Alex',
  'Kira',
];

const generateComment = () => ({
  id: getRandomInteger(1, 5),
  date: dayjs().subtract(getRandomInteger(0, 30), 'day').toDate(),
  author: authors[getRandomInteger(0, authors.length - 1)],
  comment: textComment[getRandomInteger(0, textComment.length - 1)],
  emotion: emotions[getRandomInteger(0, emotions.length - 1)]
});

export const comments = Array.from({length: 5}, generateComment);
