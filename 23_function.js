// console.log("k")
// console.log("k")
// console.log("k")
// console.log("k")
// console.log("k")

function myName(){
    console.log("k")
console.log("k")
console.log("k")
console.log("k")
console.log("k")
}
// myName()

// function addNum(num1,num2){
//   console.log(num1 + num2)
// }
// addNum(2,3)

function addNum(num1,num2){
  let res = num1 + num2
  return res
}

const res = addNum(2,3)

console.log("REsult :", res)

function myFullname(name = "abc"){
    if(!undefined){
        console.log("please enter username")
        return
    }
 return `Hello my name is ${name}`
}
// console.log(myFullname())

function newName(name = "abc"){
    if(!name){
        console.log("Plz enter name")
    }
    return `My new name is ${name}`
}
console.log(newName("komal"))