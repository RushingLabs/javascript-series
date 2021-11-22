# JavaScript Series

A series to learn the JavaScript basics. Everything runs completely in the browser.

All parts of this series will run from a single web page, however the course will not be focused on web development specifically. This is simply the lowest-barrier of starting to learn: (a) get into the language mechanics, (b) avoid extra dependencies on outside tooling (e.g. Node.js).

This series is best explored on a device where you can comfortably use the browser's Developer Tools.


1. Let's run JavaScript in an HTML file
2. JavaScript file from HTML

3. Auto-invoking functions


## Table of Contents

### Ex. 1-1 Let's run JavaScript in an HTML file

- JavaScript runs in the browser...along with HTML and CSS
    - So, we need an HTML file to run some JavaScript
    - JavaScript can run in a simple `<script>` block

### Ex. 1-2 JavaScript file from HTML

- JavaScript normally runs from a separate file, not inline with HTML
    - How to create a file containing JavaScript
    - _**We don't need an auto-invoking function**. The browser executes it (to play nice)._
    - Stick to basics: `alert()` and `console.log()`


### Ex. 2 Variables (Pt. 1)

- Show how to create variables
    - _Stick to_ `var` _for now_. Mention there are other ways to create variables we will discuss later.
        - NOTE: There are differences between `let` and `var`: [https://www.javascripttutorial.net/es6/difference-between-var-and-let/](https://www.javascripttutorial.net/es6/difference-between-var-and-let/)
    - Show how to combine variables and strings

### Ex. 3-1 If-Conditions

- Show a basic if-condition
    - BONUS: Show a 1-line `if` statement as optional, but not necessary to use

### Ex. 3-2 Switch Statement

### Ex. 4-1 Loops (Pt. 1, for)

- Show a for-loop

### Ex. 4-2 Loops (Pt. 2, while)

- Show a while-loop

### Ex. 4-3 Loops (Pt. 3, foreach)

- Show a `foreach` loop...using an array

### Ex. 5 Arrays

- We can assign more than one piece of data to a single variable
- How to create an array
- A for-loop printing each item of the array

### Ex. 6 DataTypes

- This is a good "in-betweeN" from arrays to objects
    - Loops showed arrays -> Arrays show a data storage -> different types go inside objects
- String, Number, Boolean
- Show the `typeof` operator

### Ex. 6-1 Objects

- What is an object in JavaScript?
    - So...store anything in `{}`?
- What is JSON?

### Ex. 6-2 The `object` Type


### Ex. 7-1 Functions

### Ex. 7-2 Hoisting




### Ex. ??? ES6/ES2015 Transition

- Call back to the original introduction video...how we discussed a brief history of JavaScript
- Explain what this update was--the largest single update JavaScript had ever received
    - Or at least first major update since ES5 (2009)

- var, let, const
- arrow functions
- the `new` keyword


### Advanced Topics

- Closures
- Memoization
- Callbacks


## Reference Material

ES6 Tutorial - [https://www.javascripttutorial.net/es6/](https://www.javascripttutorial.net/es6/)

- Lessons on the specific pieces of the ES6 update, from 2015

Zed Shaw's, Learn Code the Hard Way - [https://learncodethehardway.org/](https://learncodethehardway.org/)

JavaScript.Info - [https://javascript.info/](https://javascript.info/)

- A _**very**_ thorough collection of JavaScript tutorials

MDN Web Docs, JavaScript - [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)