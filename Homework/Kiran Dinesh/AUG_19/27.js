let arr1 = ['ram1', 'rom', 'rom', 'rim1', 'ring1','rinh4']
function long(arr1){
  let high=[]
  var output= arr1.map(element =>(
    element.split('')
  ))
  large_index=0
  high=output[0]
  for(i in output)
  {
    if(output[i].length>output[large_index].length)
    {
      large_index=i
      high=output[i]
    }
  }

  for(i=large_index;i<output.length;i++)
    {
      if(output[i].length==output[large_index].length)
      {
        high=output[i]
        console.log(high.join(''))
      }
    }
}


long(arr1)