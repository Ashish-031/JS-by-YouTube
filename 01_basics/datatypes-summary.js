// Primitive

// 7 types : String, Number, Boolean, null, undefined, Smybol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654156754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "ashish",
    age: 18,
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);





// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "ashishkumardotcom"

let anothername = myYoutubename
anothername = "cahiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "usergoogle.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ashish@google.com"

console.log(userOne.email);
console.log(userTwo.email);
