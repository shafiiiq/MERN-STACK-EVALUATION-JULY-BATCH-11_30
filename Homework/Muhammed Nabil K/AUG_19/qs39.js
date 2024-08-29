function swapArray(arr){
    temp=arr[0]
    arr[0]=arr[arr.length-1]
    arr[arr.length-1]=temp
    console.log(arr)
  }
  arr1=[9,6,7,8,5]
  swapArray(arr1)