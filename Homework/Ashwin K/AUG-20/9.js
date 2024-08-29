//9. Write a function to find the index of the largest element in an array.


function largest(arr)
{
  let larger=arr[0];

  for(i=0;i<(arr.length);i++)
  {
    if(arr[i]>larger)
    {
      larger=arr[i]
      index=i
    }
  }
  console.log("index of largest number " + larger+" is " + index )
}



largest([2,5,3,1,7,1,9])