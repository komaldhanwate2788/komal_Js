const arr1 = [1,2,3,4,5,6,78,9]
const arr2 = ["koml","rajole","ganesh","dhruv"]

console.log(arr1)
console.log(arr2)

const myArr = new Array(1,2,3,5,6)
console.log(myArr)
myArr.push(100)
myArr.push(200)
myArr.push(300)
console.log(myArr)
myArr.pop()
console.log(myArr)
const newArr = myArr.join()
console.log(myArr)
console.log(typeof newArr)

console.log("A",myArr)
const myn1 = myArr.slice(1,4)
console.log(myn1)
console.log("B",myArr)
const myn2 = myArr.splice(1,4)
console.log("c",myArr)