//Undefined
let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet

//Null
let empty = null
console.log(empty) // -> null , means no value

//Assignment operators
let firstName = 'Akhtar'
let country = 'Paksitan'

//Arithmetic Operators
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo  // 7
let diff = numOne - numTwo  //1
let mult = numOne * numTwo //12
let div = numOne / numTwo /// 1.33
let remainder = numOne % numTwo //1
let powerOf = numOne ** numTwo // 64  

console.log(sum, diff, mult, div, remainder, powerOf) 

// Mathematic solution 
const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC

// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)