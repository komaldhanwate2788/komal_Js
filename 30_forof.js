const arr = [1,2,3,4,5,6,7,8,9,10]
for (const a of arr) {
    // console.log(`THe array elements is ${a}`)
}

const greeting = "Helo KomalRajole"
for(const greet of greeting){
    if(greet == ' '){
        break;
    }
    // console.log(`The chracter is ${greet}`)
}

const map = new Map()
map .set("IN","indis")
map.set('USA',"United state of america")
map.set("LN","London")

console.log(map)

// for(const key of map){
//     console.log(key)
// }


// map is not possible for itration
for (const [key,values] of map) {
    console.log(key ,':-' , values)
}