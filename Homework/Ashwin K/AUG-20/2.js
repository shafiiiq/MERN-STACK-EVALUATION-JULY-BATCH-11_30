// 2. Write a function to find the smallest element in an array.





function smallest(arr=[])
{
  let smaller=arr[0];

  for(i=1;i<arr.length;i++)
    {
      if(arr[i]<smaller)
      smaller=arr[i];
    }
    console.log(smaller);
  }
  
  smallest([10,20,1,34,5,10,4])