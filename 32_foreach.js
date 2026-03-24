const coding = ["js","rubby","swift","go","nodejs","react","python"]

coding.forEach( function (item){
    // console.log(item)
})

coding.forEach( (val) => {
    // console.log(val)
})

function printMe(item){
    // console.log(item)
}
// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
})

const myCoding = [
    {
        lanuageName:"javascript",
        languageFile:"js"
    },
     {
        lanuageName:"python",
        languageFile:"py"
    },
     {
        lanuageName:"rubby",
        languageFile:"rb"
    },
     {
        lanuageName:"swift by apple",
        languageFile:"swift"
    },
]

myCoding.forEach( (item) => {
    // console.log(item.lanuageName)
    // console.log(item.languageFile)
    console.log(`Language Name ${item.lanuageName} and File is ${item.languageFile}`)
})