const numbers = [1,2,3,4,5,6,4,5,66]
for(const num of numbers){
    // console.log(num)
}

const greeting = "Hello Komal Rajole!"
for(const greet of greeting){
    if(greet == " "){
        // break;
        continue;
    }
    // console.log(greet)
}

const map =new Map()
map.set('js',"JavaScript")
map.set('rb',"rubbii")
map.set('py',"python")
map.set('js',"JavaScript")

// console.log(map)
for(const [key, value] of map){
    // console.log(key ,':-', value)
}
// for(const key in map){
//     console.log(key)
// }
const myObject = {
    game1:"Aventure",
    game2:"pokemon"
}

for(const key of myObject){
    console.log(key)
}