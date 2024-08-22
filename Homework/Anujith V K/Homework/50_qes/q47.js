// Write a function to remove duplicate values from an array.
function rem(a = []) {
    var newarr = new Set(a)
    var result = Array.from(newarr)
    console.log(result);

}
rem([1, 2, 3, 4, 2, 1, 2, 3, 2, 2, 3, 1])