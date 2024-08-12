var prompt=require('prompt-sync')()
var n=prompt('enter the number')
for(i=1;i<=10;i++){
  mul=n*i
  console.log(n,'*',i,'=',mul)  
}
