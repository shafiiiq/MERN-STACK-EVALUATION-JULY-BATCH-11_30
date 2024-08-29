
function long(arr){
    let long=[]
    let string=[]
    var output= arr.map(element =>(
      element.split('')
    ))
    console.log(output)
    short_index=0
    long=output[0]
    for(i in output)
    {
      if(output[i].length>output[short_index].length)
      {
        short_index=i
       long=output[i]
      }
    }
  
    for(i=short_index;i<output.length;i++)
    {
      if(output[i].length==output[short_index].length)
      {
        long=output[i]
        console.log(long.join(''))
      }
    }
  }
  
  var ar=['akarsh','raj','sm','pr','swe','sql']
  long(ar)