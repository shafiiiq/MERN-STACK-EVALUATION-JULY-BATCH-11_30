function largest(arr){
    var sorted=arr.sort((a,b)=>a-b)
    console.log(sorted[(sorted.length)-2])
  }
  var arr=[2,4,6,8,1]
  largest(arr)

