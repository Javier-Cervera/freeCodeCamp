
/*Use of arguments object to retrieve arguments and .slice(1) to exclude the array*/
function destroyer(arr) {
    const args = [...arguments].slice(1);
    console.log(args);
   return arr.filter(x => !args.includes(x));
  }
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/*Alternative solution with the use of spread operator
function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}
*/