// Prevent us from attempting to use variables
// that are not declared
"use strict"
const myName = "Dan";
console.log(myName)             // Output: "Dan"
console.log(typeof myName)      // Output: "string"

const one = 1;
console.log(one)                // Output: 1
console.log(typeof one);        // Output: "number"

let isMentor = true;            
console.log(isMentor)           // Output: true
console.log(typeof isMentor)    // Output: "boolean"

isMentor = true;

console.log(isMentor)           // Output: false
console.log(typeof isMentor)    // Output: "boolean"

//I wasn't sure what to do here, because this code goes with what is in the html.
//Nothing else made any impact, so I moved on.
