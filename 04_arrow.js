const user = {
 username: "komal",
 price:999,
 welcoomeMEssage : function(){
    console.log(`${this.username} , Welcome to website`)
    console.log(this)
 }
}
user.welcoomeMEssage()
user.username = "rajole"
user.welcoomeMEssage()

    // console.log(this)


function chai1(){
    let username = "komal"
    console.log(this.username)
}
chai1()

const chai = () => {
    let username = "rajhoe"
    console.log(this.username)
}
chai()

const AddTwo = (num1, num2)=>{
    return num1 + num2
}
console.log(AddTwo(3,9))

const res = (num1, num2) => (num1 - num2)
console.log(res(10, 5))