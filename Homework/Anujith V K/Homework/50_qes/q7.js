// Write a function to remove all elements from an array that are less than a given value.
var prompt = require("prompt-sync")()
function rem(arr = []) {
    var vl = prompt("enter the value= ")
    const newarr = arr.filter(item => item > vl)
    console.log(newarr);
}
rem(n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])