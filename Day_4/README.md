# 🤠Day 4

## Conditionals

These are used to make decisions based on different conditions. By default these statements in JavaScript are excecuted from top to botton.

Though the sequential flow of execution can be altered in two ways.

 1. Conditional execution: a block of one or more statements will be executed if a certan expression is true
 2. Repetitive execution: a block of one or more statements wull be repetitively executed as long as a certain expression is true. In this section, we will cover the basic statements _if and if else_

 They are implemented using the following ways.
 - if
 - if else
 - if else if else
 - switch
 - ternary operator

These simply follow the following syntax

**if**
The code is executed only if the if statement is true
```js
if (condition){
    //code block
}
```
**if else**
If the first condition shows false the else code is executed
```js
// syntax
if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition
}
```
**if else if else**

If the first condition is false the codes executes the else if if the else if is not true the code executes the else
```js
// syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code

}
```

**Switch**

The codes are executed whenever the caseValue corresponds to the case provided

As the other example, we can see one can also use conditions in the cases using the switch.
```js
switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
}
let num = prompt('Enter number');
switch (true) {
  case num > 0:
    console.log('Number is positive');
    break;
  case num == 0:
    console.log('Numbers is zero');
    break;
  case num < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}
```

**Ternary**

Here the first code block after the question mark is executed if the condition is true else the other one is executed
```js
condition
    ? //code
    : //code
```


Here is a code using all the given conditions to show how they are implemented in JavaScript. Intent on making use of if else, the switch and the ternary operator.[Conditionals](./conditionals.js)

Else here are the Days Challenges to be completed on the Day 35 of 100 Days of code [Exercises](../exercises.md)