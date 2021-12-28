/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

x[pre] it's the value of the key "pre" and also the condition to check if it's truthy or falsy
*/

function truthCheck(collection, pre) {
    return collection
        .every(x => x[pre]);
}

truthCheck(
    [
        { "user": "Tinky-Winky", "sex": "male" }, 
        { "user": "Dipsy", "sex": "male" }, 
        { "user": "Laa-Laa", "sex": "female" }, 
        { "user": "Po", "sex": "female" }
    ], "sex");