const imgUpload = document.querySelector('.img-upload__overlay');
const fileInput = document.querySelector('.img-upload__input');
const closeImageButton = document.querySelector('.img-upload__cancel');

function closeimageUpload() {
  imgUpload.classList.add('hidden');
  document.addEventListener('keydown', escapeKey);
}

function escapeKey (ev) {
  if (ev.key === 'Escape' || ev.key === 'Esc') {
    closeimageUpload();
  }
}

function imageUpload() {
  imgUpload.classList.remove('hidden');
  document.addEventListener('keydown', escapeKey);
}

fileInput.addEventListener('change', imageUpload);
closeImageButton.addEventListener('click', closeimageUpload);
