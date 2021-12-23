/*
Perform a search and replace on the sentence using the arguments provided
Preserve the case of the first character in the original word when you are replacing it.
*/

function myReplace(str, before, after) {
    let afterCased;
    /^[A-Z]/.test(before) ?
    afterCased = after.charAt(0).toUpperCase() + after.slice(1) : 
    afterCased = after.toLowerCase();
    return str.replace(before, afterCased);
  }
  
  console.log(myReplace("I think we should look up there", "up", "Down"));