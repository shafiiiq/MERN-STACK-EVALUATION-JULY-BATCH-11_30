// 4. Write a function to remove duplicate values from an array.

function duplicate(arr) {
  var arr1 = new Set(arr)
  var newarr = Array.from(arr1)
  return newarr
}

let arr = [2, 1, 8, 9, 15, 1, 4, 5, 5, 5, 5];
console.log(duplicate(arr));