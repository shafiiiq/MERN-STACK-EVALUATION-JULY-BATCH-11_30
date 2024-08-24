function lastocc(arr,val){
    var index=0
    for(i=0;i<arr.length;i++)
    {
      if(arr[i]==val)
      {
        index=i
      }
    }
    console.log("index : "+ index)
  }
  
  var arr1=[1,2,5,0,7,6,9,3]
  lastocc(arr1,6)