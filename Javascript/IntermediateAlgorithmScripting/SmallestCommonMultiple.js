/*
param[] saves the values of the elements in the range of arr.
The least element of multiples[] is increased by the corresponding value of param[], 
whereas the rest of the elements pass from one iteration of the while to next one unchanged.

The algorithm stops when all elements in sequence are equal. Their common value is the Smallest Common Multiple.
*/

function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a - b);
    console.log([min, max])
    let param = Array(Math.abs(arr[0] - arr[1]) + 1)
      .fill(0)
      .map((x, index) => x + Math.min(...arr) + index);
    let multiples = param.slice();
    while (!multiples.every((x, index, array) => x == array[0])) {
      multiples[multiples.indexOf(Math.min(...multiples))] += 
      param[multiples.indexOf(Math.min(...multiples))];
        }
    console.log(multiples);
    return multiples[0];
  }
  
  smallestCommons([5,1]);
/*
This solution uses formulae and algorithms for the Greatest Common Divisor 
and Least Common Multiple off of Wikipedia to compactly and quickly compute the Smallest Common Multiple.

Very large range or very large values, sometimes may trigger a recursion limit in some browsers.

  function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
      .fill(0)
      .map((_, i) => i + min);
    // GCD of two numbers
    // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
    const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
    // LCM of two numbers
    // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
    const lcm = (a, b) => a * b / gcd(a, b);
    // LCM of multiple numbers
    // https://en.wikipedia.org/wiki/Least_common_multiple#Other
    return range.reduce((multiple, curr) => lcm(multiple, curr));
  }
  
  smallestCommons([1, 5]);
*/