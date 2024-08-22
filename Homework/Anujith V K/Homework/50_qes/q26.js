// Write a function to double every element in an array.
function doub(arr = []) {
    arr.forEach((Element, index) => {
        arr[index] = Element * 2
    })
    console.log(arr);

}
doub(n = [2, 3, 4, 5])