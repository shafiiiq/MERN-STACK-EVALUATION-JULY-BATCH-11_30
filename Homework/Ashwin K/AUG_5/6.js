
var prompt = require('prompt-sync')();
var num = prompt("enter the number");
if(num==0)
    {
        console.log("number is zero");
    }
    else if(num<0){
        console.log("number is negetive");
    }
    else{
        console.log("number is positive");
    }