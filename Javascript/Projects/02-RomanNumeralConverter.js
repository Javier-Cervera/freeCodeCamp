/*
Convert the given number into a roman numeral up to 3999
*/

function convertToRoman(num) {
    function digitPosition(number, littleRoman, bigRoman, biggerRoman) {
        if (number >= 0 && number <= 3) {
            return littleRoman.repeat(number)
        } else if (number >= 4 && number <= 8) {
            return number == 4 ? littleRoman + bigRoman : bigRoman + littleRoman.repeat(number - 5)
        } else {
            return littleRoman + biggerRoman
        }

    };
    return num
        .toString()
        .split("")
        .reduce((acc, x, index, array) => {
            if (index == array.length - 1) {
                return acc + digitPosition(x, 'I', 'V', 'X')
            } else if (index == array.length - 2) {
                return acc + digitPosition(x, 'X', 'L', 'C')
            } else if (index == array.length - 3) {
                return acc + digitPosition(x, 'C', 'D', 'M')
            } else {
                return acc + digitPosition(x, 'M')
            }
        }, "")
}

console.log(convertToRoman(1000));
