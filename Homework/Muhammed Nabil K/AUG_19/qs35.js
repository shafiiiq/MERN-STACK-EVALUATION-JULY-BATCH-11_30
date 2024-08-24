function productCal(arr){
    var prdt=1
    for(i=0;i<arr.length;i++)
    {
      prdt=prdt*arr[i]
    }
  
    console.log("product : "+prdt)
  }
  
  var arr1=[3,6,9]
  productCal(arr1)