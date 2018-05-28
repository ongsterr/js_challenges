
/*
Counting in different bases --
What are the next five numbers in these sequences:
a. (base 7): 1,2,3,4... // 5,6,10,11,12
b. (base 18): 9,A,B,C,D,E,F,G... // H,10,11,12,13
c. (base 3): 21,22... // 100,101,102,110,111
*/

/*
Bitwise logic --
a. 1001 & 1110 // 1000
b. 1101 & 1011 // 1001
c. 0111  | 0101 // 0111
d. 1010  | 0110 // 1110
e. 1111 XOR 1001 // 0110
f. 0010 XOR 1011 // 1001
*/

/*
More sets --
1. Given A = { 6, 4, 3 } and B = { 21, 4, 9 }, what is A − B? // A - B = { 6, 3 }
2. Given A = { 6, 4, 3 } and B = { 21, 4, 9 }, what is A + B? // A + B = { 6, 4, 3, 21, 9 }
3. Given A = { 1, 4, 3, 5, 10 } and B = { 10, 4, 9, 5, 3 }, what is A − B? // A - B = { 1 }
4. Given A = { 1, 4, 3, 5, 10 } and B = { 10, 4, 9, 5, 3 }, what is A + B? // A + B = { 1, 4, 3, 5, 10, 9 }
(A + B is the union of A and B.)
*/

/*
Graphs and matrices --
1. Provide the adjacency matrix for this graph ^^. // See below
2. Find the shortest path from D to C. // D -> A -> C (4)
3. What is the 'value' of that path? // 4
4. Give a value for a path that isn't the shortest path (and the path itself). D -> A -> B (9)

A = [0, 7, 2, 0]
B = [0, 3, 0, 1]
C = [4, 0, 0, 0]
D = [2, 5, 0, 0]
*/

/*
Matrix Multiplication
const a = [[1,2],
            [3,4]]
const b = [[2,0],
            [1,2]]
a * b = [[4, 4],
        [10,8]]
*/

/*
Big O --
1. Give the Big O notation for the following algorithms:
a. A search of an unsorted array. // O(N)
b. A binary search of a sorted array. // O(log N)
c. Retrieving a value from a hash. // O(1)
d. An algorithm to search through an array of arrays, where the length of the outer array is denoted by n, and the length of any inner array is assumed to also be n. // O(N2)

2. Rank these algorithms from quickest to slowest. // O(1), O(log N), O(N), O(N2)
*/

/*
Base conversions --
1. Write a Ruby or JS function to convert decimal (our regular counting system) to base 4.
2. Now do the same to go from decimal to base 6.
3. Convert this binary number to hexadecimal: 1101 0100 1001 0001 0110
4. Convert this binary number to decimal: 1011010
5. Convert this binary number to decimal: 1001101
*/

function binaryToDecimal(str) {
  const conversion = (x, i) => { 
    return parseInt(x) * (2 ** i) 
  }

  const sum = (acc, curr) => {
    return acc + curr
  }

  const result = str.split('').reverse().map(conversion).reduce(sum)
  console.log(`Test: ${result}`)
  return result
}

const test1 = '1101'
const test2 = '0100'
const test3 = '1001'
const test4 = '0001'
const test5 = '0110'
const test6 = '1011010'
const test7 = '1001101'

binaryToDecimal(test1)
binaryToDecimal(test2)
binaryToDecimal(test3)
binaryToDecimal(test4)
binaryToDecimal(test5)
binaryToDecimal(test6)
binaryToDecimal(test7)