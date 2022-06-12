// 1. Declare an empty array;
const empty_array = []

// 2. Declare an array with more than 5 number of elements
const array = [23, 4, 10, 9, 4]

// 3. Find the length of your array
array.length

// 4. Get the first item, the middle item and the last item of the array
array[0]
array[Math.floor(array.length/2)]
array.at(-1)

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['horse', 100, 'venom', 3.14, false, 3]

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7. Print the array using console.log()
console.log(itCompanies)

// 8. Print the number of companies in the array
console.log(itCompanies.length)

// 9. Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[Math.floor(array.length/2)], itCompanies.at(-1))

// 10. Print out each company
itCompanies.forEach(comp=>console.log(comp))

// 11. Change each company name to uppercase one by one and print them out
itCompanies.map(comp=>comp.toUpperCase()).forEach(comp=>console.log(comp))

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
for (let i = 0; i < itCompanies.length-2; i++) process.stdout.write(itCompanies[i] + ", ")
process.stdout.write(itCompanies.at(-2) + " and " + itCompanies.at(-1) + " are big IT companies." + "\n")

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const companyExists = function (name) {
    itCompanies.find(v=>v===name) ? console.log(name) : console.log("a company not found")
}
companyExists('IBM')

// 14. Filter out companies which have more than one 'o' without the filter method
itCompanies.filter(c=>c.split('').filter(v=>v==='o').length>1)

// 15. Sort the array using sort() method
itCompanies.sort()

// 16. Reverse the array using reverse() method
itCompanies.reverse()

// 17. Slice out the first 3 companies from the array
itCompanies.slice(3)

// 18. Slice out the last 3 companies from the array
itCompanies.slice(0, -3)

// 19. Slice out the middle IT company or companies from the array
if (itCompanies.length % 2 != 0) itCompanies.slice(Math.floor(itCompanies.length/2),Math.ceil(itCompanies.length/2))
else itCompanies.slice(itCompanies.length/2-1,itCompanies.length/2+1)

// 20. Remove the first IT company from the array
itCompanies.splice(0,1)

// 21. Remove the middle IT company or companies from the array
if (itCompanies.length % 2 != 0) itCompanies.splice(Math.ceil(itCompanies.length/2),1)
else itCompanies.splice(itCompanies.length/2-1,2)

// 22. Remove the last IT company from the array
itCompanies.pop()

// 23. Remove all IT companies
itCompanies = []
