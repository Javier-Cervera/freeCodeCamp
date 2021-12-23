/*
Find the missing letter in the passed letter range and return it
If all letters are present in the range, return undefined

Use of ASCII/UTF-16 values 
*/

function fearNotLetter(str) {
    let count = str.charCodeAt(0);
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) != count) {
        return String.fromCharCode(count)
      }
      count++
    }
    return undefined;
  }
  
  console.log(fearNotLetter("abce"));

  /*
  
  function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str
    .split("")
    .forEach(letter => {
      if (letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
      } else {
        missing = String.fromCharCode(currCharCode);
      }
    });

  return missing;
}

  */