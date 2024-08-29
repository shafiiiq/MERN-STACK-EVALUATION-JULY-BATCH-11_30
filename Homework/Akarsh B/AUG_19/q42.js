// 42. Write a function to find the sum of elements in an array that are greater than a given value.
 
var arr1=[1,2,3,4,5,6,5]

var value=2
const newarr=arr1.filter(element=>(
    element>value
))
let sum=0
for(i in newarr)[
    sum=sum+newarr[i]
]

console.log(sum);