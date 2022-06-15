// 2. Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(encoding, n) {
    let colors = []
    let l = n
    do {
        let c = 3
        let color = ''
        if (encoding == 'hexa') {
            color += '#'
            while (c > 0) {
                color += Math.floor(Math.random()*256).toString(16)
                c--
            }
            colors.push(color)
        }
        else if (encoding == 'rgb') {
            color += 'rgb('
            while (c > 0) {
                color += '' + Math.floor(Math.random()*256)
                c > 1 ? color += ', ' : color += ')'
                c--
            }
            colors.push(color)
        }
        else return []
        l--
    } while (l > 0)
    return (n > 1 ? colors : colors.join())
}

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
console.log(generateColors('magic', 4)) // 'rgb(33,79, 176)'

// 3. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {
    const shuffled = []
    while (array.length > 0) {
        shuffled.push(array.splice(Math.floor(Math.random()*array.length),1)[0])
    }
    return shuffled;
}

console.log([4,5,8,5,3,2])
console.log(shuffleArray([4,5,8,5,3,2]))

// 4. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n) {
    let f = 1
    while (n > 0) {
        f *= n
        n--
    }
    return f
}

console.log(factorial(5))

// 5. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
// ?????
function isEmpty(p) {
    return typeof p == 'undefined'
}

console.log(isEmpty(3))
console.log(isEmpty())

// 6. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(array) {
    const len = array.length
    let sum = 0
    let n = 0
    for (let i = 0; i < len; i++) {
        if (typeof array[i] == 'number' || Number(array[i]).toString() != 'NaN' ) {
            sum += Number(array[i])
            n++
        }
        else console.error(`${array[i]} is not a number!`)
    }
    return sum/n
}

console.log(average([4,3,1,9,23,3]))
console.log(average([4,'1',1,9,23,3]))
