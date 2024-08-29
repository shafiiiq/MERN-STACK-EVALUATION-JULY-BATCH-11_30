// 5. Write a function to find the second largest element in an array.


var arr=[1,2,3,4,5,6,7,8]

const sorted=arr.sort((a,b)=>a-b)
console.log(sorted[(sorted.length)-2]);