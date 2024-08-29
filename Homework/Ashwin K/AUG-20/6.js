// Write a function to find the first occurrence of a value in an array.


function occur(arr,value)
{
  for(i=0;i<(arr.length);i++)
  {
    if(arr[i]===value)
    console.log("first occurence of " + arr[i] + "  is at position "+ i);
  }
}


occur([2,4,6,7,3,2,4],7)