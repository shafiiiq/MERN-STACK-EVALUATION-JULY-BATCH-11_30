// 39. Write a function to swap the first and last elements of an array.

var arr=[1,2,3,5,5,5,7,6]

temp=arr[0]
arr[0]=arr[arr.length-1]
arr[arr.length-1]=temp

console.log(arr);
