let arr2 = [23, 2, 6, 5, 5, 7, 9, 0, 1]
let arr1 = [1, 2, 6, 5, 5, 2, 2]
let arr = []
function arrayMul(arr1, arr2) {
  if (arr1.length == arr2.length) {
    for (i = 0; i < arr1.length; i++) {
      arr = arr1[i] * arr2[i]
      process.stdout.write(arr.toString() + ' ');
    }
  }else{
    if(arr1.length>arr2.length){
      for (i = 0; i < arr2.length; i++) {
        arr = arr1[i] * arr2[i]
        process.stdout.write(arr.toString() + ' ');
      }
      for (i = arr2.length; i < arr1.length; i++) {
        process.stdout.write(arr1[i].toString() + ' ');
      }
       
    }else{
      for (i = 0; i < arr1.length; i++) {
        arr = arr1[i] * arr2[i]
        process.stdout.write(arr.toString() + ' ');
      }
      for (i = arr1.length; i < arr2.length; i++) {
        process.stdout.write(arr2[i].toString() + ' ');
      }
      
    }
  }
}
arrayMul(arr1, arr2)

