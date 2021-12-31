// ==================   Declarative Programming ====================

array.forEach(function(val) {
    // do stuff
});

// ==================  Higher-Order Functions and Callbacks ===========

sayHello = function(name){         // this is my callback function
    return `Hi, ${name}!`;
  }
  
  sendMessage = function(callback){         // this is my higher-order function
    return callback
  } 
  
  console.log( sendMessage(sayHello("Robert")) ); // output:=>  'Hi, Robert!'
  



//   Or, refactored with arrow functions:
  
   let sayHello = (name) => `Hi, ${name}!`;          // this is my callback function
  
  let sendMessage = callback => callback          // this is my higher-order function
  
  console.log( sendMessage(sayHello("Robert")) );           // output:=>  'Hi, Robert!'



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


square.forEach(element => console.log( `clicked ${element}`))