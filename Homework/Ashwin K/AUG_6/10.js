
var prompt = require('prompt-sync')();
 var num = prompt("enter the number");
 sum = 0;
while (num > 0) {
  sum = sum+num % 10;
  num = Math.floor(num / 10)
}
console.log("The sum of the digits is:"+ sum);