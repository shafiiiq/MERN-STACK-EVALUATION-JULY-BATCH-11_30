let arr = ['RAM','ROM','ROV']
function lower(){
  const output=arr.map(element =>(
    element.toLowerCase()
  ))
  console.log(output);
}
lower(arr)