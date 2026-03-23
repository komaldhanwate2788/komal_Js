const user = {
    username:"komal",
    price:"120",
    welcomeMessage: function(){
        // console.log( `${this.username}, Welcome in Js Youtube`);
        
    }
}
// user.welcomeMessage()
// user.username = "abcd"
// user.welcomeMessage()

// console.log(this)


function chai(){    // we cant not use this in function it will only used in object
    let user = "Meeee"
    console.log(this.user)
}
// chai()

// const myName = function (){
//     let uname = "komlk"
//     console.log(this.uname)
// }

const myName = ()=>{
    let uname = "komlk"
    console.log(this.uname)
}
// myName()

// Explicite return arroe function
const addNum = (num1, num2) => {
    return num1 + num2
}
console.log(addNum(5 , 6))

// Implicite return arrow function
// const addTwo = (num1, num2) => num1 + num2
// const addOne = (num1, num2) => (num1 + num2)
const addOne = (num1, num2) => ({username: "komalrajole"})

// console.log(addTwo(7,9))
console.log(addOne(70,9))