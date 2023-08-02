let space = ' '           // an empty space string
let firstName = 'Ephesians'
let lastName = 'Jussie'
let country = 'Kenya'
let city = 'Nairobi'
let language = 'JavaScript'
let job = 'software engineer'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`


let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);

const paragraph = "My name is Ephesians tag Jussie\
Livin in Nairobi KE.\
Passionate about coding and the tech field and aspiring to work in big companies say Tesla and Googles.\
Currently working on developing a chatbot to help people who are suffering from PTSD and depression prone.\
I am antisocial, hardworking, determined and productive.\
I am happy I am in this JS journey."

console.log(paragraph)
console.log('I live right around the corner.\nNeed a walk home ?') // line break
console.log('Day 1\tData Types\tSo Pumped')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')//double quotes
console.log("In every programming language it starts with \'Hello, World!\'")//signle quotes 
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

let age = 22
let fullNames = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

// Adding an expression or a value for instance 
console.log(`${a} is greater than ${b}: ${a > b}`)// 2 is greater than 3: false
