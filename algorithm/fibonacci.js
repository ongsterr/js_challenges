// Calculate fibonacci number at specific position

function fibonacci(numPosition) {
    if (numPosition === 1) {
        return 1
    }

    let fib = null
    let fibPrev = 1
    let fibPrevPrev = 0
    let counter = numPosition - 1

    while (counter) {
        fib = fibPrev + fibPrevPrev
        fibPrevPrev = fibPrev
        fibPrev = fib
        counter--
    }
    return fib
}

const test1 = fibonacci(6)
console.log(test1);
