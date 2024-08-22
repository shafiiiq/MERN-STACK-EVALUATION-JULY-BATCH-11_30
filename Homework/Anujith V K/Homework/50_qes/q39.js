// Write a function to count the number of even numbers in an array.
function c(a = []) {
    let count = 0
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            count++
        }
    }
    console.log(count);

}
c([1, 2, 3, 4, 5, 6, 7])