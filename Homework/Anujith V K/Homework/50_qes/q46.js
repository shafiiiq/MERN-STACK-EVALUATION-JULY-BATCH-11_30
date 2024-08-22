// Write a function to find the second largest element in an array.
function scm(a = []) {
    const arr = a.sort((a, b) => b - a)
    console.log(arr);
    var first = a[0]
    var second = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != first) {
            second = arr[i]
            break;
        }
    }
    console.log(second);

}
scm([7, 4, 3, 4, 7, 8, 3, 1, 2, 1, 1, 8, 8])