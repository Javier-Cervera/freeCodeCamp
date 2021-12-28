/*
Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic 
character (i.e. spaces, punctuation), but do pass them on.
*/


function rot13(str) {
    return str
        .split(" ")
        .map(word =>
            word
                .split("")
                .map(letter => {
                    const code = letter.charCodeAt()
                    return code >= 65 && code <= 77 ?
                        String.fromCharCode(code + 13) :
                        code >= 78 && code <= 90 ?
                            String.fromCharCode(code - 13) :
                            String.fromCharCode(code)
                })
                .join("")
        )
        .join(" ");
}

console.log(rot13("SERR PBQR PNZC!"));

/* Auxiliary tests to find the ranges
let a = "AMNZ"
console.log(a.charCodeAt(1))
65 77   78 90
*/