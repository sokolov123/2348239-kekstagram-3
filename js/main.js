import {getData} from './data.js';
const usersNum = 25;

const similarListElement = document.querySelector('.pictures');
const similarPicture = document.querySelector('#picture').content.querySelector('.picture');

const similarPictInfo = similarPicture.querySelector('.picture__info');
const photo = getData(usersNum);

const similarListFragment = document.createDocumentFragment();

photo.forEach((url, likes, comments) => {
  const pictElement = similarPicture.cloneNode(true);
  const pictInfo = similarPictInfo.cloneNode(true);
  pictElement.querySelector('.picture__img').src = url;
  pictInfo.querySelector('.picture__likes').textContent = likes;
  pictInfo.querySelector('.picture__comments').textContent = comments;
  similarListElement.appendChild(pictElement);
});
// Задание 7 часть 2
similarListElement.appendChild(similarListFragment);
