// Write a function to calculate the sum of all elements in an array.


function sum(arr)
{
  let s=0;

  for(i=0;i<arr.length;i++)
  {
    s=s+arr[i];
  }
  console.log(s)
}

var num=[2,12,10,13]

sum(num)