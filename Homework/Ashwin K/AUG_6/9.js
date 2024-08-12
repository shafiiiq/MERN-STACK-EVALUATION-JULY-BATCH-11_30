var prompt = require('prompt-sync')();
var num = prompt("enter the number");
for(i=1;i<=num;i++)
{
    for(j=num;j>=i;j--){

        process.stdout.write("*")
        
    }
    console.log()
}