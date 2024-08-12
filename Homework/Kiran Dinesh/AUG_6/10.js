var prompt=require('prompt-sync')()
var digit=prompt('enter the digit ')
var n=digit.length
sum=0
for(i=0;i<n;i++){
  sum=sum+digit%10
  digit=parseInt(digit/10) 
  
}
console.log(sum)