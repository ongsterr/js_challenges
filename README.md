## **A Compilation of JS Challenges**

This repository is a compilation of all the JavaScript challenges and exercises done during bootcamp with [Coder Academy](https://coderacademy.edu.au/).

![JS](https://media.makeameme.org/created/javascript-javascript.jpg)

### **Challenge 1**

- Using `class` in Javascript to create objects and navigate through elements within objects

### **Challenge 2**

**Challenge**:
We have a deck of cards and we want to flip cards (loop a card flipping function) until we get a Heart, how could we write that in JavaScript?\
Hints: Use the `While` loop, you will need a couple of `Math.` functions.

- Create `class` using the `class constructor` function. Example:
    ```js
    class Cards {
        constructor(value, suit) {
            this.value = value
            this.suit = suit
        }
    }
    ```
- Explanation of how `arr.sort()` work in JS:

    ```js
    arr.sort([compareFunction])

    function compare(a, b) {
    if (a is less than b by some ordering criterion) {
        return -1;
    }
    if (a is greater than b by the ordering criterion) {
        return 1;
    }
    // a must be equal to b
    return 0;
    }

    // You can randomly sort the array using:
    // Math.random() function returns a floating-point pseudo-random number in the range 0–1 (inclusive of 0, but not 1)
    
    arr.sort(
        (a, b) => 0.5 - Math.random() 
    )
    ```