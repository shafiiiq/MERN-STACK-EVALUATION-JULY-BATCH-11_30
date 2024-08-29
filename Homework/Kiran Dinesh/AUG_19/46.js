let arr = [ 'ramlll', 'romkkk', 'rovkkk' ]
function reverse(arr){
  const output=arr.map(element =>(
    element.split('').reverse().join('')
  ))
  console.log(output);
  
}
reverse(arr)

