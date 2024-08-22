// 8. Write a function to rotate an array to the left by one position.
function rotateArrayLeft(arr) {
  var first=arr.shift()
  arr[arr.length]=first
  return arr
}

let arr = [2, 1, 8, 9, 15];
console.log(rotateArrayLeft(arr));