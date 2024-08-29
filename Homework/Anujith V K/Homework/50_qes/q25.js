// Write a function to check if two arrays are equal (have the same elements in the same order).
function che(a = [], b = []) {
    var flag = true
    for (i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            flag = false
        }
    }
    if (flag == true) {
        console.log("equal");

    }
    else {
        console.log("not equal");

    }
}
che(n = [1, 2, 3, 4, 5], m = [1, 2, 3, 4, 5])