/*
Self explanatory title

spread operator ...arr allows to pass the elements of the array
*/
function sumAll(arr) {
    let sum = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sum += i
    }
    return sum;
  }
  
  console.log(sumAll([7, 4]));