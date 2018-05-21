/* We have a deck of cards and we want to flip cards (loop a card flipping function) until we get a Heart, how could we write that in JavaScript?
Hints: Use the While loop, you will need a couple of Math. functions  */

// Building deck of cards

class Cards {
    constructor(value, suit) {
        this.value = value
        this.suit = suit
    }
}

function generateDeck() {
    let deck = []
    const value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'Q', 'K']
    const suit = ['S', 'H', 'C', 'D']

    for (i = 0; i < value.length; i++) {
        for (x = 0; x < suit.length; x++) {
            deck.push(new Cards(value[i], suit[x]))
        }
    }
    deck.sort(
        (a, b) => 0.5 - Math.random() // Math.random() function returns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1)
    )
    return deck
}

const deck1 = generateDeck()
console.log(deck1)

// Loop through deck to find the first heart

let flippedDeck = []

for(i=0; i<deck1.length; i++) {
    flippedDeck.push(deck1[i]['suit'])
    if(deck1[i]['suit'] === 'H') {
        break;
    }
}

console.log(`Results: ${flippedDeck}`)
console.log(`Got a Heart after flipping ${flippedDeck.length} cards`)


/* ------------------------------------------------------------------------ */

// Testing out some Math functions
// console.log(Math.E)
// console.log(Math.LN2)
// console.log(Math.LN10)
// console.log(Math.LOG2E)
// console.log(Math.LOG10E)
// console.log(Math.PI)
// console.log(Math.SQRT1_2)
// console.log(Math.SQRT2)

// Getting a random number between two values
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// Getting a random integer between two values
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

// Getting a random integer between two values, inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}