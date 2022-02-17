const toTableFormat = (height, width, message) => {
  if (!Number.isInteger(height) || !Number.isInteger(width) || height <= 0 || width <= 0) {
    return 'Invalid input';
  } else {
    let result = '+---'.repeat(width) + '+\n'; 
    for(let i = 0; i < height; i++) {
      for(let j = 0; j < width; j++) {
        if (i * width + j < message.length){
          result += `| ${message[i * width + j]} `;
        } else {
          result += '|   ';
        }
      }
      result += '|\n' + '+---'.repeat(width) + '+\n';
    }
    return result;
  }
}

console.log('7.2. Форматирование строки в таблицу ');

console.log(toTableFormat(4, 4, "Hello World!"));
console.log(toTableFormat(4, 3, "Nice pattern"));
console.log(toTableFormat(3, 4, "Nice pattern"));
console.log(toTableFormat(0, 0, "Nice pattern"));
console.log(toTableFormat(1, 1, "Nice pattern"));
console.log(toTableFormat(3, 3, ''));