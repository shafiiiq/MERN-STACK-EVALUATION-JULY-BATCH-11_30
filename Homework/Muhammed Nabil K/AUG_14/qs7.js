// Write a function to check if an array contains a specific value.


function occurence(arr,value)
{
  flag=0;
  for(i=0;i<(arr.length)-1;i++)
  {
    if(arr[i]===value){
     flag=1
     break 

    }
    // else{
    //   console.log( arr[i] +"is present  at position "+ i);

    // }
  }

  if(flag==1)
  {
    console.log( value +" is present  at position "+ i);
  }
  else{
    console.log( value+" is not present in the array");
  }
}

var num=[2,4,6,7,3,2,1];
occurence(num,5)
occurence(num,4)