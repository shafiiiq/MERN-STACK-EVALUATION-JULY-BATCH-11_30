// 6. Write a function to find the second smallest element in an array.
function secondSmallest(arr) {
  small=arr.sort((a,b)=>a-b)
  return small[1]
}

let arr = [2, 1, 8, 9, 15];
console.log(secondSmallest(arr));