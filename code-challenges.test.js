// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest







// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// describe('capKey',()=>{
// const hitchhikersCharacters = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]
// // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

//   it('returns an array with a sentence about each person with their name capitalized', () => {
//     expect(capKey(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//   })
// })




// b) Create the function that makes the test pass.

// Pseudo code:
// Name: capKey
// Input: Array
// Output: Array
// Process: Create a function that takes in an array and returns an array with a sentence about each person with their name capitalized by using string interpolation, charAt() and toUpperCase

const capKey = (key, key1) => {
 const newArr = []
 for(let i = 0; i < key.length; i++){
  const person = key[i]
  const job = key1[i]
  const capName = person.name.charAt(0).toUpperCase() + person.name.slice(1)
   newArr = `${capName} is a ${job} `
 }
return newArr
}
 
// Output failed I know I'm close by im not getting it.




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// describe('dividedByThree', () => {
// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// // Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// // Expected output: [ 2, 1, -1 ]

//   it('returns an array of only the REMAINDERS of the numbers when divided by 3', () =>{
//     expect(dividedByThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]) 
//     expect(dividedByThree(hodgepodge2)).toEqual([ 2, 1, -1 ]) 
//   })
// })



// b) Create the function that makes the test pass.

// Pseudo code:
// Name: dividedByThree
// Input: array
// Output: array
// Process: Create function. Create remainders variable as a open array
// Iterate through arr with for loop. use conditional and typeof to tell if is a number and push into remainders array with .push and divide by 3


// const dividedByThree = (arr) => {
//   const remainders = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//       remainders.push(arr[i] % 3)
//     }
//   }
//   return remainders
// }

//  Output Passed


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// describe('theSumOfCubes', () =>{
// const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// // Expected output: 1125

//   it('returns the sum of all the numbers cubed', ()=> {
//     expect(theSumOfCubes(cubeAndSum1)).toEqual(99)
//     expect(theSumOfCubes(cubeAndSum2)).toEqual(1125)
//   })
// })



// b) Create the function that makes the test pass.

// Pseudo code:
// Name:theSumOfCubes
// Input: array
// Output: number
// Process Create function, make sum variable. Iterate through array with for loop. Add the cubed value to sum variable and get the power of the number using Math.pow().


// const theSumOfCubes = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
    
//     sum += Math.pow(arr[i], 3)
//   }
//   return sum
// }


// Output Passed

