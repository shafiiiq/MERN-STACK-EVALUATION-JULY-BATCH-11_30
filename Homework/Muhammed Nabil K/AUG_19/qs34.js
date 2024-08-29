function nArray(arr,value){
    n=arr.forEach(element => {
     element=arr.fill(value)
    });
    console.log(arr)
  }
  
  var arr1=[1,2,3,4,5]
  nArray(arr1,7)