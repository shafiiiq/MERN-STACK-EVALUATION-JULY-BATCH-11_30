// 41. Write a function to count the number of elements in an array that are divisible by a given number.

var arr1=[1,2,4,4,5,6,5]

var value=2
const newarr=arr1.filter(element=>(
    element%value==0
))
console.log(newarr);
