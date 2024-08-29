function shortString(arr){
    let low=[]
    let string=[]
    var output= arr.map(element =>(element.split('')))
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
  var arr1=['abc','ab','n','nabil']
  shortString(arr1)