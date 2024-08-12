var prompt=require('prompt-sync')()
var age=prompt('enter the grade: ')
if(age>=18){
  console.log('Eligible')
}else{
  console.log('Not Eligible')
}