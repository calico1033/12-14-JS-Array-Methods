# 12-14-JS-Array-Methods

Array Iteration Methods
Today, we're going to learn about some Array methods These methods are also a lot more flexible and powerful than using a loop, with the additional benefit that they are generally considered easier to read.

Prerequisites
Array
JavaScript Function
Learning Objectives
Higher-Order Functions and Callbacks
forEach()
map()
filter()
reduce()

Introduction (15 min / 0:15)
JavaScript Arrays have lots of helpful built-in methods. These methods allow you to write more declarative/functional code as opposed to imperative code.


Imperative Programming
Imperative programming is a more step-by-step way of writing code. for loops, for example, are imperative:

for (let index = 0; index < array.length; index++) {
    // do stuff
}
With a for loop we're saying:

Initialize a looping variable
Use the looping variable to access an element in the array
Increment the looping variable
If the looping variable is less than the length of the array, loop again

Declarative Programming
In declarative programming, we write code that describes what we want to do:

array.forEach(function(val) {
    // do stuff
});

Trends in Development
Current trends in development are pushing toward using declarative code over imperative code when possible.

This walk-thru summarizes Array iterator methods, that is, methods that declaratively iterate over an array's elements. How are we iterating? Don't need to worry about that.


Functions as Values (5 minutes / 0:20)
One of the things that makes JavaScript so powerful is that we can reference functions and treat them like values stored in a variable.

This means we can:

Add functions to arrays and objects, just like any other value
Pass functions as arguments to another function
Return a function from a function
Taking functions as arguments and returning functions is a little advanced, so we're just going to touch on it today. But the significance is: a function that takes a function as an argument is called a higher-order function.


Higher-Order Functions and Callbacks (5 minutes / 0:25)
Higher-order functions take other functions as arguments or returns functions as output.

Callback functions are passed into another function as an argument

example:

// this is my callback function
sayHello = function(name){ 
  return `Hi, ${name}!`;
}

// this is my higher-order function
sendMessage = function(callback){  
  return callback
} 

sendMessage(sayHello("Robert")); // output:=>  'Hi, Robert!'
Or, refactored with arrow functions:

// this is my callback function
sayHello = name => `Hi, ${name}!`;

// this is my higher-order function
sendMessage = callback => callback 

sendMessage(sayHello("Robert")); // output:=>  'Hi, Robert!'
The array methods that we're going to learn today all fit this definition: they are functions (methods of the Array object) that take a function as an argument and use it to iterate over the array.

The purpose is to provide a level of abstraction and simplify array iteration (going through each element in an array and performing some operation).


Higher-Order Array Methods



.forEach() (20 minutes / 0:45)
PURPOSE: General purpose iterator method.

Very frequently, we will want to go through an array and do something for every element in the array.

As an example, we'll for loop through the array bellow printing each value a time.

const friends = ["ross", "rachel", "joey", "monica", "phoebe", "chandler"];

for (let i = 0; i < friends.length; i++) {
  console.log(`Sending email to ${friends[i]}`)
}
This process of iterating through an array is so common that JavaScript provides an array method for it called forEach. Let's get rid of the for loop and replace it with a forEach.

// or ES6 full power fancy one-liner
friends.forEach(element => console.log(`Sending email to ${element}`))
Optional: passing in a separate named callback
This will go through each element in the friends array and execute the callback function for each element in it. Very important, notice that the argument of the callback will represent each element in the array.


You Do: .forEach ( 5 minutes / 0:50)
In your script.js (or repl), create an array of programming languages you've heard of.
Use .forEach to print the message: "${programmingLanguage} is a programming language!", replacing ${programmingLanguage} with one of the languages in your array.

We Do: .forEach ( 5 minutes / 0:55)
Let's step up the .forEach example a bit. Using the same array, let's create a new array with all names uppercased.

const friends = ["ross", "rachel", "joey", "monica", "phoebe", "chandler"];
const friendsUpperCase = []

friends.forEach(name => {
  const upperCasedName = name.toUpperCase()
  friendsUpperCase.push(uppercasedName)
})

console.log(friendsUpperCase)
// ["ROSS", "RACHEL", "JOEY", "MONICA", "PHOEBE", "CHANDLER"]
Cool, so we can iterate through a array and create a new list from it, but the example is still a bit rough. We don't like creating functions that have side effects because it's bad practice.

When a function changes or affects something outside of itself, it's considered a side-effect.


.map() (20 minutes / 1:15)
PURPOSE: Create a new array from a source array, usually "transforming" its values. The returned array is always the same length as the source array.

We've discussed functions that were called for their side effect versus functions that are called for their return value or output. In the previous example, we used forEach to produce some side effect.

Frequently, however, rather than do something with each item in an array, we want to do something to each item, applying some transformation and producing a new, modified version of the array.

forEach has a closely related sibling called map. The only difference between the two is that you must always return something from map. In forEach, returning anything is pointless.

Using the same friends array from before, let's do the same transformation (by capitalizing each word). Only this time, we'll do it better.

const upperCaseWords = friends.map(function(name) {
  let upper = name.toUpperCase()
  return upper
})
Let's rely on the implicit return of arrow functions for some truly beautiful code. We can condense it even further, by making it into an arrow function and moving the logic all into one line.

