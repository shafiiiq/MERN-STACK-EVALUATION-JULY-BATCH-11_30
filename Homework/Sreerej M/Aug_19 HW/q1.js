// 1. Write a function to find the average of all elements in an array.


function average(arr){
  let avg=0
  for(i=0;i<arr.length;i++)
  {
    avg=avg+arr[i]
  }

  avg=avg/(arr.length)
  console.log(avg)
}

var ar=[2,3,5,6]
average(ar)