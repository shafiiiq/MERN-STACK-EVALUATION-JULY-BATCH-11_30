function sameArray(arr1,arr2){
    flag=0
    for(i=0;i<arr1.length;i++)
    {
      if(arr1[i] != arr2[i])
      {
        flag=1
      }
    }
    if(flag==0)
    {
      console.log("equal array")
    }
    else{
      console.log("unequal array")
    }
  }
  var arr1=[4,5,6,7,9]
  var arr2=[4,5,6,7,8]
  sameArray(arr1,arr2)