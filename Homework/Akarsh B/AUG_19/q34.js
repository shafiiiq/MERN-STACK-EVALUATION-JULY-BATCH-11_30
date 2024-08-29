// 34. Write a function to create an array of n numbers, all set to a specific value.
var arr=[20,40,50,4]
value=5
const output=arr.forEach(element=>{
    arr.fill(value)
})
console.log(arr);
