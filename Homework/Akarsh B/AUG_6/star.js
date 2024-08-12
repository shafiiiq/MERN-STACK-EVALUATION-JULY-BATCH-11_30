// .  Write a program to print the following pattern using a loop:
//     *
//     * * 
//     * * *
//     * * * *
//     * * * * *

var prompt = require('prompt-sync')();
var num=prompt('Enter number? ');
for(i=1;i<=num;i++){
    for(j=1;j<=i;j++){
        // console.log(star)
        process.stdout.write("*");
    }
    console.log()
}