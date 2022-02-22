/** 
 * Exercise 3 - Flow control
 * 
 * "Flow control" (program flow) is how we can give our
 *  code some specific instructions about what to execute next.
 */

/*************************
 *  If-statements
 *************************/
 var isSkyBlue = true; // We set a condition...something resolves to true or false

 // if the condition is true, then we execute our code! ...if not, then it doesn't execute
 if (isSkyBlue) {
     console.log('DAY time!');
 }
 
 // we can also program for something to happen if the condition isn't true
 if (isSkyBlue) {
     console.log('DAY time!');
 } else {
     console.log('NIGHT time');
 }



 /*************************
 * While loops
 *************************/

// Let's keep our same condition...
var x = 0;
while(x < 5) {
    console.log('...time passes'); // **while** our condition is true, our code will execute
    x = x + 1;
}



/**************************
 * Bonus: Combining for-loop and if-statement
 *************************/
for (var i = 0; i <= 10; i++) {

    if (i % 2 == 0) {
        console.log(`EVEN number - ${i}`);
    }

}