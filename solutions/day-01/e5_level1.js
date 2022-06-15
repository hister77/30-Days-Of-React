// Create a function called getPersonInfo. The getPersonInfo function takes an object parameter. The structure of the object and the output of the function is given below. Try to use both a regular way and destructuring and compare the cleanness of the code. If you want to compare your solution with my solution, check this link.

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/

const getPersonInfo = function (info) {
    const { firstName, lastName, age, country, job, skills, languages} = info
    const listify =  function(array) {
        let listified = ""
        for (let i = 0; i < array.length - 1; i++) {
            listified += array[i]
            listified += i < array.length - 2 ? ", " : " and "
        }
        listified += array.slice(-1)
        return listified
    }
    console.log(`${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is and ${job}. He teaches ${listify(skills)}. He speaks ${listify(languages)}.`)
}

getPersonInfo(person)
