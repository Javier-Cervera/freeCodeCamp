/*
Return true if the given string is a palindrome. Otherwise, return false.
Removing all non-alphanumeric characters
*/
function palindrome(str) {
    return str
        .toLowerCase()
        .match(/[A-Za-z0-9]/g)
        .every((x, index, array) => x == array[array.length - index - 1])
}

console.log(palindrome("2A3*3a2"));