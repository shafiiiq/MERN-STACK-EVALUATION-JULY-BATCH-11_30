// Write a function to find the smallest element in an array.

let smaller=0
function smallest(arr=[])
{
  smaller=arr[0];
  for(i=1;i<arr.length;i++)
  {
    if(arr[i]<smaller)
    {
      smaller=arr[i];
    }
  }
  return smaller;
}

smallest(num=[12,3,56,108,10])

console.log(smaller)