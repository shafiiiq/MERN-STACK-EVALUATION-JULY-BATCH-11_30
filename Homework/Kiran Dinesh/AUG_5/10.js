var prompt=require('prompt-sync')()
var num=prompt('enter the grade: ')
if(num>=18){
  console.log('Eligible')
}else{
  console.log('Not Eligible')
}