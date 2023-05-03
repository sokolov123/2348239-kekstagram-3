const imgUpload = document.querySelector('.img-upload__overlay');
const fileInput = document.querySelector('.img-upload__input');
const closeImageButton = document.querySelector('.img-upload__cancel');

function closeImageUpload() {
  imgUpload.classList.add('hidden');
  document.addEventListener('keydown', escapeKey);
}

function openImageUpload() {
  imgUpload.classList.remove('hidden');
  document.addEventListener('keydown', escapeKey);
}

function escapeKey (ev) {
  if (ev.key === 'Escape' || ev.key === 'Esc') {
    closeImageUpload();
  }
}

fileInput.addEventListener('change', openImageUpload);
closeImageButton.addEventListener('click', closeImageUpload);
