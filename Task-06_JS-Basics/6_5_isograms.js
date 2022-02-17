let isIsogram = (str) => {
  // возвращает булев результат сравнения 
  // размера множества уникальных символов строки
  // и длины самой строки
  return new Set(str.toLowerCase()).size === str.length;
}

// ну и по традиции, коротко (совсем уж по-питоновски):
// let isIsogram = (str) => new Set(str.toLowerCase()).size === str.length;
// впрочем, в этот раз короткая запись вроде бы выглядит удачно

console.log('6.5. Изограммы');

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
console.log(isIsogram(""));