// Write a function to find the last element in an array that is less than a given value.
var prompt = require("prompt-sync")()
function fi(arr = []) {
    var value = prompt("enter the value = ")
    var newarr = arr.filter(item => item < value)
    console.log(newarr[newarr.length - 1]);

}
fi(n = [3, 4, 5, 1, 6, 7, 5, 7, 6])