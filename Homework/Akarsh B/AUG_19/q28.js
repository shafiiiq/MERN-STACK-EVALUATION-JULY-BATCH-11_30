// 28. Write a function to find the shortest string in an array of strings.

// var arr=['hello','hi','done']

// const output=arr.map(elements=>(
//     elements.split('')
// ))
// shortest=''
// for(i in output){
//     if(output[i]<shortest){
//         shortest=output[i];
//     }
// }
// console.log(shortest)

function short(arr){
    let low=[]
    let string=[]
    var output= arr.map(element =>(
      element.split('')
    ))
    console.log(output)
    short_index=0
    low=output[0]
    for(i in output)
    {
      if(output[i].length<output[short_index].length)
      {
        short_index=i
       low=output[i]
      }
    }
  
    for(i=short_index;i<output.length;i++)
    {
      if(output[i].length==output[short_index].length)
      {
        low=output[i]
        console.log(low.join(''))
      }
    }
  }
  
  var ar=['akarsh','raj','sm','pr','swe','sql']
  short(ar)