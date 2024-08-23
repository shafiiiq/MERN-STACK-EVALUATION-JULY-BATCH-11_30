// 8. Write a function to rotate an array to the left by one position.
var arr=[1,2,3,4,5,6,7,7]

var first=arr.shift()
console.log(arr);

arr[arr.length]=first
console.log(arr);

