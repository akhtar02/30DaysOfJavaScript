let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers) // false

let userOne = {
  name: 'Akhtar',
  role: 'developer',
  country: 'Pakistan'
}
let userTwo = {
  name: 'Akhtar',
  role: 'developer',
  country: 'Pakistan'
}
console.log(userOne == userTwo) // false

let numbers = nums
console.log(nums == numbers)  // true

let userOne = {
name:'Akhtar',
role:'developer',
country:'Paksitan'
}
let userTwo = userOne
console.log(userOne == userTwo)  // true