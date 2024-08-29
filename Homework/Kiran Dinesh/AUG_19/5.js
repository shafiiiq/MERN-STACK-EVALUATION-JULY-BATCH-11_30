// 5. Write a function to find the second largest element in an array.

function secondLargest(arr) {
  large=arr.sort((a,b)=>b-a)
  return large[1]
}

let arr = [2, 1, 8, 9, 15];
console.log(secondLargest(arr));