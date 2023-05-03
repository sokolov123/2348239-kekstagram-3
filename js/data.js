import {getRandom, getPhotoDescription} from './functions.js';

const likesMIN = 15;
const likesMAX = 200;
const commentNumber = 200;

export function getData(max) { // MAX это количество пользователей
  const data = [];
  for (let i = 1; i <= max; i++) {
    data.push({id: i, url: `photos/${i}.jpg`, description: getPhotoDescription(), likes: getRandom(likesMIN, likesMAX), comments: getRandom(0, commentNumber)});
  }
  return data;
}

export const EFFECTS = {
  none: {
    name: 'none',
    filter: '',
    size: ''
  },
  chrome: {
    name: 'chrome',
    step: 0.1,
    filter: 'grayscale',
    min: 0,
    max: 1,
    start: 1,
    size: ''
  },
  sepia: {
    name: 'sepia',
    step: 0.1,
    filter: 'sepia',
    min: 0,
    max: 1,
    start: 1,
    size: ''
  },
  marvin: {
    name: 'marvin',
    step: 1,
    filter: 'invert',
    min: 0,
    max: 100,
    start: 100,
    size: '%'
  },
  phobos: {
    name: 'phobos',
    step: 0.1,
    filter: 'blur',
    min: 0,
    max: 3,
    start: 3,
    size: 'px'
  },
  heat: {
    name: 'heat',
    step: 0.1,
    filter: 'brightness',
    min: 1,
    max: 3,
    start: 3,
    size: ''
  }
};
