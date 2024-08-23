// 23. Write a function to remove all even numbers from an array.

arr=[1,2,3,4,5,6]

const output=arr.filter(element=>(
    element%2!==0
))
console.log(output);