function sum(arr=[])
{
  var s=0;
  for(i=0;i<arr.length;i++)
  {
    if(arr[i]%2==0)
    {
      s+=arr[i]
    }
  }
  console.log(s)
}
sum(n=[10,20,30,40,50])