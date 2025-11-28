const isLoggedIn = true
const tempreture = 41

// if(isLoggedIn){
//     console.log("User loggedIn here")
// }

// if( 2 === "2"){
//     console.log("executed")
// }

// if(tempreture < 50){
//     console.log("Tempreture is less than 50")
// }else{
//     console.log("Tempreture is more than 50")
// }

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`score power is ${power}`)
// }
// console.log(`score power is ${power}`)

// const balance = 1000
// if(balance > 500) {
// console.log("Not Allow Account")
// }else{
//     console.log(" Allow account")
// }

const userLoggedIn = true
const userDebitcard = true
const loggedInfromGoogle = true
const loggedInfromEmail = false

if(userLoggedIn && userDebitcard ){
    console.log("Allow to buy course")
}
if(loggedInfromGoogle || loggedInfromEmail ){
    console.log("UserLoggedIn")
}


