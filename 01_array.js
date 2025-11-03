const myArray = [2,5,7,3,99,4,6];
console.log(myArray);

const newArray = new Array(6,8,3,1,9,22,79);
console.log(newArray[5]);

newArray.push(1);
newArray.push(23);
newArray.push(2);
newArray.push(3);
newArray.push(6);
newArray.pop();
newArray.unshift(4);
newArray.shift();
console.log(newArray);

const res = newArray.join();
console.log(typeof res);