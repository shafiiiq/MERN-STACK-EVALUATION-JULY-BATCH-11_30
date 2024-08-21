// 15. Write a function to sort an array in descending order.


function sort(arr)
{
  for(i=0;i<arr.length;i++)
  {
    for(j=0;j<arr.length-i-1;j++)
    {
      if(arr[j]<arr[j+1])
        {
          temp=arr[j]
          arr[j]=arr[j+1]
          arr[j+1]=temp
        }
    }
    
  }

  console.log(arr)
}

num=[31,3,4,5,6,4,1,2,8,51,11,0]
sort(num)