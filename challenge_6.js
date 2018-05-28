// Given a sequence of numbers as an input, create a program to predict the next number in the sequence.

/* Some famous equations:
polynomial equations i.e. y = ax^2 + bx + c - this function will attempt to cover this up to n = 3
logarithm equations i.e y = log x
*/

const math = require('mathjs');

const test1 = [4, 8, 12, 16, 20] // Linear function
const test2 = [1, 4, 9, 16] // Quadratic function
const test3 = [10, 29, 66, 127] // Cubic function


// To use this function, list numbers in array and provide at least 4 numbers

function numPredictor(arr) {
    let x = []
    for (i = 0; i < arr.length; i++) {
        x.push(i)
    }
    const point1 = [x[0] ** 3, x[0] ** 2, x[0], 1]
    const point2 = [x[1] ** 3, x[1] ** 2, x[1], 1]
    const point3 = [x[2] ** 3, x[2] ** 2, x[2], 1]
    const point4 = [x[3] ** 3, x[3] ** 2, x[3], 1]

    const matrix = [point1,
        point2,
        point3,
        point4]
    const inverse = math.inv(matrix)
    const equation = [arr[0], arr[1], arr[2], arr[3]]
    const result = math.multiply(inverse, equation)

    const a = result[0]
    const b = result[1]
    const c = result[2]
    const d = result[3]

    const prediction = a * (4 ** 3) + b * (4 ** 2) + c * (4 ** 1) + d
    console.log(Math.round(prediction))
    return Math.round(prediction)
}

numPredictor(test1)
numPredictor(test2)
numPredictor(test3)
