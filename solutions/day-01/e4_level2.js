// 1. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a=0, b=0, c=0) {
    const delta = b * b - 4 * a * c
    const x = (d, s=1) => (-1 * b + (Math.sqrt(d)) * s) / 2 * a
    if (delta > 0) return { x1: x(delta), x2: x(delta, -1) }
    else if (delta == 0) return { x: x(delta) }
    else return NaN
}

console.log(solveQuadEquation()) // {0}
console.log(solveQuadEquation(1, 4, 4)) // {-2}
console.log(solveQuadEquation(1, -1, -2)) // {2, -1}
console.log(solveQuadEquation(1, 7, 12)) // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)) //{2, -2}
console.log(solveQuadEquation(1, -1, 0)) //{1, 0}

// 2. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array) {
    array.forEach(v=>console.log(v))
}

// 3. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    const date = new Date()
    return date.toLocaleString()
    // this one is too boring, sorry
}

// 4. Declare a function name swapValues. This function swaps value of x to y.
function swapValues(a, b) {
    const a_prev = a
    a = b
    b = a_prev
    console.log(a, b)
}

// 5. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array) {
    let i = array.length - 1
    let reversed = []
    while (i >= 0) {
        reversed.push(array[i])
        i--
    }
    return reversed
}

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

// 6. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase()
    }
}

// 7. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
    const array = [1,2,3]
    array.push(item)
    return array
}

// 8. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(i) {
    const arr = [4,9,1,293]
    arr.splice(i,1)
    return arr
}

// 9. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(i) {
    let output = ""
    if (i % 2 == 0) output = `The number of odds are ${i/2}.\nThe number of evens are ${i/2+1}`
    else output = `The number of odds are ${i/2+1}.\nThe number of evens are ${i/2+1}.`
    return output
}

//13. Write a function which takes any number of arguments and return the sum of the arguments
function sum() {
    let sum = 0
    for (let k in arguments) {
        sum += arguments[k]
    }
    return sum
}

// 14. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const userIdGenerator = function (l=7) {
    let uid = ''
    while (uid.length < l) {
        let c = Math.floor(Math.random()*36)
        if (c < 10) uid += String.fromCodePoint(48+c)
        else Math.floor(Math.random()*2) == 0
            ? uid += String.fromCodePoint(65+c-10)
            : uid += String.fromCodePoint(97+c-10)
    }
    return uid
}

module.exports = userIdGenerator
