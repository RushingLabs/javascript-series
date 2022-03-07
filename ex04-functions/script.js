/** 
 * Exercise 4 - Functions
 * 
 * Discussing functions.
 * How to create them, and what it means for scope.
 * 
 * References ---
 * - MDN Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 * - MDN String length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 * - MDN String uppercase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 * - MDN slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */


/**
 * Introducing a function
 * 
 * - We can move our code to "bite-size" pieces. And
 * call it once we're ready for it to run.
 */

 function doSomething() {
    var message = "print...from a message";
    console.log(message);
}

doSomething();




/**
 * Intro: returning data
 * - We can also accept data into our functions, as parameters
 * and "return" data back out of them!
 * 
 * This parameters and a return!
 */

function makeBig(message){
    var changed = message.toUpperCase();
    return changed;
}

console.log("big -> " + makeBig());





/**
 * Intro: cont'd
 * 
 * This means we can put all kinds of calculations in these
 * little "bite-size" pieces.
 */

// Add two numbers
function add(x, y) {
    var sum = x + y;
    return sum;
}

// Multiply two numbers
function multiply(x, y) {
    return x * y;
}

// Count a string
function stringLength(message) {
    return message.length;
}

// Capitalize the first letter of a string!
function capitalizeFirst(message) {
    return message.charAt(0).toUpperCase + message.slice(1);
}



/**
 * Function scope
 * 
 * - What is scope?
 *   - "The part of the program where your variables can be accessed."
 */

// These variables are contained within the function
function forFun() {
    var x = "x";
    var y = "y";
    console.log("Our variables are: " + x + " " + y);
}

forFun();
console.log("Our variables are: " + x + " " + y);