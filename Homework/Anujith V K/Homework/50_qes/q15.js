// Write a function to find the index of the first occurrence of the largest element in an array.
// Write a function to find the index of the first occurrence of the smallest element in an array.
function lr(arr = []) {
    var largest = arr[0]
    var index = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
            index = i
        }
    }
    console.log(index);

}
lr(n = [7, 5, 4, 3, 1, 2, 6, 9])