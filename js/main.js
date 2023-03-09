function getRandom(min, max) {
  if (min >= max) {
    return 'Пожалуйста, введите корректные данные';
  }
  return Math.random() * (max - min) + min;
}

function getLenString(lenStr, n) {
  if (lenStr.length >= n) {
    return false;
  }
  else {
    return true;
  }
}
getRandom(0, 4);
getLenString('psads', 4);
