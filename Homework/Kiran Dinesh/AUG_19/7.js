// 7. Write a function to rotate an array to the right by one position
function rotateArrayRight(arr) {
  last = arr.pop()
  arr.splice(0, 0, last)
  return arr
}

let arr = [2, 1, 8, 9, 15];
console.log(rotateArrayRight(arr));