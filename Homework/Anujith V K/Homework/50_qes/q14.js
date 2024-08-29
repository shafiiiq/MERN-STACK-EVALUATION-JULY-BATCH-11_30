// Write a function to find the index of the first occurrence of the smallest element in an array.
function sm(arr = []) {
    var smallest = arr[0]
    var index = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            index = i
        }
    }
    console.log(index);

}
sm(n = [7, 5, 4, 3, 1, 2, 6])