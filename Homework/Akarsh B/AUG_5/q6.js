// Write a program that checks if a given number is positive, negative, or zero.
var prompt = require('prompt-sync')();
var num=prompt('Enter number? ');
// const num=12;
if(num<0){
    console.log("Negative")
}else if(num>0){
    console.log("positive")
}else{
    console.log("zero")
}