// 10. Write a function to find the index of the smallest element in an array.

function smallest(arr)
{
  let smaller=arr[0];

  for(i=0;i<arr.length;i++)
  {
    if(arr[i]<smaller)
    {
      smaller=arr[i]
      index=i
    }
  }
  console.log("index of smallest number " + smaller+" is " + index )
}

num=[3,6,5,1,8,9]
smallest(num)