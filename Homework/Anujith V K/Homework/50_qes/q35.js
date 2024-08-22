// Write a function to check if an array is sorted in ascending order.
function descend(a = []) {
    var flag = true
    for (i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i + 1]) {
            flag = false
            break;
        }
        else {
            flag = true
        }
    }
    if (flag == true) {
        console.log("sorted in Ascending order");

    }
    else {
        console.log("not sorted in Ascending order");

    }
}
descend([4, 3, 2, 1])
descend([1, 2, 3, 4])