const marvelHeros = ["thor","ironman","spiderman"]
const myHEros = ["superman","batman"]

console.log(marvelHeros.concat(myHEros))

const myArray = [1,2,3,[4,5,6],7,8,[9,8,7,10]]

console.log(myArray)
const newArray = [...marvelHeros,...myHEros,...myArray]
console.log(newArray)

console.group("*********************************")

console.log(newArray.flat(Infinity))

console.log(Array.isArray("komal"))
console.log(Array.from("KOmalGaneshRajole"))
console.log(Array.from({name:"koal"}))  //inresting they can not finde how to make array on basisi of eitjer key or value


const score = 1000
const scrore2 = 2000
const score3 = 4000

console.log(Array.of(score,scrore2,score3))