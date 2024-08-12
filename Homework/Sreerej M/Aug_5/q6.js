// Write a program that checks if a given number is positive, negative, or zero.


var prompt=require("prompt-sync")();
var num=prompt("enter the number");

if(num==0)
{
  console.log("number is zero");
}

else if(num>0)
{
  console.log(num+" is positive");
}

else{
  console.log(num+" is negative");
}
