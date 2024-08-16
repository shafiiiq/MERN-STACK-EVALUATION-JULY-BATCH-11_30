// 13. Write a function to find the difference between the largest and smallest elements in an array.
var arr=[2,3,5,4,67,3]
var smallest;
var largest;
var difvalue;
function diff(){
     smallest=Math.max(...arr)
     largest=Math.min(...arr)
     diffvalue=largest - smallest;
     difvalue=Math.abs(diffvalue)
    console.log(difvalue)
}
diff()