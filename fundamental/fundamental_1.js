
/* Problem 1
Write a function called arrayMultiply that takes two numbers, an array, and callback function as arguments. Return the callback function with the two numbers (those arguments) multiplied together as its argument.
Define a variable and in it store the result of arrayMultiply when called with 2, 2, [1,2,3], and then an anonymous function that takes the result as an argument, and then multiplies each element in the array by that result. When you console.log this variable to screen it should produce [ 4, 8, 12 ].
*/

function multiply(a, b) {
    return a * b
}

function arrayMultiply(a, b, array, callback) {
    for (var i = 0; i < array.length; i++) {
        array[i] *= callback(a,b);
    }
    return array
}

let result_1 = arrayMultiply(2, 2, [1,2,3], multiply)
console.log(result_1)
console.log('====================')

/* Problem 2
Write a function called arrayMultiplyAgain that takes a number and an array as arguments, and returns each element in the array multiplied by the number.
Now write a second function called moreArrayMultiply that takes three arguments: a number, an array, and a function: (eg. num, arr, funct). Have this function return the result of number and array when called as arguments to arrayMultiplyAgain which you passed in as an argument.
Define a variable and in it store the result of the second function when called with 2, [1,2,3], and the first function you created. When you console.log this variable to screen it should produce [ 2, 4, 6 ].
*/

function arrayMultiplyAgain(num, arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }
    return arr
}

function moreArrayMultiply(num, arr, func) {
    let a = func(num, arr)
    return a
}

let result_2 = moreArrayMultiply(2, [1, 2, 3], arrayMultiplyAgain)
console.log(result_2)
console.log('====================')

/* Problem 3
*Implement your own version of .map*
Define a function that takes a callback and provides the same functionality as the .map function inbuilt into ES6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.
*/

Array.prototype.each = function (callback) {
    out = []
    for(i = 0; i < this.length; i++) {
        out.push(callback(this[i]))
    }
    return out
}

console.log([1,2,3].each(x => x + 1))
console.log([1, 2, 3].map(x => x + 1))
console.log([1, 2, 3].each(x => x * 3))
console.log([1, 2, 3].map(x => x * 3))
console.log('====================')

/* Problem 4
*Implement your own version of .filter*
Define a function that takes a callback and provides the same functionality as the .filter function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.
*/

Array.prototype.short = function (filter) {
    out = []
    for(i=0; i<this.length; i++) {
        if(filter(this[i])) {
            out.push(this[i])
        }
    }
    return out
}

console.log([5,7,10,12,15].short(x => x >= 7))
console.log([5, 7, 10, 12, 15].filter(x => x >= 7))
console.log('====================')

/* Problem 5
Define an object that has two keys, one called 'buy' and the other called 'sell'. These will have the value of an anonymous function that takes no arguments, and that simply returns a string. The function associated with 'buy' will return "I want to buy!!", and the other returns "I want to get out!!"
Define a function called originalFunction that takes two arguments, a number and an object, which you could call 'functionObject'. If the number is divisible by 2 then the function returns the functionObject's 'buy' function, and otherwise returns the 'sell' function.
Now call this function with a number and the object that you created as arguments, and store the result in a constant. Now work out how to get the string to display to the screen.
*/

let market = {
    buy: function () {
        return 'I want to buy!'
    },
    sell: function () {
        return 'I want to get out!'
    }
}

function originalFunction(num, functionObject) {
    if(num % 2 == 0) {
        return functionObject['buy']
    } else {
        return functionObject['sell']
    }
}

const result = originalFunction(55, market)
console.log(result())
console.log('====================')