/* Function will take an array for the first argument and return 
an array with all the objects that matches all the properties 
and values in the Object passed as second parameter. */

function whatIsInAName(collection, source) {
    return collection.filter(x => 
      Object.keys(source).every(key => 
        x.hasOwnProperty(key) && source[key] === x[key]
      )
    );
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));