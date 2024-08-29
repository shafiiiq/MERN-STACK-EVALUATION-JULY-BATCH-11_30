function rotateRight(arr){
    last=arr.pop()
    arr.splice(0,0,last)
    console.log(arr);
    
  }
  
  var arr1=[4,5,6,7,8,9,1]
  rotateRight(arr1)