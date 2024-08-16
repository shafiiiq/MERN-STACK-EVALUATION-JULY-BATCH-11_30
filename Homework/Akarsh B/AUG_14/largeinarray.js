// 1. Write a function to find the largest element in an array.

// var arr=[2,4,6,86,75];


// function large(){
//     var largest;
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             largest=arr[i];
//         }
//     }
// }
// console.log(largest);
// }

// large()



function largest(arr=[])
{
  let larger=arr[0];

  for(i=1;i<arr.length;i++)
  {
    if(arr[i]>larger)
    larger=arr[i];
  }
  console.log(larger);
}

largest(number=[10,2,1,34,5,10,4])