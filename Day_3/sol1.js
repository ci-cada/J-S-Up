let firstName = 'Jussie'
let lastName = 'Cadet'
let country = 'Kenya'
let age = 23
let city = 'Nairobi'
let isMarried = true
let year = 2023 

console.log("The type of", firstName, "is", typeof firstName)
console.log("The type of", lastName, "is", typeof lastName)
console.log("The type of", country, "is", typeof country)
console.log("The type of", age, "is", typeof age)
console.log("The type of", city, "is", typeof city)
console.log("The type of", isMarried, "is", typeof  isMarried)
console.log("The type of", year, "is", typeof year)

//2 
console.log('10' == 10)

//3
console.log(parseInt('9.8') == 10)

//4

console.log(2 > 1)
console.log(0 == '')
console.log(1 > 0)

console.log(1 === true)
console.log(0 === '')
console.log(1 < 0)

//5 
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

let word1 = 'python'
let word2 = 'jargon'
let lena = word1.length
let lenb = word2.length
console.log(lena > lenb)

//6

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(4 < 3))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log((word1.includes('on') && word2.includes('on')))

//7

const today = new Date()

console.log(today.getYear())
console.log(today.getMonth())
console.log(today.getDate())
console.log(today.getDay())
console.log(today.getHours())
console.log(today.getMinutes())
const sec = Date.now()
console.log(sec)