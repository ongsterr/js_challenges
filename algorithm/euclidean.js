/* In mathematics, the Euclidean algorithm, or Euclid's algorithm, is an efficient method for computing the greatest common divisor (GCD) of two numbers, the largest number that divides both of them without leaving a remainder.
The Euclidean algorithm is based on the principle that the greatest common divisor of two numbers does not change if the larger number is replaced by its difference with the smaller number.
*/

function euclidean(a, b) {
    let aDivisors = []
    let bDivisors = []
    let rootA = Math.sqrt(a)
    let rootB = Math.sqrt(b)
    
    for (i = 1; i <= a; i++) {
        if (a % i === 0) {
            aDivisors.push(i)
        }
    }

    for (i = 1; i <= b; i++) {
        if (b % i === 0) {
            bDivisors.push(i)
        }
    }

    const commonDiv = []
    aDivisors.forEach( num => {
        for (i = 0; i < bDivisors.length; i++) {
            if(num === bDivisors[i]) {
                commonDiv.push(num)
            }
        }
    })
    console.log(commonDiv)
    const result = Math.max(...commonDiv)
    return result
}

const test1 = euclidean(10, 30)
console.log(test1)
