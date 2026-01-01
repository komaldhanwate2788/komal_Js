const books = [
    {title : 'book one',genre:'fiction',publish:1981,edition:2004},
     {title : 'book two',genre:'non-fiction',publish:1992,edition:2008},
      {title : 'book three',genre:'history',publish:1999,edition:2007},
       {title : 'book four',genre:'science',publish:1989,edition:2010},
        {title : 'book five',genre:'history',publish:2009,edition:2015},
         {title : 'book six',genre:'non-fiction',publish:1997,edition:2010},
          {title : 'book seven',genre:'fiction',publish:1988,edition:1996}
]

// console.log(books)

let userBook = books.filter((bk) => bk.genre === 'history')
// console.log(userBook)

userBook = books.filter((bk) => bk.publish >= 2000)
console.group(userBook)
