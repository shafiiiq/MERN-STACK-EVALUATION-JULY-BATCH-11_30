// Write a function to find the index of the last occurrence of a specific value in an array.
var prompt = require("prompt-sync")()
function occ(arr = []) {
    var index = 0
    var val = prompt("enter the value")
    let count = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            index = i
        }

    }
    console.log(index);
}
occ(n = [1, 2, 3, 4, 5, 2])