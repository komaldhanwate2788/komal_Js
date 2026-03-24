const numbers = [1,2,3,4,5,6,7,8,9,10]

const result = numbers.reduce((acc, curval) => {
    // console.log(`acc is ${acc} and current value is ${curval}`)
    return acc + curval
},0)
// console.log(result)
const myTotal = numbers.reduce( (acc, currval) => (acc + currval),0)

// console.log(myTotal)

const shoppingCart = [
    {
        courseName:"javascript",
        price:12000
    },
     {
        courseName:"python",
        price:15000
    },
     {
        courseName:"react",
        price:3000
    },
     {
        courseName:"php",
        price:500
    },
]

const bill = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(bill)