import {renderPhotos} from './renderPhotos.js';
import {getData} from './data.js';
import './BigPicture.js';

const usersNum = 25;

const photos = getData(usersNum);

renderPhotos(photos);
