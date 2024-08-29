function sumodd(arr){
    var num=arr.filter(element=>(element%2!=0))
    let sum=0
    for(i in num){
        sum=sum+num[i]}
    console.log("sum :"+sum)
}
var arr1=[2,3,4,5]
sumodd(arr1)
