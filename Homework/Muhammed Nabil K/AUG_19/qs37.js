function fstoccS(arr)
{
  var smallest=arr[0]
  index=0
  for(i=0;i<arr.length;i++)
  {
    if(arr[i]<smallest)
    {
      smallest=arr[i]
      index=i
    }
  }
  console.log("index : "+index)
}
var arr1=[3,5,6,9,8,3,1,4]
fstoccS(arr1)