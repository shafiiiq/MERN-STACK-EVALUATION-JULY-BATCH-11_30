// 7. Write a function to rotate an array to the right by one position.

var arr=[1,2,3,4,5,6,7,7]

var last=arr.pop()
console.log(arr);

arr.splice(0,0,last)
console.log(arr);