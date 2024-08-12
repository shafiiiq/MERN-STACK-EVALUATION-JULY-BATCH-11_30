var prompt = require('prompt-sync')();
var num=prompt('Enter number? ');
for(i=num;i<=1;i--){
    for(j=1;j<=i;j++){
        // console.log(star)
        process.stdout.write("*");
    }
    console.log()
}