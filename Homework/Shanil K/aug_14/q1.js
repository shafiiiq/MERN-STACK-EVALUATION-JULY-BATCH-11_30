function largest(arr=[])
{
  let large=arr[0];

  for(i=1;i<arr.length;i++)
  {
    if(arr[i]>large)
    large=arr[i];
  }
  console.log(large);
}

largest(number=[10,20,1,34,5,100,4])