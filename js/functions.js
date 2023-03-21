export function getRandom(min, max) {
  if (min >= max) {
    return 'Пожалуйста, введите корректные данные';
  }
  return  Math.floor(Math.random() * (max - min) + min);
}

//пусть будет так, чтобы были рандомные описания фото
export function photoDescription() {
  const comments = ['ничоси', 'прикольная фотка', 'интересненько', 'я комментарий', 'крутая фотокарточка',
    'Виталь, ты же говорил ты в командировке', 'так им и надо', 'не ну вы посмтрите на это...', 'делааааа.....', 'првиет'];
  return comments[getRandom(0, 9)];
}
