/*
Sum of all prime numbers that are less than or equal to num.

First solution loops over the range of posible divisors, up to the square root of that number 
because it's the largest possible unique divisor. This is to find if it's a prime number.
Then, the parent loop checks for all prime numbers between 2 and num, using a variable count that it's 
implemented inside the child loop.
*/

function sumPrimes(num) {
    let prime = 0;
    for (let i = 2; i <= num; i++) {
      let count = 0;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
          count++;
          break;
        }
      }
      if (count == 0) {
        prime += i;
      }
    }
    return prime;
    
  }
  /*
  This solution is based on the Sieve of Eratosethenes 4.2k.
We create a boolean array for the primality of each number in our range. 
All numbers except 0 and 1 are assumed to be prime.

Then, we start with 2 and proceed to num, marking every multiple of a prime number as false, or ‘not prime’.

Finally, we reduce our sieve array, returning the sum of all indices still marked as true or ‘prime’.

Note: many optimizations can be made to improve the efficiency of this sieve, 
but they have been omitted for the sake of simplicity and readability.


  function sumPrimes(num) {
    // Prime number sieve
    let isPrime = Array(num + 1).fill(true);
    // 0 and 1 are not prime
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (isPrime[i]) {
        // i has not been marked false -- it is prime
        for (let j = i * i; j <= num; j += i)
          isPrime[j] = false;
      }
    }
  
    // Sum all values still marked prime
    return isPrime.reduce(
      (sum, prime, index) => prime ? sum + index : sum, 0
    );
  }*/
  
  console.log(sumPrimes(500));