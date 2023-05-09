import {escKey} from './util.js';
import {renderComment, evntComment} from './comments_render.js';

const BigPictureSelect = document.querySelector('.big-picture');

const BigPictureImg = BigPictureSelect.querySelector('.big-picture__img img');
const BigPictureCapt = BigPictureSelect.querySelector('.social__caption');
const BigPictureSocial = BigPictureSelect.querySelector('.big-picture__social');
const BigPictureClose = BigPictureSelect.querySelector('.big-picture__cancel');


const pressKey = (evt) => {
  if (escKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const renderBigPicture = (picture) => {
  document.body.classList.add('modal-open');
  BigPictureImg.src = picture.url;
  BigPictureCapt.textContent = BigPictureImg.alt = picture.description;
  BigPictureSocial.querySelector('.likes-count').textContent = picture.likes;
  renderComment(picture);
};

function openBigPicture(picture){
  BigPictureSelect.classList.remove('hidden');
  renderBigPicture(picture);
  BigPictureClose.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown',pressKey);
}

function closeBigPicture(){
  document.body.classList.remove('modal-open');
  BigPictureSelect.classList.add('hidden');
  document.removeEventListener('keydown',pressKey);
  evntComment();
}

export {openBigPicture};
