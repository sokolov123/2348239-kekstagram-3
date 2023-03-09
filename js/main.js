function getRandom(min, max) {
  if (min >= max) {
    return 'Пожалуйста, введите корректные данные';
  }
  return  Math.floor(Math.random() * (max - min) + min);
}

const data = [];
let i = 1;
for (i = 1; i < 26; i++) {
  data.push({id: i, url: `photos/${i}.jpg`, description: photoDescription(), likes: getRandom(15, 200), comments: getRandom(0, 200)});
}

//пусть будет так, чтобы были рандомные описания фото
function photoDescription() {
  const comments = ['ничоси', 'прикольная фотка', 'интересненько', 'я комментарий', 'крутая фотокарточка',
    'Виталь, ты же говорил ты в командировке', 'так им и надо', 'не ну вы посмтрите на это...', 'делааааа.....'];
  return comments[getRandom(0, 8)];
}
