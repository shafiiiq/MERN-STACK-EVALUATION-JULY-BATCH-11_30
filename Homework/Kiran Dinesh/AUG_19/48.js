let arr = [ 'ram', 'rom', 'rov' ]
function upper(arr){
  const output=arr.map(element =>(
    element.toUpperCase()
  ))
  console.log(output);
}
upper(arr)