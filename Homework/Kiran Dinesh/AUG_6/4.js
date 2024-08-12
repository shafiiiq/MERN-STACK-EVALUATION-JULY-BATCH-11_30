var prompt=require('prompt-sync')()
var string=prompt('enter the string ')
var n=string.length
rev=""
for(i=n-1;i>=0;i--){
  rev+=string[i]
  
}
console.log(rev)