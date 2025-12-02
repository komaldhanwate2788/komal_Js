const coding = ["js","rubii","python","php","rect","node"]

coding.forEach((item) => {
    // console.log(item)
})

const result = ["Hello", "Komal", "Rajole", "Coding","Expert"]
//  function printMe(item){
//     console.log(item)
// }
result.forEach((item)=>{
    // console.log(item)
})

function printMe(item){
    // console.log(item)
}
coding.forEach(printMe)

const myArr = [
   {
         languageName:"javascript",
         languageSubname:"Personal home page",
    },
     {
         languageName:"rubii",
         languageSubname: "python",
    },
     {
         languageName:"java",
         languageSubname:"Personal home page",
    }
]
myArr.forEach((item) => {
    console.log(item.languageSubname)
})