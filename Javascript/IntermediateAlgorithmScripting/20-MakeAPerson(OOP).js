/*
Self explanatory title

The methods that take an argument must accept only one argument and it has to be a string. 
These methods must be the only available means of interacting with the object.
*/


const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast.split(" ");

    this.getFirstName = function () {
        return fullName[0];
    };
    this.getLastName = function () {
        return fullName[1];
    };
    this.getFullName = function () {
        return fullName.join(" ");
    };
    this.setFirstName = function (first) {
        if (arguments.length == 1 && typeof (first) == 'string') {
            fullName[0] = first
        }
    };
    this.setLastName = function (last) {
        if (arguments.length == 1 && typeof (last) == 'string') {
            fullName[1] = last
        }
    };
    this.setFullName = function (firstAndLast) {
        if (arguments.length == 1 && typeof (firstAndLast) == 'string') {
            fullName = firstAndLast.split(" ")
        }
    };

    return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.setFullName('asd asd')
console.log(bob.getFullName());