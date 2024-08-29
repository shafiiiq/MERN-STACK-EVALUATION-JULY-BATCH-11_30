function longestString(arr){
    let high=[]
    var output= arr.map(element =>(element.split('')))
    console.log(output)
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
  var arr1=['abc','bc','mohammad','nabil']
  longestString(arr1)