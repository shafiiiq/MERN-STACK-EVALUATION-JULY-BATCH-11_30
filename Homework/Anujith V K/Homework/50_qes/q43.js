// Write a function to rotate an array to the left by one position
function rot(a = []) {
    var firstelement = a[0]
    for (i = 1; i < a.length; i++) {
        a[i - 1] = a[i]
    }
    a[a.length - 1] = firstelement
    console.log(a);

}
rot([1, 2, 3, 4, 5])