/*
Drop it
Given the array arr, iterate through and remove each element starting from the first element 
(the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.


*/


function dropElements(arr, func) {
    return arr.findIndex(func) == -1 ? [] : arr.slice(arr.findIndex(func));
}

console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }));