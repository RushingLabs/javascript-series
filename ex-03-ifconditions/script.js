// Exercise 3 - If-conditions
//
//

// /**
//  * Introduction
//  */
// // Let's introduce a new type of variable--boolean
// var isSkyBlue = true;
// var isVanillaSpicy = false;

// // Let's print one out to see what they do
// console.log("Is the sky blue?" + isSkyBlue);





/**
 * How to use it
 * Some explanation and negation
 */
// Introducing: if-conditions, this is a way to make decisions in JavaScript
if (isSkyBlue) {
    console.log('The sky is blue!');
}

// Note: the if-condition executes when its condition is 'true'
if (!isVanillaSpicy) {
    console.log("Of course it isn't...it's ice cream!");
}
















// /**
//  * if-else
//  * We can also connect decisions (it doesn't matter if they make sense)
//  */
// if (!isSkyBlue) {
//     console.log("Of course, it's blue!");
// } else {
//     console.log("Then it's night time!");
// }

// // or...

// if (!isSkyBlue) {
//     console.log("Of course, it's blue!");
// } else if (isVanillaSpicy) {
//     console.log("Then it's night time!");
// } else {
//     console.log('Did you expect us to fall down here?')
// }


// /**
//  * Comparison & Logical Operators 
//  * ...w/ if, if-else
//  */
// if (3 > 2) {
//     console.log('Arithmetic still works!');
// }

// if (isSkyBlue && 1 < 7) {
//     console.log("Okay, we're starting to combine things ")
// }