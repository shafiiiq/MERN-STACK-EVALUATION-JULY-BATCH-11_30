// 8. Write a program to print the first 10 numbers in the Fibonacci sequence using a loop.

var a=1
var b=0
var c=0;

for(i=0;i<10;i++)
{
  console.log(c);
  b=a;
  a=c;
  c=a+b;
 

}