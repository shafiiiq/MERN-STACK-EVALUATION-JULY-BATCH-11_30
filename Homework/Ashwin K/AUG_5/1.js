var prompt = require('prompt-sync')();
var age = prompt("enter the age");

if (age >= 65) {
    console.log("Old");
} else if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Young");
} else {
    console.log("Child");
   }