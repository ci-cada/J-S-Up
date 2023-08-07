/**
 * A code using all the conditionals if else ternary and the switch. \
 * This is a code that takes in a prompt and performs various activities based on the output of
 * a specififc operation.
 */

let name = prompt("Enter name: ")
let age = prompt("Enter age: ")
let occupation = prompt("Enter occupation: ")
let position = prompt("Enter position: ")
let years = prompt("Enter experience years: ")

if (age >= 18){
    console.log("You are qualified for this job application\n")
    console.log("Based on your job occupation previously, you qualify for the following job")

    switch(occupation){
        case 'driver':
           years > 5
                ? console.log(`Superb experience, you qualify as the head of the Deliveries department\nFull names: ${name}\nAge: ${age}\nOccupation: ${occupation}\n`)
                : console.log(`Fair, I am sure you will fit in well with our members in due time\nFull names: ${name}\nAge: ${age}\nOccupation: ${occupation}\n`)
            break;


        case 'receptionist':
           years > 3
                ? console.log(`Superb experience, you qualify as the head of Office Staff\nFull names: ${name}\nAge: ${age}\nOccupation: ${occupation}\n`)
                : console.log(`Fair, I am sure you will fit in well with our members in due time\nFull names: ${name}\nAge: ${age}\nOccupation: ${occupation}\n`)

            break;


        case 'waiter':
            years > 5
                ? console.log(`Superb experience, you qualify as the chief event organizer\nFull names: ${name}\nAge: ${age}\nOccupation: ${occupation}\n`)
                : console.log(`Fair, I am sure you will fit in well with our members in due time\nFull names: ${name}\nAge: ${age}\nOccupation: ${occupation}\n`)
            break;


        case 'developer':
           years > 7
                ? console.log(`Superb experience, you qualify as the head of DEVOPs team\nFull names: ${name}\nAge: ${age}\nOccupation: ${occupation}\n`)
                : console.log(`Fair, I am sure you will fit in well with our members in due time\nFull names: ${name}\nAge: ${age}\nOccupation: ${occupation}\n`)
            console.log("developer")
            break;


        case 'it specialist':
           years > 10
                ? console.log(`Superb experience, you qualify as the head of the IT Department\nFull names: ${name}\nAge: ${age}\nOccupation: ${occupation}\n`)
                : console.log(`Fair, I am sure you will fit in well with our members in due time\nFull names: ${name}\nAge: ${age}\nOccupation: ${occupation}\n`)
            console.log("IT Specialist")
            break;

        default:
            console.log("You will be called for further information")
    }
}
else if(age >= 16 && age < 18){

    console.log("You are free to join any of our pre youth internships")
}

else{
    console.log("Sorry!, you can not apply at this moment you have ", 18 - age," years to go for an actual job and ", 17 - age," for the intership program")
}