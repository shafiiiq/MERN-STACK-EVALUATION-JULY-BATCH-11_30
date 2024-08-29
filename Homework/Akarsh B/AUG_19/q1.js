// 1. Write a function to find the average of all elements in an array.
var ar=[1,3,7,3,2,7,5,7]

l=ar.length
sum=0
const output=ar.map(element=>(
    sum=sum+element
))
avg=sum/l
console.log("average : "+avg);
