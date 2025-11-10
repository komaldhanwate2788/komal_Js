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



 function loggedinUserMsg(userName = "sam"){
    if(!userName){
        console.log("Please enter User name");
        return
    }
    return(`${userName} is just logged In`)
 }
//  loggedinUserMsg("")
 console.log(loggedinUserMsg())