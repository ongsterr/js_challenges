// A prime number is a whole number greater than 1 whose only factors are 1 and itself.

function isPrime(num) {
    if (num < 1) {
        return false;
    } else if (num <= 3) {
        return true
    }

    if (num % 2 === 0) {
        return false
    }

    const dividerLimit = Math.sqrt(num)
    for (i = 3; i < dividerLimit; i += 2)  {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

const test1 = 3
const test2 = 11
const test3 = 15
const test4 = 29

console.log(isPrime(test1));
console.log(isPrime(test2));
console.log(isPrime(test3));
console.log(isPrime(test4));