const toPhoneNumberFormat = (arr) => {
    if (!Array.isArray(arr) || arr.length != 10 || !arr.every(el => Number.isInteger(el) && el >= 0 && el <= 9)) {
        return "Invalid input";
    } else {
        //let a = arr;
        //return '+7 (' + a[0]+a[1]+a[2] +') ' + a[3]+a[4]+a[5] +'-' + a[6] + a[7] + '-' + a[8] + a[9];
        
        //let format = ['+7 (', '','','', ') ', '', '', '', '-', '', '', '-','',''];

        let a = arr.join('');        
        return `+7 (${a.slice(0, 3)}) ${a.slice(3, 6)}-${a.slice(6, 8)}-${a.slice(8, 10)}`;        
    }
}

console.log("7.1. Форматирование телефонного номера");
console.log(toPhoneNumberFormat([9, 0, 0, 1, 1, 1, 2, 2, 3, 3]));
console.log(toPhoneNumberFormat([9, 2, 7, 5, 5, 5, 6, 6, 9, 0]));
console.log(toPhoneNumberFormat([1, 2, 3, 4, 5, 6, 7, 8, 9, -11]));
console.log(toPhoneNumberFormat([]));
console.log(toPhoneNumberFormat("aw93fha="));