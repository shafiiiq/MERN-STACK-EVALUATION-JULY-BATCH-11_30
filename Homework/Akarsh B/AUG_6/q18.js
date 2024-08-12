// 8. Write a program to print the first 10 numbers in the Fibonacci sequence using a loop.
a=1;
b=0;
c=0;
for(i=0;i<10;i++){
    console.log(c);
    b=a; //b=1
    a=c; //a=0
    c=a+b; //c=0+1
}