const jsUser = {
    name : "komal",
    email : "komal@google.com",
    "full name" : "komal Ganesh Rajole",
    location : "nashik",
    isLoggedIn : false,
    age : 30,
    workingDays : ["monday,thuesday"]

}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser["workingDays"])
console.log(jsUser)

console.log("**************************************")
// Object.freeze(jsUser)
jsUser.email = "koaldhanwate@micosoft.com"
// console.log(jsUser)

console.log(jsUser)

jsUser.myfunc = function (){
     console.log("This is my new function in js object")
}
   
jsUser.myfuncTwo = function(){
    console.log("Hello this is second myfunc in js....Thsak youuu")
}
jsUser.myfunct3 = function(){
    console.log(`Hello ${this.name} this is my third function ${this.age},${this.
        email
    }`)
    const myArray = ["komal","namshik","dfhf","dfygdf",["dhfgd","dfgyf"],"jfhduf"]
    console.log(myArray)
    console.log(Array.isArray(myArray))
}
console.log(jsUser.myfunc())
console.log(jsUser.myfuncTwo())
console.log("**********************************")

console.log(jsUser.myfunct3())