// Write a program that checks if a given number is even or odd.
var prompt = require('prompt-sync')();
var num=prompt('Enter number? ');
// const num=27;
if(num%2==0){
    console.log(num+" is even");
}else{
    console.log(num+" is odd");
}