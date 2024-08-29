// 44. Write a function to remove all elements from an array that are less than a given value.

var arr1=[5,2,3,7,9,]
var value=5
const newarr=arr1.filter(element=>(
    element>value
))

console.log(newarr);
