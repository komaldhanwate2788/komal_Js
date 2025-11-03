let gameName = "komal rajole";
let score = 23;

console.log(gameName +  score  + "value");

console.log(`Hello this is ${gameName} and my score is ${score} thank you`);

let name = new String("KomalRajole Dhanwate");
console.log(name);
console.log(name.trim());
console.log(name.substring(0,4));
console.log(name.length);
console.log(name.toLocaleLowerCase());
console.log(name.toLocaleUpperCase());
console.log(name.slice(0, 3));
console.log(name.charAt(2));
console.log(name.charAt(6));
console.log(name.indexOf("m"));
console.log(name.fontSize);

let surname = "Dhanwate";

console.log(
    `The word "${surname}" ${ 
        name.includes(surname) ? "is" : "is not"
    } in the sentense`,
);

// console.log(
//   `The word "${surname}" ${
//     name.includes(surname) ? "is" : "is not"
//   } in the sentence`,
// );