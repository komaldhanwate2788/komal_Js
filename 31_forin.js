const myObj = {
    js: "javascript",
    cpp:"c++",
    rb:"rubby",
    swift:"swift by apple"
}
// for (const val of myObj) {
//     console.log(val)
// }

for(const key in myObj){
    // console.log(`${key} of ${myObj[key]}`)
    // console.log(`${key} of ${myObj[key]}`)
}

const newArr = ["js","rubby","python","swift","react"]
for (const key in newArr){
    // console.log(`${newArr[key]}`)
}


const map = new Map()
map.set("in","INDIS")
map.set("USA","Unitesd state of amekia")
map.set("Ln","Londomn")
map.set("SF","South africa")

for (const key in map){
    console.log(key)
}