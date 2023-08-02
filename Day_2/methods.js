//length:
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Ephesians'
console.log(firstName.length)  // 8

//Accessing characters in a string
let stris = 'JavaScript'
let firstLetter = stris[0]

console.log(firstLetter)           // J

let secondLetter = stris[1]       // a
let thirdLetter = stris[2]
let lastLetter = stris[9]

console.log(lastLetter)            // t

let lastIndex = stris.length - 1

console.log(lastIndex)  // 9
console.log(stris[lastIndex])    // t

//toUpperCase(): 
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT



console.log(firstName.toUpperCase())  // EPHESIANS

let country = 'Kenya'

console.log(country.toUpperCase())    //KENYA

//toLowerCase():
console.log(string.toLowerCase())     // javascript

console.log(firstName.toLowerCase())  // ephesians
console.log(country.toLowerCase())   // kenya

//substr():
console.log(string.substr(4,6))    // Script
console.log(country.substr(3, 4))   // land

//substring():
console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

console.log(country.substring(0, 3))   
console.log(country.substring(3, 7))   
console.log(country.substring(3))      

//split():
let strins = '30 Days Of JavaScript'

console.log(strins.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(strins.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//trim()
console.log(strins)
console.log(strins.trim(' '))

console.log(firstName)
console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string

//includes()
console.log(strins.includes('Days'))     // true
console.log(strins.includes('days'))     // false - it is case sensitive!
console.log(strins.includes('Script'))   // true
console.log(strins.includes('script'))   // false
console.log(strins.includes('java'))     // false
console.log(strins.includes('Java'))     // true

console.log(country.includes('Ke'))     // false
console.log(country.includes('Ken'))     // true
console.log(country.includes('nya'))    // true
console.log(country.includes('Land'))    // false

//replace()

console.log(strins.replace('JavaScript', 'Python')) // 30 Days Of Python

console.log(country.replace('Fin', 'Noman'))       // Nomanland


//charAt()

console.log(strins.charAt(0))        // 3
console.log(strins.charAt(lastIndex)) // t


//charCodeAt()

console.log(strins.charCodeAt(3))        // D ASCII number is 68
console.log(strins.charCodeAt(lastIndex)) // t ASCII is 116


//indexOf()


console.log(strins.indexOf('D'))          // 3
console.log(strins.indexOf('Days'))       // 3
console.log(strins.indexOf('days'))       // -1
console.log(strins.indexOf('a'))          // 4
console.log(strins.indexOf('JavaScript')) // 11
console.log(strins.indexOf('Script'))     //15
console.log(strins.indexOf('script'))     // -1

//lastIndexOf()
let strings = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(strings.lastIndexOf('love'))       // 67
console.log(strings.lastIndexOf('you'))        // 63
console.log(strings.lastIndexOf('JavaScript')) // 38


//startsWith
let str = 'Love is the best to in this world'

console.log(str.startsWith('Love'))   // true
console.log(str.startsWith('love'))   // false
console.log(str.startsWith('world'))  // false


console.log(country.startsWith('Ke'))   // true
console.log(country.startsWith('fin'))   // false
console.log(country.startsWith('land'))  //  false


//endsWith
let st = 'Love is the most powerful feeling in the world'

console.log(st.endsWith('world'))         // true
console.log(st.endsWith('love'))          // false
console.log(st.endsWith('in the world')) // true


console.log(country.endsWith('nya'))         // true
console.log(country.endsWith('fin'))          // false
console.log(country.endsWith('Fin'))          //  false


//search
let strs = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(strs.search('love'))          // 2
console.log(strs.search(/javascript/gi))  // 7

let s = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive

//match
let sts = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(sts.match('love'))

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
//repeat()
let sr= 'love'
console.log(sr.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
//concat

//string.concat(string1, string2, ..., stringX)
let text1 = "Hello";
let text2 = "world!";
let result = text1.concat(" ", text2);
console.log(results)

// repeat
//string.repeat(count)
let text = "Hello world!";
let results = text.repeat(2);
console.log(results)