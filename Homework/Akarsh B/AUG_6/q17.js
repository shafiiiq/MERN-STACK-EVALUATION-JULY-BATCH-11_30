// 7. Write a program to print all prime numbers between 1 and 100 using a loop.

for(i=2;i<=100;i++){
    let isprime=true;
    for(j=2;j<=(i/2);j++){
       if(i%j===0){
        isprime=false;
        break;
       }
    }
    if(isprime){
        console.log(i);
    }
}