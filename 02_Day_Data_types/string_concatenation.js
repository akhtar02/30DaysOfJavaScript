// Declaring different variables of different data types
let space = ' '
let firstName = 'Akhtar'
let lastName = 'Hussain'
let age = '24'
let country = 'Pakistan'
let city = 'Karachi'
let language = 'JavaScript'
let job = 'teacher'

// Concatenating using addition operator
let fullName = firstName + space + lastName // concatenation, merging two string together.
console.log(fullName)

let personInfoOne = fullName + '. I am ' + age + 'year. I live in ' + country // ES5
console.log(personInfoOne)
// Concatenation: Template Literals(Template Strings)
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)