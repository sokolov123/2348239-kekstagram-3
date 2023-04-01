const pictureElement = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content.querySelector('.picture');

const pictureInfoElement = picture.querySelector('.picture__info');


export function renderPhotos(photos) {
  const pictureFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const photoElement = renderPhoto(photo);
    pictureFragment.appendChild(photoElement);
  });
  pictureElement.appendChild(pictureFragment);
}

function renderPhoto (photo) {
  const pctElement = picture.cloneNode(true);
  const pictInfo = pictureInfoElement.cloneNode(true);
  pctElement.querySelector('.picture__img').src = photo.url;
  pictInfo.querySelector('.picture__likes').textContent = photo.likes;
  pictInfo.querySelector('.picture__comments').textContent = photo.comments;
  pctElement.appendChild(pictInfo);
  return pctElement;
}
