var prompt = require('prompt-sync')();
var num = prompt("enter the number");
for(i=(num.length)-1;i>=0;i--){
    process.stdout.write(num[i])
}