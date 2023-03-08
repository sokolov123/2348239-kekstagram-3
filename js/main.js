function getRandom(min, max) {
  if (min >= max) {
    console.log('Пожалуйста, введите корректные данные');
    return -1; //функция вернёт -1 как заведомо невозможное число
  }
  return Math.random() * (max - min) + min;
}

console.log(Math.round(getRandom(1, 10000)));


function getLenString(lenStr, n) {
  if (lenStr.length >= n) {
    return false;
  }
  else {
    return true;
  }
}


console.log(getLenString('adfsadfbadrhh', 33));
