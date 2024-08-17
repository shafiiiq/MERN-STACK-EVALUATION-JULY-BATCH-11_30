// Write a function to find the first occurrence of a value in an array.


function occurence(arr,value)
{
  for(i=0;i<(arr.length)-1;i++)
  {
    if(arr[i]===value){
      console.log("first occurence of "+ arr[i] +"is at position "+ i);
      break;
    }
  }
}

var num=[1,4,6,8,3,2,4];
occurence(num,2)