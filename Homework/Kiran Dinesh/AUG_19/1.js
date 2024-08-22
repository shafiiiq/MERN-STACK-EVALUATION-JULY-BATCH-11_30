// 1. Write a function to find the average of all elements in an array.
function average(arr) {
  l=arr.length
  sum=0
  arr.map(element=>(
   sum+=element
  ))
  return sum/2
  
}

let arr = [2, 1, 8, 9, 15];
console.log(average(arr));
 