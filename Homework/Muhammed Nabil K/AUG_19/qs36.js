function fstoccL(arr){
    var largest=arr[0]
    var index=0
    for(i=0;i<arr.length;i++)
    {
      if(arr[i]>largest)
      {
        largest=arr[i]
        index=i
      }
    }
    console.log("index :"+index)
  }
  var arr1=[3,5,6,9,8,3,1,4]
  fstoccL(arr1)