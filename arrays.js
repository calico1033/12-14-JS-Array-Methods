// ==================   Declarative Programming ====================

// array.forEach(function(val) {
//     // do stuff
// });

// ==================  Higher-Order Functions and Callbacks ===========

 let sayHello = function(name){         // this is my callback function
    return `Hi, ${name}!`;
  }
  
  let sendMessage = function(callback){         // this is my higher-order function
    return callback
  } 
  
  console.log( sendMessage(sayHello("Robert")) ); // output:=>  'Hi, Robert!'
  



//   Or, refactored with arrow functions:
  
   let sayHelloAgian = (name) => `Hi, ${name}!`;          // this is my callback function
  
  let sendMessageAgain = callback => callback          // this is my higher-order function
  
  console.log( sendMessageAgain(sayHelloAgian("Robert")) );           // output:=>  'Hi, Robert!'



//   ====================== .forEach() ======================


// As an example, we'll for loop through the array bellow printing each value a time

const friendsLoop = ["ross", "rachel", "joey", "monica", "phoebe", "chandler"];

for (let i = 0; i < friendsLoop.length; i++) {              // can you friendsLoop.length/2 to go through only half the array
  console.log(`Sending email to ${friendsLoop[i]}`)
}

// --------------------------------------------------------------------------------------------------------

// This process of iterating through an array is so common that JavaScript provides an array method for it called forEach.
//  Let's get rid of the for loop and replace it with a forEach.

const friends = ["ross", "rachel", "joey", "monica", "phoebe", "chandler"];
friends.forEach(element => console.log(`Sending email to ${element}`));             // or ES6 full power fancy one-liner
// read as : for each element inside of the friends array, I want you to do this 
//           (.forEach) (element)           (friends)              (console.log( `Sending email to ${element}` ));

// --------------------------------------------------------------------------------------------------------------


const friendsExample = ["ross", "rachel", "joey", "monica", "phoebe", "chandler"];
friendsExample.forEach(( element, index) => {                           // to get the index, you can add another parameter to the call back function (element) 
    console.log( `Sending email to ${element}` );                        // with arrow functions, if you want another parameter, you have to surround the parameter with another parenthesis
    console.log(index);
})


friendsExample.forEach(element => console.log( `clicked ${element}`))

// ------------------------------------------------------------------------------------------------------------------

//  .MAP DOES THE SAME AS THIS AND IS MORE ORGANIZED


// we want to grab the full array and capitalize them
const friendsAnotherExample = ["ross", "rachel", "joey", "monica", "phoebe", "chandler"];

// first we create brand new array
const friendsAnotherExampleUpperCase = []                     // with a for.Each we can only grab the item and put it inside another array

friendsAnotherExample.forEach(name => {
    friendsAnotherExampleUpperCase.push(name.toUpperCase())
})

console.log(friendsAnotherExample);          // displays original
console.log(friendsAnotherExampleUpperCase);       //displays them uppercase

// -------------------------------------------------------------------------------------------------------------------------

// .map

const friendsOne = ["ross", "rachel", "joey", "monica", "phoebe", "chandler"];

const friendsOneUpperCase = [];

const upperCaseWords = friendsOne.map(list => {
    return list.toUpperCase()
})

console.log(upperCaseWords);

// ------------------------------------------------------------------------------------------------------------------------------

// .filter

const numbers = [
    15,
    18,
    3921,
    327,
    88,
    1235,
    1,
    55855,
    34,
    5,
    9,
    9019,
    156,
    874,
    76,
    444,
    12346
  ]

  const bigNumbers = numbers.filter(num => {
      return num > 100
  })

  console.log(bigNumbers);

// ------------------------------------------------------------------------------------------------------------------------------

//  write a map function that squares each number (multiplies it by itself).

const numbersOne = [
    15,
    18,
    3921,
    327,
    88,
    1235,
    1,
    55855,
    34,
    5,
    9,
    9019,
    156,
    874,
    76,
    444,
    12346
  ]

  const squareNumbers = numbersOne.map(number => Math.pow(number,2))
  console.log(squareNumbers);


// ------------------------------------------------------------------------------------------------------------------------------

// Practice go to capital.js

// ------------------------------------------------------------------------------------------------------------------------------

// .reduce

// function that returnn the sum of two numbers
const nums = [25, 6, 100, 3]

const sums = nums.reduce( (result, item) => {
    return result + item  // its saying to add item into result
})

console.log(sums);


// ------------------------------------------------------------------------------------------------------------------------------

const votes = ["Yes", "No", "No", "Yes", "Yes"];