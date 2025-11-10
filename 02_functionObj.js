function calculatecartPrice(...num1){
    return num1
}
console.log(calculatecartPrice(23,2,3))

// const user = {
//     userName : "kokal",
//      price: 499
// }

function handdleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and Price is ${anyObject.price}`)
}
// handdleObject(uesr)
handdleObject({
    userName : "Koma",
    price: 599
})

function handdleArray(anyArray){
    console.log(`Math is ${anyArray} and History is ${anyArray}`)
}
handdleArray(200,300)

const myArray = [100,500,400,9001,600]
function secondValue(val){
    return val[1]
}
console.log(secondValue(myArray))