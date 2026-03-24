const coding = ["js","py","jdk","rb","cpp"]

const values = coding.forEach( (item) => {
    // console.log(item)
    return item
})
// console.log(values)

// In above case we can't get any return value


const myArr = [1,2,3,4,5,6,7,,8,9,10]

// const newArr = myArr.filter( (num) => (num > 5))
const newArr = myArr.filter( (item) => {
   return item < 5
})
// console.log(newArr)

const books = [
    {title : 'book one',genre:'fiction',publish:1981,edition:2004},
    {title : 'book two',genre:'non-fiction',publish:1992,edition:2008},
    {title : 'book three',genre:'history',publish:1999,edition:2007},
    {title : 'book four',genre:'science',publish:1989,edition:2010},
    {title : 'book five',genre:'history',publish:2009,edition:2015},
    {title : 'book six',genre:'non-fiction',publish:1997,edition:2010},
    {title : 'book seven',genre:'fiction',publish:1988,edition:1996}
]

const newBook = books.filter( (bk) => (bk.genre == "history" && bk.edition == "2007"))
// const newBook1 = books.filter( (bk) => (bk.publish > "1990"))
// console.log(newBook1)
console.log(newBook)