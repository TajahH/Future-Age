function crystalBall(){
    const readline = require("readline-sync");
    let age = parseInt (readline.question("Please enter your age: "))
    let currentYear = parseInt (readline.question("Please enter the current year: "))
    let futureYear = parseInt (readline.question("Please enter the year you would like to know your age in: "))

    // This is wrong below
    // if (age === int){
    //     return "thank you."
    // } else {
    //     return require("this is not a number, please write your age in number form: ")
    // }
}

function addYears(){
    crystalBall()
    // let ageIn10 = 10
    // let ageIn20 = 20
    // let newAgeIn10 = age + ageIn10
    // let newAgeIn20 = age + ageIn20
    // console.log(`In 10 years time you will be ${newAgeIn10}`)
    // console.log(`In 20 years time you will be ${newAgeIn20}`)
    // let retirementAge = 67 - age
    // if (retirementAge < 0) {
    //     console.log(`You've already retired`)
    // } else {
    //     console.log(`You can retire in ${retirementAge} years time`)
    // }
    console.log(age,futureYear,currentYear);
    console.log(`You are currently ${age}. In the year ${futureYear}, you will be ${futureYear - currentYear + age} years old.`)
}   

addYears();


