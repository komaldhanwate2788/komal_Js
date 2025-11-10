// console.log("K")
// console.log("O")
// console.log("M")
// console.log("A")
// console.log("L")

function myName(){
console.log("K")
console.log("O")
console.log("M")
console.log("A")
console.log("L")
}

myName()

function addTwoNum(num1,num2){
    // console.log(num1 + num2)
    const res = num1 + num2
    console.log("result id", res)
}
 addTwoNum(2,3)



function loggedinUserMsg(uesrName = "Ganesh"){
    if(uesrName === undefined){
        console.log("Please enter username");
        return
    }
    return `${uesrName} is just loggedin`
}
console.log(loggedinUserMsg("Dhruv"))