/*
Convert the characters &, <, >, " (double quote), 
and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    let entities = {
        '&': "&amp;",
        '<': "&lt;",
        '>': "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    return str.replace(/([&<>"'])/g, a => entities[a]);
}
  
convertHTML("Dolce & Gabbana");

/*
return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");

The arrow function returns the converted entity or the original one if there is no conversion.
*/