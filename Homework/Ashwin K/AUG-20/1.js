
// 2. Write a function to find the largest element in an array.


function largest(arr=[])
{
  let larger=arr[0];

  for(i=1;i<arr.length;i++)
    {
      if(arr[i]>larger)
      larger=arr[i];
    }
    console.log(larger);
  }
  
  largest([10,20,1,34,5,10,4])


















