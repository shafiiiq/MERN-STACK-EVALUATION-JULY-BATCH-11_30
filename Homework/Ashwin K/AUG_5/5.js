
var prompt = require('prompt-sync')();
var age = prompt("enter the number");
if(age>=18)
    {
        console.log("eligible");
    }
    else{
        console.log("not eligible");
    }