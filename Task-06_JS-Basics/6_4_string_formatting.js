const toNewStringFormat = (str) => {
  return str.split('')
    // каждый символ приводится к виду:
    // {Символ в верхнем регистре}{Символ в нижнем регистре повторенный {порядковый номер символа} раз} 
    .map((cur, ind) => {     
      return cur.toUpperCase() + cur.toLowerCase().repeat(ind);
    })
    // приведения массива к строке путем конкатенации с разделителем '-'
    .join('-')
} 

// Или могу ее вот так написать, супер-коротко)
// let toNewStringFormat = (str) => str.split('')
//   .map((cur, ind) => cur.toUpperCase() + cur.toLowerCase().repeat(ind))
//   .join('-');

console.log("6.4. Форматирование строки");

console.log(toNewStringFormat('abcd'));
console.log(toNewStringFormat('RqaEzty'));
console.log(toNewStringFormat('cwAt'));