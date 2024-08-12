var prompt=require('prompt-sync')()
var num=prompt('enter a number: ')
if(num%2==0){
  console.log(num,'is even')
}else{
  console.log(num,'is odd')
}