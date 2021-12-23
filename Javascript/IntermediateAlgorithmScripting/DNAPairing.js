/*
Take each character, get its pair, and return the results as a 2d array
*/

function pairElement(str) {
    return str
      .split("")
      .map(x => {
        let pair = [x];
        switch (x) {
          case 'G':
            pair.push('C');
            break
          case 'C':
            pair.push('G');
            break
          case 'A':
            pair.push('T');
            break
          case 'T':
            pair.push('A');
            break
        }
        return pair
      });
  }
  
  pairElement("GCG");

  /*
  Elegant solution

  function pairElement(str) {
  //create object for pair lookup
  let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  let arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

pairElement("GCG");
   */