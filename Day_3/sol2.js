//1
let base = prompt("Enter the base: ")
let height = prompt("Enter the height: ")

console.log("The area of the triangle is: ", base * height * 0.5)

//2
let a = prompt("Enter side a: ")
let b = prompt("Enter side b: ")
let c = prompt("Enter side c: ")

console.log("The perimeter of the triangle is ", a + b + c)

//3

let len = prompt("Enter length: ")
let width = prompt("Enter width: ")

console.log("The perimeter is: ", len + width)
console.log("The area is: ", len * width)

//4 
let radius = prompt("Enter radius: ")
console.log("The area of the circle is: ", radius * radius *  3.14)

//5 
let hours = prompt("Enter hours: ")
let rate = prompt("Enter rate per hour: ")
console.log("Your weekly earning is ", hours * rate)

//6

let name = "Jussie"
let lenName = name.length 

lenName > 7
    ? console.log("Your name is long")
    : console.log("Your name is short")

let fName = "Cadet"

let lenFname = fName.length 

lenName > lenFname
    ? console.log("Your first name", name, "is longer than your family name", fName)
    : console.log("Your family name", fName, "is longer than your first name", name)

//7 

let myAge = 250 
let yourAge = 25 

myAge > yourAge
    ? console.log("I am ", myAge - yourAge, "Older than you")
    : console.log("You are",yourAge - myAge, "Older than me")

//8
let yearBorn = prompt("Enter the year born: ")

let today = new Date()
let currentYear = today.getYear()

let userAge = currentYear - yearBorn 

userAge > 18 
    ? console.log("You are", userAge,". You are old enough to drive")
    : console.log("You are", userAge,". You wil be allowed to drive after ", 18 - userAge," years")

