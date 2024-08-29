
function occurence(arr,value)
{
  flag=0;
  for(i=0;i<(arr.length)-1;i++)
  {
    if(arr[i]===value){
     flag=1
     break 

    }
   
  }

  if(flag==1)
  {
    console.log( value +" is present  at position "+ i);
  }
  else{
    console.log( value+" is not present in the array");
  }
}

var num=[2,4,6,7,3,2,4];
occurence(num,6)
occurence(num,8)
