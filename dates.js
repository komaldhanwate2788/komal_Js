let date = new Date();
console.log(date);

console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getTimezoneOffset());
console.log(date.getFullYear());
console.log(date.toString());
console.log(date.toLocaleDateString());

let newDate = new Date(2025,23,9);
console.log(newDate.toDateString());

let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(myTimestamp.getTime);
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

// console.log(DataView());

// let newDate = new DataView('new');
// console.log(newDate);