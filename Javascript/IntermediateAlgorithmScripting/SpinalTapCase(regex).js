/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Split the string when whitespace, underscore or is followed by an uppercase
Another option for the Uppercase words is 
    str.replace(/([a-z])([A-Z])/g, "$1 $2");
it puts a space before any encountered uppercase
*/

function spinalCase(str) {
    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
}
  
spinalCase('This Is Spinal Tap');