const coding = ['java','php','rubby','javascript','react']

// coding.forEach((item) => {
//     console.log(item)
// })

coding.filter((item) => {
    // console.log(item)
    return item
})

const myNum = [1,2,3,4,5,6,7,8,9,10]
const newMum = myNum.filter((num) => {
    return num > 4
})
console.log(newMum)
const newNum = []
 myNum.forEach((num) => {
    if(num > 6){
        newNum.push(num)
    }
 
})
   console.log(newNum)