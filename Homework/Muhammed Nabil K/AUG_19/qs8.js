function rotateLeft(arr){
    var first=arr.shift()
    arr[arr.length]=first
    console.log(arr)
}
var arr1=[7,3,4,5,6]
rotateLeft(arr1)
