const myNum = [1,2,3]

const newNumbers = myNum.reduce(function(acc,currval)  {
    console.log(`acc: ${acc} and currval:${currval}`)
    return acc + currval
},0 )
console.log(newNumbers)