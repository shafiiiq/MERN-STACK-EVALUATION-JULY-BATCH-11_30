// 8. Write a program to check if a given character is a vowel (a, e, i, o, u) or not.


var prompt=require('prompt-sync')();
var ch=prompt("enter the character:");

if(ch=='a' || ch=='A' || ch=='e' || ch=='E' || ch=='i' || ch=='I' || ch=='o' || ch=='O' || ch=='u' || ch=='U')
{
  console.log(ch +" is a vowel");
}

else{
  console.log(ch +" is not a vowel");
}