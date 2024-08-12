var prompt=require('prompt-sync')()
var num=prompt('enter a number: ')
if(num>0){
  console.log(num,'is positive')
}else if(num==0){
  console.log(num,'is zero')
}else{
  console.log(num,'is negative')
}