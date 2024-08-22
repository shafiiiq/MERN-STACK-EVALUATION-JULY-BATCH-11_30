// 9. Write a function to find the sum of all odd numbers in an array.
function findOddsum(arr) {
  let sum=0
  for(i in arr){
    if(arr[i]%2!=0)
      sum+=arr[i]
  }
  return sum
  
}

let arr = [2, 1, 8, 9, 15];
console.log(findOddsum(arr));
 


