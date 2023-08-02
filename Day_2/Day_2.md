# ✔ Day 2 

## Data Types 

Diging more into data types. They do decribe the characteristics of data. They can be divided into two.
- Primitive data types 
- Non-primitive data types

**Primitive Data Types**
These are immutable data types meaning they can not be modified once created

They are one in;
- Numbers: Integers and, Floats
- Strings: data with single, double or backtick quotes
- Booleans: True or False value 
- Null: An empty value
- Undefined: a declared variable without a value
- Symbol: a value that is generated usinga symbol constructor

**Non-Primitive Data Types**
These are data types which once created they can be modified. For example an array, the values are index referrenced.

Meaning even if two arrays are to be compared they cannot be the same even if they have the same number of values. The values within might be different 

- Objects
- Arrays

*Rule of Thumb*, non-primitive data types should not be compared, these are arrays, functions or objects. They are reference types, since they are being compared by reference instead of value. The objects are not strictly equal if they refere to the same underlying object.

## Numbers 

They are integers and decimal values that can do all the arithmetic operations. 

In JavaScript there is a _Math_ object that provides a coupleof methods to work with numbers as shown in [Math](./math.js) 

There is also a random number generator
```js 
let randomNum = Math.random() // generates 0 to 0.999...
```
The code generates random number from 0 to 0.9999

When one wants to generate a random number from 0 to 20;

```js
let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTwenty = randomNum * 21

console.log(numBtnZeroAndTwenty)         // this gives: min 0 and max 20.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTwemty)
console.log(randomNumRoundToFloor)    // this gives between 0 and 20
```

## Strings

These are texts that contain _single_, _double_ or _back-tick_ quotes. Declaring strings are similar to numbers where there must be a name an assignment operator the value under the the folowing quotes:
One can join two or more strings wich is known as _concatenation_
Strings a can be joined using various methods;
- Addition operator: This is the old way and typically error-prne and tedious. THis way we use the *+* sign to concatenate the two strings you desire

- Long Liuteral Strings: These are mostly paragraphs that can not fit in one line hence we use the backslash to indicate that the string will continue to the next line

- Escape sequences in strings: These are sequences of characters that, since a prefix has a specific meaning they are used together with the backslash to mean something different. In JS the following are used: 
  - \n: new line
  - \t: Tab, means 8 spaces
  - \\: Back slash
  - \': Single quote (')
  - \": Double quote (")

- Template Literals(Template strings): Similar to Python, which is known as string formating. In JS we enclose the epxression using a curly bracket _{}_ preceded with the dollar sign _$_.

[Strings](./strings.js)

### String methods

Strings being primitive data type. Meaning it can not be modified once created. It has many methods that help us work with strings such as Math object with numbers.

Some of the string methods in JS are:
1. length - accessing the length of the string ie. the number of characters including the whitespace character.

**Syntax**
```js
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8
```
2. Accessing characters- This is similar to accessing elements in an array using the index number.
**Syntax**
```js
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J
```
3. toUpperCase(): Converts the string fromlower case to uppercase

```js
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName = 'Ephesians'

console.log(firstName.toUpperCase())  // EPHESIANS

let country = 'Kenya'

console.log(country.toUpperCase())    // KENYA
```
4. toLowerCase() - Converts string to lower case

```js
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let firstName = 'Ephesians'

console.log(firstName.toLowerCase())  // ephesians

let country = 'kenya'

console.log(country.toLowerCase())   // kenya
```
5. substr() - it takes two arguments and slices according to ethe starting indes and the number of chracters to slice.
```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script
```
6. substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

7. split(): The split method splits a string at a specified place.

8. trim(): Removes trailing space in the beginning or the end of a string.

9. includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

10. replace(): takes as a parameter the old substring and a new substring.

```js
string.replace(oldsubstring, newsubstring)
```

11. charAt(): Takes index and it returns the value at that index

```js
string.charAt(index)
```
12. charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index

```js
string.charCodeAt(index)
```
13. indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

```js
string.indexOf(substring)
```
14. lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

```js
//syntax
string.lastIndexOf(substring)
```
15. concat(): it takes many substrings and joins them.

```js
string.concat(substring, substring, substring)
```

16. startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

```js
//syntax
string.startsWith(substring)
```

17. endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).

```js
string.endsWith(substring)
```

18. search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.

```js
string.search(substring)
```

19. match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.

```js
// syntax
string.match(substring)
```

20. repeat(): it takes a number as argument and it returns the repeated version of the string.

```js
string.repeat(n)
```
[Methods](methods.js)

# 👌Done