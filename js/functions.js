export function getRandom(min, max) {
  if (min >= max) {
    return -1;
  }
  return  Math.floor(Math.random() * (max - min) + min);
}
const comments = ['ничоси', 'прикольная фотка', 'интересненько', 'я комментарий', 'крутая фотокарточка',
  'Виталь, ты же говорил ты в командировке', 'так им и надо', 'не ну вы посмтрите на это...', 'делааааа.....', 'првиет'];

export function getPhotoDescription() {
  return comments[getRandom(0, 9)];
}
