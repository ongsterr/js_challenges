## **A Compilation of JS Challenges**

This repository is a compilation of all the JavaScript challenges and exercises done during bootcamp with [Coder Academy](https://coderacademy.edu.au/).

![JS](https://media.makeameme.org/created/javascript-javascript.jpg)

### **Challenge 1**

- Using `class` in Javascript to create objects and navigate through elements within objects

### **Challenge 2**

**Challenge**:\
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

### **Challenge 3**

**Challenge**:\
The morning challenge is to convert a given number into a roman numeral. All roman numerals should be provided in upper-case.
A starting point could be:
```js
function convertToRomanNumeral(num) {
 return num;
}
convertToRomanNumeral(22);
```

### **Challenge 4**
Write a JS function that converts an rgb colour code to a hex code… and do the same in reverse.

### **Challenge 5**

**Challenge**:\
*Atomic Blonde Number*:
A number is an atomic blonde number if the sum and product of its digits are equal.
For example, 123 is an atomic blonde number, as the sum of its digits (1+2+3) is 6, which is equal to the product of its digits (1*2*3).

Write a program to check if a number is an atomic blonde number or not.
```
For example:
Input: 1412
Output: true

Input: 247
Output: false
```

### **Challenge 6**
Given a sequence of numbers as an input, create a program to predict the next number in the sequence.
For Example:
```
input: 1 4 9 16
output: 25

input: 4 8 12 16 20
output: 24

input: 10 29 66 127
output: 218
```