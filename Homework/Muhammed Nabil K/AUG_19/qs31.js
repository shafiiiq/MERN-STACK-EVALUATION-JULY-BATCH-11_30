function firstElement(arr,value){
    let first=0
    for(i=0;i<arr.length;i++)
    {
      if(arr[i]>value)
      {
        first=arr1[i]
        break
      }
    }
    console.log(first)
  }
  var arr1=[6,5,4,7,8,9]
  firstElement(arr1,6)