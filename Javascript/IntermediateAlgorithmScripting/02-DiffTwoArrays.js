/*
Return the symmetric difference of the two arrays

Commented solution: Merges the 2 arrays and filters the element that isn't in both of them
*/

 function diffArray(arr1, arr2) {
    const newArr = [];
    arr1.forEach(x => {
      if (arr2.indexOf(x) == -1) {newArr.push(x)}
    });
    arr2.forEach(x => {
      if (arr1.indexOf(x) == -1) {newArr.push(x)}
    });
    return newArr;
  }
  
  /*
  function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  */
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));