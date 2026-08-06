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