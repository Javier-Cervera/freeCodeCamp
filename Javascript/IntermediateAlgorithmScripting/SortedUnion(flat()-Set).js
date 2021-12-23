/*
Takes two or more arrays and return a new array 
of unique values in the order of the original provided arrays
*/

function uniteUnique(arr, ...args) {
  
    return arr
        .concat(args)
        .flat()
        .reduce((unique, elem) => {
        if (!unique.includes(elem)) {
            unique.push(elem);
        }
        return unique;
        }, []);
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


/*
new ES2015 Set object to store only unique values

function uniteUnique(...arr) {
    return [...new Set(arr.flat())]
}
*/