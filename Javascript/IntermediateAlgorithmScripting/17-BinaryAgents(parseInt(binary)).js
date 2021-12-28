/*
Return an English translated sentence of the passed binary string.

The parseInt function converts strings to numbers, and it takes a 
second argument specifying the base in which the string representation is

String.fromCharCode returns a string created from the specified sequence of UTF-16 code units
*/

function binaryAgent(str) {
    return str
        .split(" ")
        .map(x => String.fromCharCode(parseInt(x, 2)))
        .join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 1100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));