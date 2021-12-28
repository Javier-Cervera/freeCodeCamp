/*
It has to add two numbers passed as parameters and return the sum.
It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
It has to check if it has one or two arguments passed. More are ignored.
If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.
*/

function addTogether() {
    return typeof (arguments[0]) != "number"
        || (typeof (arguments[1]) != "number" && arguments.length == 2)
        ? undefined
        : (arguments.length === 2
            ? arguments[0] + arguments[1]
            : (x) => typeof (x) == "number" ? x + arguments[0] : undefined)
        ;
}

console.log(addTogether(2)(3));