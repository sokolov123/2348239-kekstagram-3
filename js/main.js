import { getData, sendData } from './API.js';
import { showAlert } from './util.js';
import { renderGallery } from './renderPhotos.js';
import { renderForm, setOnFormSubmit, hideModal } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch (error) {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}

renderForm();

// подвигать структуру
// объенить некоторые файлы, чот их много
// если я забыл это удалить, то это заметки для меня
