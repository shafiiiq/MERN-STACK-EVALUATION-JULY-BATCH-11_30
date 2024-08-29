//  Write a function to find the difference between the largest and smallest elements in an array.


function diff(arr)
{
  let larger=arr[0]
  let smaller=arr[0]
  
  for(i=0;i<arr.length;i++)
  {
    if(arr[i]>larger)
    {
      larger=arr[i]
    }
    
    if(arr[i]<smaller)
    {
      smaller=arr[i]
    }
  }

  console.log(larger-smaller)
}

num=[2,3,1,9,6,4,5]

diff(num)