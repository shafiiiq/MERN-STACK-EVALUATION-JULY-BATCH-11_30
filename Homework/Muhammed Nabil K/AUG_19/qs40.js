function duplicate(arr){
    let count=0
    for(i=0;i<arr.length-1;i++)
    {
      for(j=i+1;j<arr.length;j++)
        {
          if(arr[i]==arr[j])
          {
            count++;
          }
        }
    }
    if(count>0)
    {
      console.log("contains duplicate elements")
    }
    else{
      console.log("doesn't contains duplicate elements")
    }
  }
  var arr1=[5,3,4,5]
  duplicate(arr1)