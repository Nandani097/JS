// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt, 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumer = 2153346557688888888867n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Nandani",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), Heap (Non-Primitive) 

let myYoutubename = "Nandanigoheldotcom"

let anothername = myYoutubename
anothername = "Nandu"

console.log(anothername);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "nandani@google.com"

console.log(userOne.email);
console.log(userTwo.email);