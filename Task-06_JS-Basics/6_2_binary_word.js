const toBinaryTransfer = (str) => {
  // посимвольное деление строки на элементы массива (пустой разделитель)
  // маппинг каждого элемента к нужному виду
  return str.split('')
    .map((sym) => {
      // замена символа на его код (в двоичной системе счисления)
      let newEl = sym.charCodeAt().toString(2);
      // при необходимости - добивка незначащими нулями до 8 символов
      if(newEl.length < 8) {
        newEl = '0'.repeat(8 - newEl.length) + newEl;
      }     
      return newEl;  
    });
}

// код выше для избежания двойной пробежки map, например:
// const toBinaryTransfer = (str) => {
//   return str.split('')
//     .map(sym => sym.charCodeAt().toString(2))
//     .map(binStr => '0'.repeat(8 - binStr.length) + binStr);
// }
// но, лучше ли это?

console.log("6.2. Бинарное слово");

console.log(toBinaryTransfer('man'));
console.log(toBinaryTransfer('AB'));
console.log(toBinaryTransfer('wecking'));
console.log(toBinaryTransfer('Ruby'));
console.log(toBinaryTransfer('Yosemite'));