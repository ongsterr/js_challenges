/*
*Problem 10*
Write a function testNum that takes a number as an argument and returns a promise that resolves if the argument is greater than 10, and errors if it is less than 10.
*/

function testNum(num) {
    const myPromise = new Promise(function (resolve, reject) {
        if (num > 10) {
            resolve('The number is within range. Good work!')
        } else {
            reject('The number is out of range. Keep guessing!')
        }
    })
    return myPromise
}

const test1 = 11
testNum(test1)
    .then( result => {
        console.log(result)
    })
    .catch( error => {
        console.log(error)
    })

/*
*Problem 11*
Write a function makeAllCaps() that takes in an array of words and capitalises them. If the array contains anything but strings it should throw an error. (edited)
*/

function makeAllCaps(arr) {
    const nextPromise = new Promise(function (resolve, reject) {
        const typeCheck = arr.map(x => {
            return typeof x == 'string' ? 0 : 1
        })
        if(typeCheck.reduce((acc, val) => acc + val) == 0) {
            const result = arr.map(x => x.toUpperCase())
            resolve(result)
        } else {
            reject('The array must only contain strings!')
        }
    })
    return nextPromise
}

const test5 = ['hello', 'world']
const test6 = ['hello', 5]
makeAllCaps(test5)
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))

makeAllCaps(test6)
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))

/*
*Problem 12*
Write a function that takes an array of numbers, and returns a promise. If the array contains any strings the function should throw an error, otherwise it should resolve with the largest number in the array.
*/

function findLargestNum(arr) {
    const nextPromise = new Promise(function (resolve, reject) {
        const typeCheck = arr.map(x => {
            return typeof x == 'number' ? 0 : 1
        })
        if (typeCheck.reduce((acc, val) => acc + val) == 0) {
            const result = Math.max(...arr)
            resolve(result)
        } else {
            reject('The array must only contain numbers!')
        }
    })
    return nextPromise
}

const test7 = [10, 5, 120]
const test8 = ['hello', 5, 120]
findLargestNum(test7)
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))

findLargestNum(test8)
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))

/*
*Problem 13*
I want you to use this URL: 'https://randomuser.me/api/?results=10'
Use three .then functions in your answer and console.log out a last name in your final then.
*/

const url = 'https://randomuser.me/api/?results=10'
const response = fetch(url)

response
    .then( data => {
        return data.json()
    })
    .then( json => {
        const fname = json.results[0].name.first
        const lname = json.results[0].name.last
        console.log(`My full name: ${fname} ${lname}`)
    })
    .catch( err => console.log(err))

/*
*Problem 14*
Find a weather API. Use fetch, and console.log out the maximum and minimum for the week ahead.
*/

// const weatherKey = require('./config')

const key = 'ff919d2bc3a0f3a760d765dfa595a935'
const cityID = 707860
const cnt = 7
const uri = `http://api.openweathermap.org/data/2.5/forecast/daily?id=${cityID}&cnt=${cnt}&APPID=${key}`

const apiCall = fetch(uri)

apiCall
    .then( data => {
        return data
    })
    .then( json => {
        console.log(json)
    })