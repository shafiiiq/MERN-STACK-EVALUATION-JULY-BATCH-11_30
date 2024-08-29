function com(arr1,arr2){
    return arr1.filter(element => arr2.includes(element));
}
var arr1=[1,2,3,4,5]
var arr2=[6,8,4,3,2]
var result=com(arr1,arr2)
console.log(result)