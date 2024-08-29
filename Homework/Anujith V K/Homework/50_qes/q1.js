// Write a function to check if an array is a palindrome (the array reads the same forward and backward).

function palindrome(arr = []) {
    var flag = true
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        if (arr[left] != arr[right]) {
            flag = false
        }
        right--
        left++
    }
    if (flag === false) {
        console.log(arr + " is not palindrome");

    }
    else {
        console.log(arr + " is a palindrome");

    }

}
palindrome(arr = [1, 2, 5, 1])