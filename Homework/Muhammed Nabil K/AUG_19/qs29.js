function concatenateString(arr){
    var string=[]
    for(i in arr)
    {
      string=string+arr[i]
    }
  
    console.log(string)
  }
  
  var arr1=['mohammad','nabil','k']
  concatenateString(arr1)