// 2. Write a function to check if all elements in an array are positive.


function positive(arr){
  var flag=0
  for(i=0;i<arr.length;i++)
  {
    if(arr[i] <= 0)
    {
      flag=1
    }
  }

  if(flag==0)
  {
    console.log("array contains only positive elements");
  }
  else{
    console.log("array contains zeroes or negatives");
    
  }
}

var ar=[2,3,7,5,-2]
positive(ar)