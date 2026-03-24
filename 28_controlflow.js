
let tempreture = 41

if(tempreture < 50){
    console.log("Temp is less than 50")
}
console.log("Temp is greater than 50")

const balance = 1000

if(balance < 500){
    console.log(`Balance les than 500`)
}else if(balance < 750){
    console.log(`Balance is less than 750`)
}else{
    console.log(`Balance is less than 1200`)
}
 let score = 200
 if(score < 500){
    let power = "fly"
    console.log(`The Power : ${power}` )
 }
//  console.log(`The Power : ${power}` )

let isuserLoggedin = true
let userDebitcard = false

if(isuserLoggedin && userDebitcard){
    console.log("Executed")
}
if(userDebitcard || isuserLoggedin){
    console.log("Executed222")
}

let month = 3
switch(month){
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("febuary")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
    case 5:
        console.log("may")
        break;
    case 6:
        console.log("june")
        break;
        default:
            console.log("Default case executed")
            break;
}

const userEmail =[]
if(userEmail.length === 0){
    console.log("Array is empty")
}else{
    console.log("Array existe")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}