var arr1=[1,2,4,5,7]
var value=2

const newarr=arr1.filter(element=>(element>value))
let sum=0
for(i in newarr){
    sum=sum+newarr[i]
}
console.log(sum)
