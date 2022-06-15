// 1. Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

// 2. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
    return a + b;
}

// 3. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
function _areaOfCircle(r) {
    return Math.PI * r * r;
}

// 4. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(temp) {
   temp * 9 / 5 + 32;
}

// 5. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function BMI(w, h) {
    const hm = h/100
    const bmi = w / (hm * hm)
    let output = ""
    if (bmi < 18.5) output = "You are underweight"
    else if (bmi >= 18.5 && bmi <= 24.9) output = "You are of a normal weight"
    else if (bmi >= 25 && bmi <= 29.9) output =  "You are overweight"
    else output = "You are obese"
    return output;
}

// 6. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    if (month <= 2 || month == 12) return 'Winter' 
    else if (month >= 3 && month <= 5) return 'Spring' 
    else if (month >= 6 && month <= 8) return 'Summer'
    else if (month >= 9 && month <= 11) return 'Autumn'
    else return undefined
}
