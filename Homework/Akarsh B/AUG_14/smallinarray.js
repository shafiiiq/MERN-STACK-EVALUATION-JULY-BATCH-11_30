// 2. Write a function to find the smallest element in an array.




// var arr=[2,4,6,86,75];


// function small(){
//     var smallest;
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             smallest=arr[i];
//         }
//     }
// }
// console.log(smallest);
// }

// small()

let smaller=0
function smallest(arr=[])
{
  smaller=arr[0];
  for(i=1;i<arr.length;i++)
  {
    if(arr[i]<smaller)
    {
      smaller=arr[i];
    }
  }
  return smaller;
}

smallest(num=[12,2,26,30,10])

console.log(smaller)
