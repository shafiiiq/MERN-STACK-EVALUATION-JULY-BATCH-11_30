var prompt = require('prompt-sync')();
var str=prompt("enter the string")

let revstring="";
for (let i = str.length - 1; i >= 0; i--){
  revstring+=str[i]
}
  console.log(revstring)
  


