const tinderUser = new Object()
console.log(tinderUser)

// const tinderUser = {}

tinderUser.id = "1234"
tinderUser.name = "komalrajole"
tinderUser.isloggedIn = false

console.log(tinderUser)

const regularUser = {
    id:"120",
    name:{
        userName:{
            fullname:{
                fname:"komal",
                lname:"rajole"
            }
        }
    },
    isloggedIn:false,
    email:"komal@jpk.com"
}
console.log(regularUser.name.userName)

console.log(regularUser.email)
console.log(Object.keys(regularUser))
console.log(Object.values(regularUser))
console.log(Object.hasOwnProperty('fname'))


const obj1 = {1:"a",2:"b"}
const obj2 = {5:"k",3:"g"}

const obj3 = {...obj1,...obj2}
console.log(obj3)
console.log(Object.keys(obj3))
console.log(Object.values(obj3))
console.log(Object.entries(obj3))