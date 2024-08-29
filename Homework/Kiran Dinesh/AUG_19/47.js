let arr = [ 'ramlll', 'romkkk', 'rovkkk' ]
function firstUpper(arr){
  arr.forEach(element => {
    console.log(element.slice(0,1).toUpperCase()+element.slice(1));
  });
  
}
firstUpper(arr)