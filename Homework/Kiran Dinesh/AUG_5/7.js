var prompt=require('prompt-sync')()
var num=prompt('enter the number: ')
if(num%5==0){
  console.log(num ,'is Multiple of 5')
}else{
  console.log(num ,'is Not Multiple of 5')
}