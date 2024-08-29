// 20. Write a function to find the sum of all even numbers in an array.

function sum(arr)
{
  let s=0;
  for(i=0;i<arr.length;i++)
  {
    if(arr[i]%2==0)
    {
      s=s+arr[i]
    }
  }
  console.log(s)
}


num=[2,4,3,5,6,7,9,8,12]
sum(num)