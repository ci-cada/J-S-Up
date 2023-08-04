# Day 1

JavaScript is a language for the web browser. This makes it the most popular of the programming languages in the world. The APi and the Document object model are awfull making it aslo the most despised language since it takes fault for them. 

**Variables**

Containers of data. Tey are used to store data in the memory allocation. when declared a memory location is reserved. The data when assigned the space will be filed with the data. in delcaration of varibles JavaScript uses _let_, _var_ and _const_ keywords.

When declaring variable it is recommended you use _let_ for words that do change and _const_ for those that do not change for example PI.

_Var_ having leaks and errors is prone to a bunch of errors.

In naming variables there are a few things to be considered.
- A JavaScript variable name should not begin with a number.
- A JavaScript variable name does not allow special characters except dollar sign and underscore.
- A JavaScript variable name follows a camelCase convention.(isMarried)
- A JavaScript variable name should not have space between words.


**Data Types**

These are particular kinds of data itmes, defined by values they posses. This allows the programm to perform certain specific tasks on them.

Some of the data types include;
- String 
- Boolean 
- Integer
- Float 
- Double 
- Character

**Strings**

A collection of one or more characters between two single quotes, double quotes, or backticks.

**Booleans**

A boolean value is either True or False. Any comparisons returns a boolean value, which is either true or false. A boolean data type is either a true or false value.

**Undefined**

In JavaScript, if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.

**Null**

Null in JavaScript means an empty value.

**Strings**

Strings are texts, which are under single , double, back-tick quote. To declare a string, we need a variable name, assignment operator, a value under a single quote, double quote, or backtick quote. 

**Checking Data Types**

To check the data type of a certain variable, we use the typeof operator. See the following example.

```js
console.log(typeof 'Jussie') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined

```

```js
//declaring variables 
let fName = "Jussie"
let sName = "Cica"
let country = "Colorado"
let city = "11 Ace"
let age = 22
let isMArried = true
let height = 2.777
let initials = 'J'

console.log(sName, country, age)
```

Using the single line method

```js
let name = "jussie", height = 2.444, age = 20

console.log(name, height, age)
```
### Exercises

- Write a single line comment which says, comments can make code readable

- Write another single comment which says, Welcome to Learning JavaScript

- Write a multiline comment which says, comments can make code readable, easy to reuse and informative

- Create a file and declare variables and assign string, boolean, undefined and null data types

- Create a file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

- Declare four variables without assigning values

- Declare four variables with assigned values

- Declare variables to store your first name, last name, marital status, country and age in multiple lines.

```js
let Fname = "Jussie"
let lName = "Lewis"
let isMarried = false
let country ="Kennya"
let myAge = 23
```

- Declare variables to store your first name, last name, marital status, country and age in a single line

[Solution](./solutions.js)
