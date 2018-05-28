// Learning arr.reduce
// Counting instances of values in a object

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) { // Accumulator in an array of strings create an object with string as key/property and count as values
        console.log(name)
        console.log(allNames)
        allNames[name]++;
        console.log(allNames[name])
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// Grouping objects by a property

var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

var groupedPeople = groupBy(people, 'age');
// groupedPeople is:
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }

// Bonding arrays contained in an array of objects using the spread operator and initialValue

// friends - an array of objects 
// where object field "books" - list of favorite books 
var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue
var allbooks = friends.reduce(function (accumulator, currentValue) {
    return [...accumulator, ...currentValue.books];
}, ['Alphabet']);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

/*
const reducer = function(accumulator, current, currentIndex, array) {
    const length = accumulator.length
    accumulator.push(current - array[length - 1]);
    return accumulator
}

const test1 = [4,8,12,16,20] // Linear function
const test2 = [1,4,9,16] // Quadratic function
const test3 = [10,29,66,127] // Cubic function

function numPredictor(arr) {
    result = arr.reduce(reducer, [])
    result.shift()
    let diff = [result[0]]

    if (result[0] !== result[1]) {
        result = result.reduce(reducer, [])
        result.shift()
        diff.push(result[0])
    }

    if (result[0] !== result[1]) {
        result = result.reduce(reducer, [])
        result.shift()
        diff.push(result[0])
    }

    console.log(result)
    console.log(diff)
    return result
}

numPredictor(test1)
numPredictor(test2)
numPredictor(test3)
*/