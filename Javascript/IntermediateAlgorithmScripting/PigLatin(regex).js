/*

- If a word begins with a consonant, take the first consonant or 
consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

*/


function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  translatePigLatin("consonant");

/*

First replace checks if the first letter is a vowel. If it's a consonant, nothing happens
Second replace checks for a consonant

function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w* /, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
translatePigLatin("consonant");
  
*/