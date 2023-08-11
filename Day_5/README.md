# Day 5 

## Arrays 

This are containers that can store multiple values of the same or different data types. Each element can be accessed using an index, which referes to the position which it is. The index of an array starts from 0 to the last index which is always -1 of the actual array value. 

Accessing elements in a n Array is through using the index of the array. It can be as well modified to another value.

To create an empty array, it is common using const instead of let meaning you can not use the variable name again. 

**Usng a Constructor**
```js
// syntax
const arr = Array()
// or
// let arr = new Array()
console.log(arr) // []
```
**Using Square Brackets**
```js
// syntax
// This the most recommended way to create an empty list
const arr = []
console.log(arr)
```

One can also initialize array with values. 

```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)
```

As we said earlier an array can have different types of data from float to int to string to dictionaries.

```js
const arr = [
    'Jussie',
    250,
    true,
    { country: 'Kenya', city: 'Nairobi' },
    { skills: ['C', 'C++', 'JS', 'Java', 'Python'] }
] // arr containing different data types
console.log(arr)
```

Also, arrays can be creates using split, split(), is a method, function to which it splits the value or a given data depending on the argument given. Say we have a sentence "I live in congo", when we use the split method, and specify _split(' ')_ it will split the sentece to an array conataining each word as its contents instead of a whole list.

```js
let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]
```

#### Methods of manipulating arrays 

There are a couple of methods used to manipulate arrays these are;
- Array
- length 
- concat 
- indexOf
- slice
- splice
- join
- toString 
- includes 
- lastIndexOf
- isArray 
- fill
- push 
- pop 
- shift 
- unshift 

**Array**

This is a constructor used to create an array.

**Fill**

It fills the array with static values

**Concat**

Joins two arrays 

**length**

This helps in knowing the size or length of the array 

**indexOf**

This confirms if an items exists in an array. This returns its position and if not found -1
It also checks if the item is in the list.

**lastindexof**

This returns the position of the last item in the array, if it does not exist it returns -1 

**includes**

Checks if the item is contained in the list

**isArray**

Confirms if the data tpe is an array 

**toString**

converst the array to string 

**join**

It is used to join the elements in an array. using the passed argument they will be returned as strings. The passed argument will be the one separating the list.

**Slice**

This cuts the items in range of the arguments passed. It normaly takes two arguments but can have one. 

**splice**

Taking three paramenters, one being the starting position, the numner of times to be removed and the number to be added

**push**

Adds the item to the end of the existing array 

**pop**

Removes the last element 

**Shift**

THis will remove the frst element in teh array 

**unshift**

Adds an element at the begining of the array

**reverse**

This will reverse the order of the array

**sort**

This sorts the array in ascending order. It takes a call back function

**array of arrays**

As earlier stated array can have different data types even an array itself. 

[**Examples of Each Topic**](./example.js)