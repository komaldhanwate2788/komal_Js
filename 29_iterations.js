const myArr = [1,2,3,4,5,6,7,8,9,10]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    if(element == 5){
        console.log("5 is best element")
    }
    console.log(element)

    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`OUTTER loop of ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`INNER loop of ${j} and INNER loop ${i}`)
        // console.log( i + '*' + j  + '=' + i*j)
    }
    
}

const newArr = ["superman","batman","perman","shaktiman","hero"]
for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i];
    console.log(element)
    
}

for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log("5 is detected")
        break;
        // continue;
    }
    console.log(`The Number is ${i}`)
    
}