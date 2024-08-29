// function student(name,age,address,phoneno)
// {
//     this.name=name
//     this.age=age
//     this.adderss=address
//     this.phoneno=phoneno
//     this.display=function()
//     {
//         console.log("Name : "+this.name)
//         console.log("Age : "+this.age)
//         console.log("Address : "+this.adderss)
//         console.log("Phone No : "+this.phoneno)
//     }
// }
// var obj1=new student("Sam",89,"kochi",123654789)
// obj1.display()


function average(arr){
    let avg=0
    for(i=0;i<arr.length;i++){
        avg=avg+arr[i]
    }
    avg=avg/(arr.length)
    console.log(avg)
}
var arr=[1,2,3,4]
average(arr)