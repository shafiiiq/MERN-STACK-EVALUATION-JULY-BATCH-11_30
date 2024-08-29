// Write a function to return the first n elements of an array.
var prompt = require("prompt-sync")()
function el(a = []) {
    var val = prompt("enter how many first elements needs to see = ")
    if (val <= a.length) {
        console.log(a.slice(0, val));
    }
    else {
        console.log("cant print");

    }
}
el([1, 2, 3, 4, 5])