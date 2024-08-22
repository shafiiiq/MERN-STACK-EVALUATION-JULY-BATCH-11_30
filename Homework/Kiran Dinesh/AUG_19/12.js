// 12. Write a function to count the number of even numbers in an array.
function findOddCount(arr) {
  let count=0
  for(i in arr){
    if(arr[i]%2==0)
      count++
  }
  console.log(count);
  
}

let arr = [2, 1, 8, 9, 15];
findOddCount(arr)
