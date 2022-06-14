const countries = require('./countries')
const webTechs = require('./web_techs')

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.replace(/\,\./).split(' ')
console.log(words)
console.log(words.length)

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat')
if (!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar')
shoppingCart[shoppingCart.indexOf('Tea')] = 'Grean Tea'

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia')) console.log('ETHIOPIA')
else countries.push('Ethiopia')

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes('Sass')) console.log('Sass is a CSS preprocess')
else webTechs.push('Sass') && console.log(webTechs)

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)
