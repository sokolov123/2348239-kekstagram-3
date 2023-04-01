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
