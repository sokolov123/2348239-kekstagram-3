import { getPhotos } from './data.js';
import { renderGallery } from './renderPhotos.js';
import { renderForm } from './form.js';

renderForm();
renderGallery(getPhotos());
