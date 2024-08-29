function lastElement(arr,value)
{
 let last=arr[0]
  for(i=arr.length;i>0;i--)
  {
    if(arr[i]<value)
    {
      last=arr[i]
      break
    }
  }
  console.log(last)
}
var arr1=[2,4,5,9,7,8,1,4]
lastElement(arr1,4)
