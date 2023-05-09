import { renderThumbnails } from './rendering.js';
import { openBigPicture } from './BigPicture.js';

const picturesElement = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  picturesElement.addEventListener('click', (evt) => {
    const picture = evt.target.closest('.picture');
    if(picture){
      evt.preventDefault();
      const pictureId = Number(picture.dataset.id);
      const pictureData = pictures.find((elem) => elem.id === pictureId);
      openBigPicture(pictureData);
    }
  });
  renderThumbnails(pictures);
};

export {renderGallery};
