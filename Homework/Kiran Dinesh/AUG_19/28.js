// 28. Write a function to find the shortest string in an array of strings.
let arr1 = ['ram1', 'rom', 'rom', 'rim1', 'ring1']
function short(arr1){
  let lowest=[]
  var output= arr1.map(element =>(
    element.split('')
  ))
  short_index=0
  lowest=output[0]
  for(i in output)
  {
    if(output[i].length<output[short_index].length)
    {
      short_index=i
     lowest=output[i]
    }
  }

  for(i=short_index;i<output.length;i++)
  {
    if(output[i].length==output[short_index].length)
    {
      lowest=output[i]
      console.log(lowest.join(''))
    }
  }
}

short(arr1)