const toflatSortArray = (arr) => {
  arr.flat(1)
    // благодаря особенностям compareFunction, которая смотрит относительно:
    // ноль/больше ноля/меньше ноля, возможно следующее:
    .sort((a, b) => a - b);
}

console.log("6.1. Плоский массив");

console.log(toflatSortArray([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
console.log(toflatSortArray([]));
console.log(toflatSortArray([[], []]));
console.log(toflatSortArray([[], [1]]));
console.log(toflatSortArray([[1, 3, 5], [-100], [2, 4, 6]]));