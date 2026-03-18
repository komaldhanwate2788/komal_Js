const mySym = Symbol("key123")


const jsUser = {
    name:"komal",
    "full name": "komal ganesh rajole",
    [mySym]:"key123",
    email:"komal@microsoft.com",
    city:"nashik",
    isloggedIn:false,
    workingDays:["mon","tue","wed",'thue',"frid"]
}

console.log(jsUser)
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(typeof jsUser[mySym])

jsUser.email = "komal@goggle.com"
console.log(jsUser)
Object.freeze(jsUser)
jsUser.email = "komal@chatgpt.com"