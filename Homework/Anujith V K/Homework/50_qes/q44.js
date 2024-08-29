// Write a function to rotate an array to the right by one position.
function rot(a = []) {
    var lastelement = a[a.length - 1]
    for (i = a.length - 2; i >= 0; i--) {
        a[i + 1] = a[i]
    }
    a[0] = lastelement
    console.log(a);

}
rot([1, 2, 3, 4, 5])