// 4.  Write a program to reverse a given string using a loop.
var prompt = require('prompt-sync')();
var string=prompt('Enter string? ');
var ch=" ";
for(i=(string.length)-1;i>=0;i--){
   ch=ch+string[i];
   
}
console.log(ch);
