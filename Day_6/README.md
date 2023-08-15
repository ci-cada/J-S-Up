# Day 6 

## Loops and loops 

Not having much about loops, I took part in codes that help perform certain tasks much way faster.

There are different types of loops;
- for 
- while
- do while

Other things that we ought to cover in this section was about the break the continue and the for loop which does not utilize the index of the element rather the contents of the array(for of loop).

Loops helps perform tasks that need repetion much easier than doing them manually.

Examples on each are;

**for**
```js
// For loop structure
for(initialization, condition, increment/decrement){
  // code goes here
}

const numbers = [1, 2, 3, 4, 5]
const newArr = []
let sum = 0
for(let i = 0; i < numbers.length; i++){
  newArr.push( numbers[i] ** 2)

}

console.log(newArr)  // [1, 4, 9, 16, 25]
```
**While** 
```js
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}
// 0 1 2 3 4 5
```
**Do While**

```js
let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

// 0 1 2 3 4 5
```

**for of loop**

```js
for (const element of arr) {
  // code goes here
}


const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numbers) {
  console.log(num * num)
}

// 1 4 9 16 25

// adding all the numbers in the array
let sum = 0
for (const num of numbers) {
  sum = sum + num  
	// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum) // 15

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // get only the first letter of each element,  H C J R N M
}

```

**Break**

This is used to interupt a loop.
example
```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}

// 0 1 2
```
The code above will end provided the loop reaches the number 3 

**Continue**
This is used to skip certain iterations 

Say when we want to skip all the even numbers in the iterations, we can use the statement. 
```js
for (let i = 0; i <= 20; i++){
    if(i % 2 == 0){
        continue;
    }
    console.log(i)
}
```
The programm will print all the odd numbers betweeen 0 and 20

### 👍END 

## The taks to this day are found in the [Day 37](../Day_37) of 100 Days of Code as the day achievement 

## 🦾Happy coding