const upperCaseWords = friends.map(name => name.toUpperCase())

console.log(upperCaseWords)
Map is truly the greatest.


You do: mapping the numbers (10 min / 1:25)
Using the array of numbers provided below, write a map function that squares each number (multiplies it by itself). You should end up with another array of equal length.

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

Break (10 min / 1:35)

.filter() (20 minutes / 1:55)
PURPOSE: Select certain elements from a source array.

Another common procedure is to filter elements from an array based on some custom condition. The condition must return true or false. If it returns true, the element is kept and stored in the new array. If false, it's skipped.

Use the numbers array above for this exercise.

First we'll write the filter function (the custom condition):

function greaterThan100(num) {
  return num > 100
}
We can write a loop that uses this function:

const bigNums = []

for (let i = 0; i < numbers.length; i++) {
  if (greaterThan100(numbers[i])) {
    bigNums.push(numbers[i])
  }
}

console.log(bigNums)
Or we can use .filter()

const bigNums = numbers.filter(greaterThan100)
The same thing but using an anonymous function:

const bigNums = numbers.filter(num => num > 100)
Return Value
filter will return a new array composed of items for which the passed in function returns true when called on each item.

You do: .filter() (15 minutes / 2:10)
Declare a variable states.
Assign to it the array of objects from capitals.js in this repo.
Using .filter() you should be able to:
Create an array called allCapitalsA with all the states with capitals that start with the letter A.

Create a array called allStatesTwoWords with all the states with two words in their name.


.reduce()(20 minutes / 2:30)
PURPOSE: Reduce an array into a single value. Note that the "single value" can be a single object, array - anything.

The most flexible array method is called reduce. Reduce, as the name implies, can take an array and reduce it to a single value.

Reduce is usually difficult to grasp at first; don't stress about this. It is definitely not something you need to have mastered, it is just good to have an early awareness. It takes a fair amount of practice to intuitively use .reduce() when solving problems.

Example
We can take the sum of an array of numbers (i.e. reduce the set of numbers to a sum):

const nums = [25, 6, 100, 3]

// function that returnn the sum of two numbers
const add = (acc, num) => acc + num
const sum = nums.reduce(add)
console.log(sum)
//output: 134

// using an arrow function for the callback
const sum = nums.reduce((acc, num) => acc + num)
console.log(sum)
//output: 134
Other example, Count votes

const votes = ['Yes', 'No', 'No', 'Yes', 'Yes'];

const tally = votes.reduce(function(acc, vote) {
  acc[vote] = acc[vote] ? acc[vote] + 1 : 1;
  return acc;
}, {});

// tally is {"No": 2, "Yes": 3}

//using an arrow function for the callback 
let tally = votes.reduce((acc, vote) => {
  acc[vote] = acc[vote] ? acc[vote] + 1 : 1;
  return acc;
}, {});
HINT: Try adding a console.log(acc) inside the callback.


You do: .reduce() (15 minutes / 2:45)
Using the array of objects bellow, use .reduce() to sum the population of all cities.

const cities = [
  {name: "Tokyo", population: 37400068},
  {name: "Delhi", population: 28514000},
  {name: "Shanghai", population: 25582000},
  {name: "São Paulo", population: 21650000},
  {name: "Mexico City", population: 21581000},
  {name: "Cairo", population: 20076000},
  {name: "Mumbai", population: 19980000},
  {name: "Beijing", population: 19618000},
  {name: "Dhaka", population: 19578000},
  {name: "Osaka", population: 19281000},
  {name: "New York City", population: 18819000}
  ]


// the answer is 252079068

Method Summary
Method	Purpose	Returns	Callback Should	Callback's Args
forEach(cb)	General purpose	undefined	Do whatever you want	(elem, idx, array)
map(cb)	Create new array from source array	new array	Modify each element as desired and return it	(elem, idx, array)
reduce(cb, initAcc)	Reduce the array to a single value/object	final value of acc	Return the new value for acc	(acc, elem, idx, array)
filter(cb)	Filter source array	new array	Return truthy if elem is to be included	(elem, idx, array)
find(cb)	Find an element	the first elem found	Return truthy if elem is what you're looking for	(elem, idx, array)
findIndex(cb)	Find a certain element's index	the index of the first elem found	Return truthy if elem is what you're looking for	(elem, idx, array)
some(cb)	Check if array has something	true or false	Return truthy if elem is what you're checking for	(elem, idx, array)
every(cb)	Check if every elem passes condition	true or false	Return truthy if elem is what you're checking for	(elem, idx, array)
Notice that all of the iterator methods, except reduce, have identical signatures, that is, they all accept a single argument - a callback function.

Additionally, the signature of the callback functions are all the same as well!

This fact makes it easier to remember the syntax of these important methods, with the reduce method being the only one that varies slightly.


Bonus:
Look up these other array methods, run some tests and see if you can get then to work.

.find()
.findIndex()
.some()
.every()


Review and Questions
Check out the Coding Meetup Kata's for lots more practice
Node School Workshoppers (Functional JavaScript elective)
Eloquent JS Higher-Order Functions
Reference
Higher-order functions video series

Array Reference on MDN