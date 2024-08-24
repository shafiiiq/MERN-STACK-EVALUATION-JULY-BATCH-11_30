function oddcount(arr){
    var num=arr.filter(element=>(element%2!=0))
    console.log(num.length)
}
var arr1=[1,2,3,4,5,6,7]
oddcount(arr1)