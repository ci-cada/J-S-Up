# Day 7 🥳

## Functions 

These are custom functions functions.

Definition: Function is a reusable block of code or programming statements designed to perform a cartain taks. They are declared by a function key word followed by a name a parentheisis and inside the parentheses you can pass the arguments. To store data, a function must return certain data types and to get the value, we call or invoke the finction 

Functions Make ones code;
- clean 
- reusable 
- easy to test.

They can be declared or created in a couple of ways 
_Declaration, Expression, Anonymous, Arrow Functions_

**All about Functions**

- Function Declaration 
  Syntax
```js
  //declaring a function without a parameter
function functionName() {
  // code goes here
}
functionName() // calling function by its name and with parentheses
```

**Examples**
```js
// function with multiple parameters
function functionName(parm1, parm2, parm3,...){
  //code goes here
}
functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed


// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //calling a function
console.log(sumArrayValues(numbers));


    const areaOfCircle = (radius) => {
      let area = Math.PI * radius * radius;
      return area;
    }
console.log(areaOfCircle(10))

// function with one parameter
function functionName(parm1) {
  //code goes her
}
functionName(parm1) // during calling or invoking one argument needed

function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(10)) // should be called with one argument

function square(number) {
  return number * number
}

console.log(square(10))

```

There a re functions that take unlimited number of arguments. When one does not know how many arguments may be passed, one must write a duction that allows this. 

Here are some different Implementations when using both regular function and arrow functions.

**Regular Function**
```js
// Let us access the arguments object
​
function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// function declaration
​
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
```
**Arrow Functions**

This is  an alternative way of writting a function, where you use an arrou instead of the keyword _function_ to declare a function.
```js
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
  return n * n
}

console.log(square(2)) // 4

//The above is an example of a normal function
const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const square = n => n * n  // -> 4
```
This does not have the function scoped arguments object. To implement a function that takes unlimited values in arrow function we use the spread operator followed by any parameter name. This allows anything passed as an argument accessible in the arrow function.

```js
// Let us access the arguments object
​
const sumAllNums = (...args) => {
 // console.log(arguments), arguments object not found in arrow function
 // instead we use a parameter followed by spread operator (...)
 console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]
// function declaration
​
const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

```

**Anonymous Function**

These are functions without names;
They can be declared as;
```js
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}
```
**Expression Function**

THere are part of the anonymous functions. If we create a function, no name and asign it to a variable we call the variable to obtain the data;
```js
// Function expression
const square = function(n) {
  return n * n
}

console.log(square(2)) // -> 4
```
**Self Invoking Functions**
Functions that not need calling to return a value.

```js
(function(n) {
  console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)
```

**Functions haing Default Parameters**

When one passes default vaues to parameters when invoking them, the default value will be used. Both the normal and the arrow function can have default values.

```js
function greetings(name = 'Peter') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Jussie'))

function generateFullName(firstName = 'Ephesians', lastName = 'Lewis') {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('Sophia', 'Wambui'))


const full_name = (firstName = 'King', lastName = 'Jussie') => {
    return `${firstName} ${lastName}`
}

console.log(full_name())
console.log(full_name('Guav', 'Guardhamez'))

```

The Exercises are in [This](../Day_41) folder. 

### 🦾✨Happy Coding