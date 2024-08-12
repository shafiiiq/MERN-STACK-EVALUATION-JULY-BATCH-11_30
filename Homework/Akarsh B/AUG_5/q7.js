// Write a program to check if a given number is a multiple of 5. Print "Multiple of 5" if it is, otherwise print "Not a multiple of 5".

var prompt = require('prompt-sync')();
var num=prompt('Enter number? ');
if(num%5==0){
    console.log(num +" is multiple of 5")
}else{
    console.log(num +" is not a multiple of 5")
}