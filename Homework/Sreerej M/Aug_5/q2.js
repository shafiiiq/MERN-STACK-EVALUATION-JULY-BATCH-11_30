// Write a program that checks if a given number is even or odd
var prompt = require('prompt-sync')();
var num= prompt("enter the number");


if(num%2==0)
{
  console.log(num +"is Even")
}

else{
  console.log(num +"is Odd")
}