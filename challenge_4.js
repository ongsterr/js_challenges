/*
Write a JS function that converts an rgb colour code to a hex code… and do the same in reverse.
*/

function convertRgbToHex(r, g, b) {
    const hex = `${r.toString(16)}${g.toString(16)}${b.toString(16)}`
    return hex
}

convertRgbToHex(255,0,0)

function convertHexToRgb(hex) {
    const rgb = `${parseInt((hex[0] + hex[1]), 16)}, ${parseInt((hex[2] + hex[3]), 16)}, ${parseInt((hex[4] + hex[5]),16)}`
    return rgb
}

convertRgbToHex(255, 0, 0)

convertHexToRgb('1e90ff')