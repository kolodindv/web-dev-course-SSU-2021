const vowelCounting = (str) => { 
  // врозвращает длину массива всех подстрок,
  // соотоветсвующих регулярному выражению 
  // new RegExp('[aeiou]', 'ig')
  let tempMatchMass = str.match(/[aeiou]/gi);
  // или нуля, если не получилось такой массив сформировать  
  return tempMatchMass ? tempMatchMass.length : 0;
  // отказался от ...input.matchAll(/[aeiou]/gi)
  // [...input.matchAll(/[aeiou]/gi)].length;
  // хоть там и не прилось бы временно хранить в переменной массив, 
  // для дальнейшей проверки на null
  // но, вероятно, работет дольше, ведь несет с собой много дополнительной
  // сопутсвующей, но ненужной информации
}

console.log("6.3. Подсчёт гласных");

console.log(vowelCounting('abracadabra'));
console.log(vowelCounting('ABRACADABRA'));
console.log(vowelCounting('o a kak ushakov lil vo kashu kakao'));
console.log(vowelCounting('my pyx'));