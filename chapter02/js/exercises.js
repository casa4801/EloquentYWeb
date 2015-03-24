/*---------------------    EXPRESSIONS AND STATEMENTS    ---------------------*/

// Expressions 1
// Make the function return a nested expression (use parentheses) whose
// evaluated value is not undefined.
Exer.expressions1 = function () {

  return ("nested");

};

// Statements 1
Exer.statements1 = function () {

  5 + 5; 

};

/*-----------------------------    VARIABLES    ------------------------------*/

// Variables 1
Exer.variables1 = function () {

  var age = 5;

};

// Variables 2
Exer.variables2 = function () {

  var five;
  five = 5;
  return five;
  

  


};

// Variables 3
Exer.variables3 = function () {

  // Write a statement that declares a variable and initializes it to a string.

  // Return the variable.
var light = "light" ;
return light;

};

// Variables 4
Exer.variables4 = function ( n ) {

  // Return the parameter.
return n; 
};

// Variables 5
Exer.variables5 = function ( n ) {

  // Declare a new variable and initialize it to the value of `n`.

  // Return the new variable.
var superer = n;
return superer;
};

// Variables 6
Exer.variables6 = function ( stacys ) {

  // You have 3 apples
  // (declare a variable named `apples` and initialize it to `3`)

  // Stacy gives you more apples
  // (the parameter `stacys`)

  // Return the total number of apples you have.
var apples = 3;
apples = apples + stacys;
return apples;
};

// Variables 7
// You have a certain amount of pocket change given by the parameter provided
Exer.variables7 = function ( change ) {

  // You find a quarter.

  // Then you spend a dime on old fashioned candy.
  // How much money do you have now?

  // Use type coercion to turn your pocket change into a string add a dollar
  // sign to the beginning.

  // Return that string.

change += 0.25;
change -= .1;
change = "$"+ change;
return change;
};


/*--------------------    KEYWORDS AND RESERVED WORDS    ---------------------*/

// Keywords 1
// Uncomment the following function by removing the slash-asterisk pairs.
// Fix the function so no keywords or reserved words are improperly used.

Exer.keywords1 = function ( truel, two ) {
  var  blue = 2;
  var consty = two+2;
  truel += "2";
  var functiong = blue + consty + truel+ two;
  return functiong;
};


/*--------------------------    THE ENVIRONMENT    ---------------------------*/

// Enviroment 1
// Uncomment the line that does not return an evironment variable.
Exer.environment1 = function () {

  // return window;
  // return document;
  // return history;
   return browser;
  // return navigator;

};

/*------------------------------    FUNCTIONS    -----------------------------*/

// Functions 1
// Call recombobulate with no arguments
// Call setPowerLevel and pass it a value over 9000.
// Call cornTortilla and pass it the values "chicken", "queso", "bacon", and
// "lime".
Exer.functions1 = function (recombobulate, setPowerLevel, cornTortilla) {
  recombobulate();
  setPowerLevel(9001);
  cornTortilla("chicken", "queso", "bacon", "lime");

};



/*----------------------    THE CONSOLE.LOG FUNCTION    ----------------------*/

// Console 1
Exer.console1 = function () {

    // Output something to the console.
  function dawn(myString){
    myOutput = myString;
    console.log(myOutput);
  };

  dawn("Hello World");

};

// Console 2
Exer.console2 = function ( printme ) {

  // Print the parameter `printme` to the console.
  console.log(printme);

};

// Console 3
// Use the provided parameter `data` and string concatenation to output
//     The magic word is "xxxxx"
// to the console, where the `xxxxx` is the value provided in `data`. Do not
// change the value of the variable `data`.
Exer.console3 = function (
  data)  {

  // your answer here
console.log("The magic word is \"" + data+'"');
  
};

// Console 4
Exer.console4 = function () {

  // Use comma-separated values to output two things to the console with one
  // call.
var x = 5, y = 2;
console.log("the value of x is",x);
};

// Console 5
// Do not change the value of the variable `y`.
Exer.console5 = function ( x, y ) {

  // Output the first parameter `x` to the console.

  // Make the function return the parameter `y` plus 1.
console.log(x);
return y + 1;

};

