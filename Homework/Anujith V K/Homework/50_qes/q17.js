// Write a function to create an array of n numbers, all set to a specific value.
var prompt = require("prompt-sync")()
function sv(arr = []) {
    var val = prompt("enter the value = ")
    arr.forEach(Element => {
        arr.fill(val)
        console.log(arr);
    })

}
sv(n = [10, 20, 30, 40, 50, 60, 70])