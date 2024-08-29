// Write a function to check if all elements in an array are positive.
function pos(a = []) {
    flag = true
    for (i = 0; i < a.length; i++) {
        if (a[i] < 1) {
            flag = false
            break;
        }
    }
    if (flag == false) {
        console.log("element contains negative elements");

    }
    else {
        console.log("all elements are positive");

    }
}
pos([1, 2, 3, 4, 5, 6])