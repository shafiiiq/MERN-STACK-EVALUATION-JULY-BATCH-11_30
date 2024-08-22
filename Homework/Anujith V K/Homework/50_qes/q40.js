// Write a function to return the last n elements of an array.
var prompt = require("prompt-sync")()
function el(a = []) {
    var val = prompt("enter how many last elements needs to see = ")
    var index = (a.length) - val
    if (val <= a.length) {
        console.log(a.slice(index));
    }
    else {
        console.log("cant print");

    }
}
el([1, 2, 3, 4, 5])