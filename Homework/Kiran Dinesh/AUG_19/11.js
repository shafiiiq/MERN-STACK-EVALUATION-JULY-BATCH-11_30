// 11. Write a function to return the last n elements of an array.
function getLastNElements(arr, n) {
  return arr.slice(-n);
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(getLastNElements(arr, 3));
