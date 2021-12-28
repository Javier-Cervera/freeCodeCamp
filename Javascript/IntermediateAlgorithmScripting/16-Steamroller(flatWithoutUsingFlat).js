/*
Flatten a nested array accounting for varying levels of nesting. Without using .flat()
*/

function steamrollArray(arr) {
    return arr.reduce((array, elem) => array.concat(Array.isArray(elem) ? steamrollArray(elem) : elem), []);
}

steamrollArray([1, [2], [3, [[4]]]]);