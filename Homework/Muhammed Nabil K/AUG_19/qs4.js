
function duplicate(arr){
    var a= new Set(arr)
    var arr1=Array.from(a)
    console.log(arr1)
  }
  var ar=[4,6,7,3,2,7,3,2]
  duplicate(ar)