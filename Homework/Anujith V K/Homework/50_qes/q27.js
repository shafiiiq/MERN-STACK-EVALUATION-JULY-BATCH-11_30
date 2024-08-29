// Write a function to remove all odd numbers from an array.
function rm(a = []) {
    var newar = a.filter(items => items % 2 == 0)
    console.log(newar);
}
rm(x = [1, 2, 3, 4, 5])