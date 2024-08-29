// Write a function to reverse the elements of an array.
function reverse(arr)
{
  first=0
  last=(arr.length)-1
  while(first<last)
  {
    temp=arr[first];
    arr[first]=arr[last];
    arr[last]=temp;

    first++;
    last--;
  }

  
  console.log(arr)
}

var num=[1,2,3,4,5]
reverse(num)