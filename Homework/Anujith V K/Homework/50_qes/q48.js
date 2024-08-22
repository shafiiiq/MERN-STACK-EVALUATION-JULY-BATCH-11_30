// Write a function to count how many elements in an array are greater than a given number.
var prompt = require("prompt-sync")()
function cou(a = []) {
    var num = prompt("enter the number = ")
    var count = 0
    for (i = 0; i < a.length; i++) {
        if (a[i] > num) {
            count++
        }
    }
    console.log(count);

}
cou([1, 6, 4, 3, 6, 8, 44, 3, 2, 1, 9])