# Day 8 JS 🦾

In JavaScript, objects are one of the fundamental data types and are used to represent and organize data in a structured manner. Objects are collections of key-value pairs, where each key is a string (or a symbol, which is less common) that acts as a property name, and each value can be of any data type, including other objects. This makes objects a versatile and powerful way to model real-world entities and their properties.

Here's how you can define an object in JavaScript using two different syntaxes:

## Object Literal Syntax:
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};
```
## Constructor Function Syntax (less common):

```js
function Person(firstName, lastName, age, isStudent) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isStudent = isStudent;
}
const person = new Person("John", "Doe", 30, false);
```
In the example above, we created an object called person with various properties like firstName, lastName, age, and isStudent.

## Accessing Object Properties:
You can access the properties of an object using dot notation or bracket notation:

```
console.log(person.firstName); // Output: "John"
console.log(person["lastName"]); // Output: "Doe"
```
## Modifying Object Properties:

You can also modify the values of object properties:
```
person.age = 31;
person["isStudent"] = true;
```
## Adding New Properties:
You can add new properties to an object dynamically:
```
person.email = "john.doe@example.com";
```
## Removing Properties:
To remove a property from an object, you can use the delete keyword:
```
delete person.isStudent;
```
## Object Methods:
Objects in JavaScript can also contain functions as values. These functions are known as methods when they are defined within an object and can be invoked like regular functions:
```
const car = {
  brand: "Toyota",
  model: "Camry",
  startEngine: function () {
    console.log("Engine started!");
  },
};

car.startEngine(); // Output: "Engine started!"
```
## Object Iteration:
You can iterate over an object's properties using various methods, such as for...in loop or Object.keys(), Object.values(), and Object.entries() methods.
```
for (const key in person) {
  console.log(key + ": " + person[key]);
}

const keys = Object.keys(person);
console.log(keys); // Output: ["firstName", "lastName", "age", "email"]
```
JavaScript objects are a fundamental building block in the language and play a crucial role in organizing and manipulating data in web development and many other applications.

The Exercises are in [This](../Day_57) folder. 

### 🦾✨Happy Coding