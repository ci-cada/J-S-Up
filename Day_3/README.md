# 🥱Day 3 

Well continuing with my JavaScript journey.

I have not yet leart how to intergrate JavaScript and HTML but am yet to get to it. 
Currently learning the JavaScript language independent of the Browser interface to understand the basics then dive in into the web Browser integration part.

Today in my journey I am going to learn more about booleans, operators, window methods and date objects.
After these I am going to do some tasks then call it a day.

## Booleans 

This represents two values. _true_ or _false_. 
example;
```js
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false
```
Some of the truthy values are;
- All positive and negative numbers are treu except zero 
- all strings are true except _''_
- bool true 
Some of the falsy values are 
- 0 
- On 
- null
- undefined
- NaN
- bool false
- _''_, _""_, _``_, an empty 

**Undefined** 
A variable without a value and a function that does not return a value.
**Null**
Empty which has no value

## Operators 

#### Assignment Operators
This is the equal sign _=_, it is used to assign data into a variable

They come in many forms;
- =: (x = y): y is stores in x
- +=: (x += y): the sum of x and y is stored in x 
- -=: (x -= y): the difference of x and y is stored in x
- *=: (x *= y): the multiplication of x and y is stored in x
- /=: (x /= y): the divisor of x and y is stored in x
- %=: (x %= y): the modulo of x and y is stored in x
- **=: (x **= y): the exponential of x and y is stored in x

### Arithmetic Operators 
These are the mathematical operators
- Addition 
- Subtraction 
- Multiplication 
- Division 
- Modulus
- Exponential 
```js
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

```

### Comparison operators 

- == Equal in value only Equivalent 
- === Equal in value and data type: exactly equal 
- != Not equal 
- _>_ Greater than 
- < less than 
- _>=_ Greater than or equal to 
- <= Less than equal to 

[example](./comp.js)

A rule of thumb, if a value is not true with == it will not be equal with === this means that using === is safer than using ==.

###  Logical Operators 

The common logical operators are;

- &&: and 
- ||: or 
- !: not 
[example](./comp.js)

### Increment and Decrement Operator

The increment operator is used to increase the value stores in a variable while the decrement does the complete oposite of this.They can be either post or pre.

Example;
**Pre-Increment**
```js
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
```
**Post-Increment**
```js
let count = 0
console.log(count++)        // 0
console.log(count)          // 1
```
**Pre-Decrement**
```js
let count = 0
console.log(--count) // -1
console.log(count)  // -1
```
**Post-Decrement**
```js
let count = 0
console.log(count--) // 0
console.log(count)   // -1
```
### Ternary Operator 
This is used to write conditions;

Example;
```js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

This means if the statement is true it will print out the first statement esle print the last statement.

## Window Methods
### Window alert()
This displays an alert box with a specified message and an OK button.
It is an in built method that takes on argument.
syntax
```js
//alert(message)
alert('Welcome to 30DaysOfJavaScript')

```
### Window prompt()

This displays a prompt box with an input on the browser to take input values and the data is later stores in a variable. Its takes two arguments, the second though optional

```js
//prompt('required text', 'optional text')
let number = prompt('Enter number', 'number goes here')
console.log(number)
```

### Window confirm()

This displays a dialog box with specified message along with an OK and Cancel Button, A confirm box is used to ask permission from the user and executes if the permission is granted. it takes in a string argument. When one clicks okay the value is true else false.

```js
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box
```
These are just a few of the window methods as an intro 

## Date Object 
![Date time Object](./date.png)
When one likes to know the time a certain activity or event happens. In JS current time and date is created using the Date object. This provides methods that work with date and time. The methods start with _get_ since it provides the information.
Examples 
- getFullYear()
- getMonth()
- getDate()
- getHours()
- getMinutes()
- getSeconds()
- getMilliseconds()
- getTime()
- getDAy()

#### Creating a time Object

Once one has created the time object. It will provide any information about time with this we can access date information from the methods using the get methods. Let us create a time object.

```js
const now = new Date()
console.log(now)
```

In date time whenever we are required to print time using the real time date object. Use the _padStart_ that takes in two arguments and then change the output into a string.
the syntax is as follows;
```sh
String(now.getDate()).padStart(2, '0')
```
More explanation 

The padStart() method is a built-in method available for strings in JavaScript. It is used to pad the current string with another string (or a specified character) until the resulting string reaches a given length. If the original string is already longer than or equal to the specified length, padStart() has no effect, and the original string is returned as-is.
```js
str.padStart(targetlength [, padString])
//str the original string 
// largetlength being the desired length of the resulting padded string 
//padstring being an optional string or character user for padding the default is always and empty string 
```
**Example**
```js
const originalString = "5";
const paddedString = originalString.padStart(2, '0');
console.log(paddedString); // Output: "05"

```
This ensures that it starts with leading 0's where neccessary.

- [Exercises](./exercise.md)