// 5.  Write a program to count the number of digits in a given number using a loop.
var prompt = require('prompt-sync')();
var num=prompt('Enter number? ');
count=0;
for(i=1;i<=num.length;i++){
    count=i
}
console.log(count)