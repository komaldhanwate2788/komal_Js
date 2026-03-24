const myArr = [1,2,3,4,5,6,7,8,9,19]

// const newArr = myArr.map( (num) => (num * 5))
const result = myArr.map( (num) => (num * 10))
                    .map( (num) => (num  + 2))
                    .filter( (num) => (num > 50))

console.log(result)

// only arithmatical operations are used in map other than logical operation is used in filter function