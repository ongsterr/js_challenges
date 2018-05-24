/* 
The morning challenge is to convert a given number into a roman numeral.
All roman numerals should be provided in upper-case.
*/

function convertToRomanNumeral(num) {
    return num;
}
convertToRomanNumeral(22);

class RomanNumeral {
    constructor(num, rom) {
        this.num = num
        this.rom = rom
    }
}

const number = [1,5,10,50,100,500,1000]
const roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

const set1 = []

for(i=0; i<number.length; i++) {
    set1.push(new RomanNumeral(number[i], roman[i]))
}

console.log(set1);
