// 10.  Write a program that checks if a given number is within the range of 1 to 100 and prints "Within Range" if it is, otherwise print "Out of Range".
var prompt = require('prompt-sync')();
var num=prompt('Enter number? ');
if(num>0 && num<=100){
    console.log(num+" number is within the range of 1-100");
}else{
    console.log(num+" number is Out of range");
}