function mul(arr1,arr2)
{
    return arr1.map((value,index) => value*arr2[index])
}
var arr1=[1,2,8]
var arr2=[1,2,3]
var result=mul(arr1,arr2)
console.log(result)