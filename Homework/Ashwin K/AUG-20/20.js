// 20. Write a function to find the sum of all even numbers in an array.

function summ(arr)
{
  let sum=0;
  for(i=0;i<arr.length;i++)
  {
    if(arr[i]%2==0)
    {
      sum=sum+arr[i]
    }
  }
  console.log(sum)
}

summ([2,4,1,3,8,12])