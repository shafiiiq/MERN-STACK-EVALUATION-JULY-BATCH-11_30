var prompt=require('prompt-sync')()
var grade=prompt('enter the grade: ')
if(grade>=50){
  console.log('Pass')
}else{
  console.log('Fail')
}