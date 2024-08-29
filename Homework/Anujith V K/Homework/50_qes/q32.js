// Write a function to remove the element at a specific index from an array.
var prompt = require("prompt-sync")()
function ins(a = []) {
    var val = prompt("enter the index = ")
    a.splice(val, 1)
    console.log(a);

}
ins(n = [1, 2, 3, 4])