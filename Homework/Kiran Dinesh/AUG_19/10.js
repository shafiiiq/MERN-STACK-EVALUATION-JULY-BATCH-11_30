// 10. Write a function to return the first n elements of an array.

function getFirstNElements(arr, n) {
  return arr.slice(0,n);
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(getFirstNElements(arr, 3));
