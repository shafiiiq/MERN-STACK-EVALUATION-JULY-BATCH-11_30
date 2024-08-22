// Write a function to insert a new element at a specific index in an array.
var prompt = require("prompt-sync")()
function ins(a = []) {
    var val = prompt("enter the index = ")
    var el = prompt("enter the element")
    a.splice(val, 0, el)
    console.log(a);

}
ins(n = [1, 2, 3, 4])