
// 6. Write a function to find the first occurrence of a value in an array.


function Occurence(arr,target)
{
  for(i=0;i<(arr.length)-1;i++)
  {
    if(arr[i]===target){
      console.log("first occurence of "+ arr[i] +"is at position "+ i);
      break;
    }
  }
}

var num=[2,4,26,7,32,2,41];
Occurence(num,7)