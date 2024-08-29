// 3. Write a function to count how many elements in an array are greater than a given number.
function greater(arr) {
  let count=0
  let n=8
  for(i in arr){
    if(arr[i]>n)
      count++
  }
  return count
  
}

let arr = [2, 1, 8, 9, 15];
console.log(greater(arr));
 