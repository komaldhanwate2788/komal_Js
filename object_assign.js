const tinderUser = {}
console.log(tinderUser)

// const tinderuser = new Object()
// tinderuser.id = "123"
// console.log(tinderuser)

tinderUser.id = "123"
tinderUser.email = "k@micosoft.com"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email:"k@google.com",
    fullname: {
        userfullname: {
            firstName: "komal",
            lastName: "rajole"
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullname.userfullname.lastName)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3)

const myArray = [
    {
        id:1,
        name:"komal"
    },
     {
        id:2,
        name:"ganesh"
    },
       {
        id:3,
        name:"dhruv"
    }

]

console.log(myArray)
console.log("*********************")
console.log(myArray[2].name)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.group(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("address"))
