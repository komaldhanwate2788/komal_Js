const myObject = {
    js:"javascript",
    php:"Personal home page",
    rb:"rubii",
    py: "python"
}

for(const key in myObject){
    // console.log(`${key} having value is ${myObject[key]}`)
}

const myPrograming = [
    {
         js:"javascript",
         php:"Personal home page",
    },
     {
         rb:"rubii",
         py: "python",
    },
     {
         java:"java",
         php:"Personal home page",
    }
]

for(const key in myPrograming){
    // console.log(myPrograming[key])
}

const map = new Map()
map.set('In',"India")
map.set('Usa',"United state of america")
map.set('Fr',"Frane")

for(const key in map){
    console.log(key)
}