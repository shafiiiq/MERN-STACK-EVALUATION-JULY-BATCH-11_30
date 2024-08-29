function remov(arr,val)
{
    return arr.filter(element => element >= val)
}
const arr=[1,6,8,4]
const val=4;
const result=remov(arr,val)
console.log(result)