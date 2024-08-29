function randonNumber(){
  var arr=[]
  var prompt=require('prompt-sync')()
  var num=prompt("enter the number : ")
  for(i=0;i<num;i++)
  {
    arr[i]= Math.floor(Math.random()*100)
  }
  console.log(arr)
}
randonNumber()

