// String
const name = "komal"
const repocount = 50 

console.log(`My name is ${name} and my repo count is ${repocount}`)

const gname = new String("KOmalrajole")
console.log(typeof(gname))

console.log(gname[1])
console.log(gname.__proto__)

console.log(gname.length)
console.log(gname.toUpperCase())
console.log(gname.padEnd())
console.log(gname.charAt(5))
console.log(gname.substring(2,7))


const newStr = gname.substring(4,9)
console.log(newStr)

const newOne = gname.slice(-1,5)
console.log(newOne)

const newStr1 = " hefh rjeruiortort tyr"
console.log(newStr1.length)
const newStr2 = newStr1.trim()
console.log(newStr2.length)
console.log(newStr1.replace('hefh','okok'))
console.log(newStr1.includes('iort'))
const url ="https://www.youtube.com/watch?v=sscX432bMZo&t=5461s"
console.log(url.replace('/','-'))

const score = 500
console.log(score)

const balance = new Number(4000)
console.log(typeof(balance))
console.log(balance.toString().length)
console.log(typeof(balance))

const otherNum = 3.1454854
console.log(otherNum.toFixed(2))

// Math
const num = 14564655
console.log(Math.abs(4))
console.log(Math)
console.log(Math.round(3.86))
console.log(Math.ceil(6,3))
console.log(Math.floor(4,2))
console.log(Math.min(4,9,3,8,2,0))
console.log(Math.max(9,7,3,68,4,2))
console.log(Math.random()*10+1)
// console.log(Math.toFixed(3))

// Date
const myDate = new Date()
console.log(myDate.toDateString())
console.log(myDate.getFullYear())
console.log(myDate.getTimezoneOffset())
console.log(myDate.toLocaleString())
console.log(Date.now())
console.log(myDate.getMonth())

// Array
const myArr = [1,2,3,4,5,6]
console.log(myArr)

const newArr = new Array(1,2,2,3,5,4)
console.log(newArr)
// console.log(newArr.push(10))
console.log(newArr.pop())
console.log(newArr.includes(7))
console.log(newArr.indexOf(1))

const finalArr = newArr.join(myArr)
console.log(finalArr)

console.log(myArr.slice(1,4))
console.log(myArr.splice(1,4))

const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["flash","batman","shaktiman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3])
// console.log(marvel_heros[3][2])
console.log(marvel_heros.concat(dc_heros))
const allHeros = [...marvel_heros,...dc_heros]
console.log(allHeros)

const anotherArr = [1,5,3,4,[5,9,7],0,4,3,6,[10,11,12,13,[30,20],50,10],15,23]
const realArr = anotherArr.flat(Infinity)
console.log(realArr)

console.log(Array.isArray(anotherArr))
console.log(Array.isArray("KomalRajole"))
console.log(Array.from("KomalRajole"))

const score1 = 100
const score2 =200
const score3 = 300
console.log(Array.of(score1,score2,score3))

// Objects
const mySymb = Symbol("key1")
const user = {
    name: "kOmal",
    fullname: {
        fname:"komalllll",
        mname:"ganesh",
        lname:"rajole"
    },
    [mySymb]:"key1",
    email:"komalrajole@gaoogle.com",
    age:31,
    loaction:"nashik",
    isLoggedIn: false,
    lastLoggedinDay:["Mon","Tues","thues","frid"]
}
console.log(user.loaction)
console.log(user.lastLoggedinDay)
console.log(user["age"])
console.log(user.fullname.lname)
console.log(user["fullname"]["fname"])
console.log(typeof user[mySymb])

user.email = "KomalRaj@miacrosoft.com"
console.log(user)

user.greeting = function(){
    console.log(`Welcome in my greeting ${this.name} `)
}
console.log(user.greeting())

console.log(`Welcome in my greeting ${name} `)

// Object.freeze(user)

// const tinderUser = new Object()
// console.log(typeof tinderUser)
const tinderUser = {}
tinderUser.id = 123
tinderUser.email = "komalraj@yahoo.com"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email:"KOmalraj@googgle.com",
    fullname:{
        userFullName:{
            fname:"komal",
            mname:"ganesh",
            lanme:"rajole"
        },
    },
    location:"nashik"
}

console.log(regularUser.fullname.userFullName.fname)

const obj1 = {1:"a",2:"f"}
const obj2 = {3:"k", 5:"g"}
console.log(obj1,obj2)
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

const obj4 = {...obj1,...obj2}
console.log(obj4)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(tinderUser.hasOwnProperty("dept"))

const course = {
    name:"JS",
    price:999,
    courseInstructor:"komal"
}
console.log(course)
const {courseInstructor} = course
console.log(courseInstructor)

// Function

function myName(){
     console.log("k")
     console.log("o")
      console.log("m")
     console.log("a")
     console.log("l")
      console.log("r")  
}
myName()

function addTwoNum(num1,num2){
    console.log(num1 + num2)
}
addTwoNum(4,"p")

function addition(num1,num2){
    const result = num1 + num2
    return result;
   
}
const result = addition(4,9)
console.log(result)

function loggedInUserMsg(username = 'komu'){
    if(username === undefined){
        console.log("Please enter user name")
        return
    }
    return `User ${username} just loggedin`
}
console.log(loggedInUserMsg())

const user1 = {
    name:"komalrajole",
    price:999
}
function handdleObject(anyobject){
    return `User name is ${anyobject.name} and Price is ${anyobject.price}`
}
console.log(handdleObject(user1))