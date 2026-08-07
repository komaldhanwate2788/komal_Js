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

function handdleObject2(anyobject){
    return `User name is ${anyobject.name} and price is ${anyobject.price}`;
}
console.log(handdleObject2({
    name: "koamlgrajole",
    price:1999
}))

// const Arr = [100,200,300,400,500]
function handdleArray(myArr){
    return myArr[1];
}
console.log(handdleArray([100,200,500,400,800]))

function one(){
    const uname = "komalrajole"
    function two(){
        const website = "youtube"
        console.log(uname)
    }
    // console.log(website)
    two()
}
one()

if(true){
    const username = "komaldhanwate "
    if(username === "komaldhanwate "){
        const website = " Instagram"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

function addone(num){
    return num + 1
}
console.log(addone(5))

const addtwo = function(num){
    return num +2
}
console.log(addtwo(10))

const user11 = {
    username:"komalrajole",
    price:1299,
    welcomMessage:function(){
        console.log(`User ${this.username}, Welcome on website`)
        console.log(this)
    }
}
// user11.welcomMessage()
// user11.username = "hsdgsdhg"
// user11.welcomMessage()
       console.log(this)

function chai(){
    let uname = "komal"
    console.log(this.uname)
}
chai()

const code = () => {
    let uname = "komal"
    // console.log(this.uname)
    console.log(uname)
}
code()

const addOne = (num1, num2) =>{
    return num1 + num2
}
console.log(addOne(10,50))

// const addTwo = (n1,n2) => {
//     return n1 + n2
// }
// console.log(addTwo(3,5))

const addTwo1 = (n1,n2) => ({username: "komall"} )
console.log(addTwo1(3,5));

//  IIFE Immediately Invoked Function Expresssion
// For removing global scope polluted 

(function fub1(){
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`DB Connected Two ${name}`)
}) ("komalrajlole")


// If Else control flow

// const isLoggedIn = true
const temp = 41

if(temp < 50){
    console.log(`Tempreature is less than 50`)
}else{
    console.log(`Tempreature is greater than 50`)
}

const score12 = 20
if(score12 < 100){
    var power = "fly"
    console.log(`User score power is ${power}`)
}
console.log(`User power is ${power}`)

const isLoggedIn = true
const debitCard  = true
if(isLoggedIn && debitCard && 2==5){
    console.log(`Execute`)
}else
console.log(`Not Execute`)

const userEmail = []
if(userEmail.length === 0){
    console.log(`Array is Empty`)
}else
console.log("Array is not empaty")

const objEmpty = {}
if(Object.keys(objEmpty).length === 0){
    console.log(`Object is empty`)
}else{
    console.log(`Object is not empty`)
}

// Trenaty opertor

const iceTeac = 300
iceTeac < 200?console.log(`Price is less than 200`):console.log(`Price is greter than 200`)

// For loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is best number")
    }
    console.log(element)
}

for (let i = 0; i < 10; i++) {
    console.log(`Outter loop ${i}`)
    for (let j = 0; j < 10; j++) {
        // console.log(` Outter ${i} and Inner Loop ${j} `)
        console.log( i  + "*" + j + "=" + i*j)
        
    }
    
}

const MyArray = ["flash","batman","spidreman"]
for (let i = 0; i < MyArray.length; i++) {
    const element = MyArray[i];
    console.log(element)
    
}

for (let i = 1; i < 10; i++) {
    if(i == 5){
        console.log(`5 is best number`)
        // break;
        continue;
    }
    console.log(`Value if i is ${i}`)
    
}

// for of loop

const Number1 = [1,5,4,8,9]
for (const num of Number1) {
    console.log(num)
}

const greeting = "Hello komal rajole!"
for (const greet of greeting) {
    console.log(greet)
}

// map

const map = new Map()
map.set("In","India")
map.set("USA","United state of america")
map.set("FR","Freance")
console.log(map)

for (const [key,value] of map) {
    console.log(key , ":-",value)
}