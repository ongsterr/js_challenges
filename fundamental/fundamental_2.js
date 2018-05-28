// First put these two lines of code up at the top of your file:
console.log("Problem 6")
console.time('problem-6')

// I want you to now make a function called looper. This takes one argument, a callback function. In the body of the function first start a timer with this code:
// console.time('looper')

// I want you to insert a for loop that iterates 1000000000 times. Put the following code in the loop:
// x = Math.random()

// Immediately after the loop log out "After loop!". End the 'looper' timer. Then return your callback with no arguments.
// Now run looper with only the callback as an argument (and as mentioned this takes no arguments itself). Within the callback end the console.time, and then return console.log("Finished 6 in the callback") (which will return undefined, but it's not relevant for this).

// Now write this code after your looper function is called:
// console.log("After looper")
// console.log("..now heading off to other parts of the program!")
// console.log("==================")

function looper(callback) {
    console.time('looper')
    x = []
    for (i = 0; i < 100000; i++) {
        x.unshift((Math.random() * i))
    }
    console.log('After loop!')
    console.timeEnd('looper')
    return callback()
}

looper(() => {
    console.timeEnd('problem-6')
    return console.log('Finished 6 in the callback')
})

console.log("After looper")
console.log("..now heading off to other parts of the program!")
console.log("==================")

// Copy and past the code you wrote in the previous example. Change all instances of 'looper' to 'timeouter'. Here we are going to run some code in the main function that is asynchronous, and see the difference in behaviour. Instead of the loop followed by the console.log, put this code:
// setTimeout(function () {
//     console.log('After setTimeout!')
//     console.log("..now passing through to the cb..")
//     return cb()
// }, 6000)

/*
Change every reference to Problem 6 with 7.
Take note of the order that things are logged to the terminal.
To see this clearly, run both Problem 6 and 7 in the same file and watch as they log to the terminal.
Now contrast that with the functions that we encountered in Problem 6. You can see that while in 6 the entire program stops to wait for the loop, in 7 the program continues on, and other code would have been run before finally logging that it finally fully finished for real, it had escaped from the timeout, called the callback, and executed the callback code.
*/

console.log("Problem 7")
console.time('problem-7')

function timeouter(callback) {
    console.time('timeouter')
    setTimeout(function () {
        console.log('After setTimeout!')
        console.log("..now passing through to the cb..")
        return callback()
    }, 7000)
    console.timeEnd('timeouter')
    // return callback()
}

timeouter(() => {
    console.timeEnd('problem-7')
    console.log('Finished 7 in the callback')
    console.log("==================")
    return
})

console.log("After timeouter")
console.log("..now heading off to other parts of the program!")
console.log("==================")

// Question 8 & 9: The idea is the same as with questions 6 and 7, but here we are using Promises. This is something provided to you in JS, and we simply make a new promise and have our function return that promise. The difference between the two functions is that problem 8 contains a loop that blocks the flow of the code, and problem 9 has an asynchronous function (setTimeout).

console.log("Problem 8")
console.time('problem-8')

const promiseLooper = function () {
    ourPromise = new Promise(function (resolve, reject) {
        console.log('In promise looper')
        if (true) {
            const x = []
            for (i = 0; i < 200000; i++) {
                x.unshift((Math.random()*i))
            }
            console.log("After promise loop!")
            resolve("Here is the data after the LOOP")
        } else {
            reject("This will never happen in this function!")
        }
    })
    return ourPromise
}

promiseLooper()
    .then(function (dataInsidePromise) {
        console.log(dataInsidePromise)
        console.timeEnd('problem-8')
        return console.log("Finished 8")
    })
    .catch(function (error) {
        console.error("Why will this not appear?")
    })

console.log("After sync promise looper")
console.log("==================")

console.log("Problem 9")
console.time('problem-9')

const promiseTimeoutAsync = function () {
    ourPromise = new Promise(function (resolve, reject) {
        if (true) {
            setTimeout(function () {
                console.log('After setTimeout!')
                console.log("..now passing through to the promise..")
                resolve("Here is the data from the ASYNC")
            }, 6000)
        } else {
            reject('This will never happen in this function!')
        }
    })
    return ourPromise
}

promiseTimeoutAsync()
    .then(function (dataInsidePromise) {
        console.log(dataInsidePromise)
        console.timeEnd('problem-9')
        console.log("Finished 9")
        return
    })
    .catch(function (error) {
        console.error("Why will this not appear?")
    })

console.log("After *async* promise looper")
console.log("==================")