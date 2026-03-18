const marvelHeros = ["Ironman","thor","avendure"]
const dcHeros = ["shaktiman","naagraj","doremon","perman"]
marvelHeros.push(dcHeros)

// console.log(marvelHeros.concat(dcHeros))

const newHeros = [...marvelHeros,...dcHeros]
console.log(newHeros)

const newArr = [1,2,3,4,[5,2,6,[70,80],50,39],60,700,900]
console.log(newArr)

const anotherArr = newArr.flat(Infinity)
console.log(anotherArr)


console.log(Array.isArray("Komal"))
console.log(Array.isArray(marvelHeros))
console.log(Array.from("KOmalRajoleDeveloper"))
console.log(Array.from({name: "komal"}))

let num1 =100
let num2 =200
let num3 = 500

console.log(Array.of(num1,num2,num3))
