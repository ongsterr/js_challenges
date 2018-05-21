

let squash = {
    name: 'squash',
    length: 15,
    nutrients: [
        {
            vitamin: 'A',
            dailyPercentage: '4%',
        },
        {
            vitamin: 'C',
            dailyPercentage: '29%'
        }
    ]
}

let beef = {}
let noodles = {}

class Restaurant {
    constructor(name, menu) {
        this.name = name
        this.menu = []
    }

    addDish(food) {
        this.menu.push(food)
    }
}

let mrWok = new Restaurant("Mr Wok")

const stirFry = {
    price: 13.50,
    ingredients: [
        beef,
        noodles,
        squash
    ]
} 

mrWok.addDish(stirFry)

const shoppingCentre = {
    address: '5 Somewhere Ln, Blahville',
    chineseRestaurant: {
        address: 'Lot 4',
        details: mrWok
    }
}

console.log(shoppingCentre['chineseRestaurant']['details'].menu[0]['ingredients'][2]['nutrients'][1]['dailyPercentage'])

// Prototype Methods
// Statis Methods - Static methods are called without instantiating their class and cannot be called through a class instance (similar to class method)