/*---------------------------    RETURN VALUES    ----------------------------*/

// Return 1
// Call and log out the result of `magicFunc`.
Exer.return1 = function () {
  magicFunc();
  console.log(magicFunc());
};

// Return 2
// Call and return the result of `magicFunc`.
Exer.return2 = function () {

  // your work goes here
magicFunc();
return magicFunc();
};

// Return 3
Exer.return3 = function () {

  // Call `strShift` with the argument "abczABCZ". Log the result.

  // Return that same result with "123" concatenated to the end.
var result = strShift("abczABCZ");
console.log(result);
return result+"123";


};

// Return 4
// Log the result of the string concatenation of two separate calls to
// `magicFunc`.
Exer.return4 = function () {
// magicFunc("result");

  console.log("" + magicFunc()+magicFunc());


};

// Return 5
// Shift the string "abcABC123!@#" with strShift.
// Shift the string "a S d F j K l" with strShift twice.
// Return the result of these two shifted strings passed into `strShuffle` with
// the first string as the first argument and the second string as the second
// argument.
Exer.return5 = function () {

  // Declare and initialize a variable for the first string.

  // Declare and initialize a variable for the second string.

  // A return statement.

};

/*-------------------------    PROMPT AND CONFIRM    -------------------------*/

// Prompt 1
// Call prompt with the string and return the result.
Exer.prompt1 = function () {

};

// Confirm 1
// Call confirm with the string and return the result.
Exer.confirm1 = function () {

};

/*----------------------------    CONTROL FLOW    ----------------------------*/

// Control 1
Exer.control1 = function () {

  // Use prompt to get a number from a user

  // Print that number to the console

};

// Control 2
Exer.control2 = function ( bar ) {

  // Declare a variable named `foo`.

  // Initialize `foo` with a string.

  // Log `foo` to the console.

  // Concatenate the parameter `bar` to be beginning and end of `foo`
  // Save the result in a new variable called `ding`.

  // Call `strReverse` and pass it `ding` (as an argument).
  // Send the result to the user in a confirm window.
  // Save the user's response in a new variable called `quux`.

  // Return the opposite of `quux`.

};

/*-----------------------    CONDITIONAL EXECUTION    ------------------------

// Conditional 1
Exer.condition1 = function () {};

// Conditional 2
Exer.condition2 = function () {};

// Conditional 3
Exer.condition3 = function () {};

// Conditional 4
Exer.condition4 = function () {};
*/

/*----------------------    WHILE AND DO WHILE LOOPS    ----------------------*/

/*---------------------------    INDENTING CODE    ---------------------------*/

// Indenting 1
// Correctly indent the following code block using TWO spaces for each block
Exer.indenting1 = function() {
var firstName = "Zachery"; var lastName = "Moneypenny"; if(firstName === "Zachery") { lastName = "Johnson"; }
};

// Indenting 2
// Correctly indent the following code block using FOUR spaces for each block
Exer.indenting2 = function() {
var firstName = "Penny"; var lastName = "Moneywhistle"; if(firstName === "Penny") { lastName = "Johnson"; }
};

/*-----------------------------    FOR LOOPS    ------------------------------*/

/*-----------------------    BREAKING OUT OF A LOOP    -----------------------*/

/*-------------------    UPDATING VARIABLES SUCCINCTLY    --------------------*/

/*-----------------    DISPATCHING ON A VALUE WITH SWITCH    -----------------*/

// Switch 1
Exer.switch1 = function ( animal ) {

  var output = 'The ' + animal + ' goes "';

  // Create a switch that dispatches on the parameter `animal`.
  // In each case, concatenate the correct response to end of the `output`
  // string.

    // "cow": "foo"

    // "sheep": "bar"

    // "duck": "quux"

    // default: "ring-a-ding-ding-dingding-ding-a-ding-ding"

  output += '"!';
  console.log( output );

};

/*---------------------------    CAPITALIZATION    ---------------------------*/

/*------------------------------    COMMENTS    ------------------------------*/
