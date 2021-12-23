/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The fibonacci numbers are put at the front so it doesn't need to calculate the length on each iteration
*/

function sumFibs(num) {
    let sequence = [1, 1];
    while (sequence[0] + sequence[1] <= num) {
      sequence.unshift(sequence[0] + sequence[1]);
    }
  
    return sequence.filter(x => x % 2 != 0).reduce((a,b) => a+b);
  }
  
  sumFibs(21);