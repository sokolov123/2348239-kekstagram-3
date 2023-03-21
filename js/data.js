import {getRandom, photoDescription} from './functions.js';

export function getData(max) { // MAX это количество пользователей
  const data = [];
  for (let i = 1; i <= max; i++) {
    data.push({id: i, url: `photos/${i}.jpg`, description: photoDescription(), likes: getRandom(15, 200), comments: getRandom(0, 200)});
  }
  return data;
}
