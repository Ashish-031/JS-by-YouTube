const name = "ashish"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} amd my repo count is ${repoCount}`);

const gameName = new String(`ashish-hc-com`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);
 
 
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf(`i`));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   ashish   "
console.log(newString);
console.log(newString.trim());

const url = "https://ashish.com/ashish%20kumar"

console.log(url.replace(`%20`, `-`))

console.log(url.includes(`sundar`))

console.log(gameName.split(`-`));

