function one(){
    const username = "komalrajole"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

if(true){
    const username = "dhtuvrajole"
    if(username === "dhtuvrajole"){
        const website = " Amazon"
        console.log( username  +  website)
    }
    // console.log(website)
}
// console.log(username)

// **************************INTERESTING**************************
console.log(addOne(5))
function addOne(num){
    return num + 1
}

addTwo(10) // we cant not user thid type of declaration
const addTwo = function(num){
    return num +5
}
console.log(addTwo(10))