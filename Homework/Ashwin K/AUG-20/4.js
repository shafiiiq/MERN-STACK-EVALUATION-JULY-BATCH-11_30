// 4. Write a function to count the number of times a specific value appears in an array.

function occur(arr,value)
{
  let count=0;
  for(i=0;i<arr.length;i++)
  {
    if(arr[i]== value)
    {
      count++;
    }
  }
  console.log(count)
}

occur(num=[1,3,5,2,3,8,4,3,6,7,3,2,1],3)