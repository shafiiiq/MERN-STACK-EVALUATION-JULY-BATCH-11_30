// 30. Write a function to count the total number of characters in an array of strings.

var arr=['hello','hi','done']

const output=arr.map(elements=>(
    elements.split('')
))
sum=0
for(i in output){
    console.log(output[i].length)
    sum=sum+output[i].length
}
console.log(sum)
