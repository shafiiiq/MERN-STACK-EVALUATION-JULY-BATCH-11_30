var prompt=require('prompt-sync')()
var n=prompt('enter the number')
let fact = 1;
    for (i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log(fact);