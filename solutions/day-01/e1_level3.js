const countries = require('./countries')
const webTechs = require('./web_techs')

// 1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort((a, b) => a - b)
ages[0]
ages.at(-1)
if (ages.length % 2 != 0) ages[Math.floor(ages.length)]
else ages.slice(ages.length/2-1,ages.length/2+1).reduce((median,age)=>median+=age,0)/2
var avg = ages.reduce((sum,age)=>sum+=age,0)/ages.length
ages.at(-1) - ages.at(0)
Math.abs(ages.at(0) - avg)
Math.abs(ages.at(-1) - avg)

// 1a.Slice the first ten countries from the countries array
countries.slice(0,10)

// 2. Find the middle country(ies) in the countries array
if (countries.length % 2 != 0) countries[Math.floor(countries.length)]
else countries.slice(countries.length/2-1,ages.length/2+1)

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if (countries.length % 2 === 0) countries.slice(0,countries.length/2); countries.slice(ages.length/2)
else countries.slice(0,Math.ceil(countries.length/2)); countries.slice(Math.ceil(countries.length/2))
