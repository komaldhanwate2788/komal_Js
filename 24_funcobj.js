function calculateCartprice(...num1){
    return num1
}
console.log(calculateCartprice(2,500,40,5,6,3,78))

const user={
    username:"komalrajole",
    price:"999"
}
function handleObj(anyObj){
    console.log(`uersnmae is ${anyObj.username} and price is ${anyObj.price}`)
}
// handleObj(user)
// handleObj({
//     username:"abcd",
//     price:"100"
// })

const myNewArr= [1,2,4,6,40,50,790]
function returnSecondArr(anyobj){
    return anyobj[4]
}
console.log(returnSecondArr(myNewArr))