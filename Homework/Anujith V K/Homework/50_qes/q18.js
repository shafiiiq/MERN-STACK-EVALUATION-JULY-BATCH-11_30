// Write a function to create an array of n random numbers.
var prompt = require("prompt-sync")()
function rand() {
    var length = prompt("enter the length = ")
    var arr = []
    for (i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    console.log(arr);
}
rand()