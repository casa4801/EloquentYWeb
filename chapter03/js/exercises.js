

// Chapter 3

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^    Defining a Function    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

//=============================// wrapper:
var three, myLog, square;      // necessary for tests
Exer.defining = function () {  // do not remove or alter
//=============================//

/******************************    DEFINING 1    ******************************/
// Use a function expression to define a function named `three`.
// That function should return the value 3.

var three = function(){
  return 3;
}


/******************************    DEFINING 2    ******************************/
// Use a function expression to define a function named `myLog`.
// `myLog` should accept one parameter named `message`.
// `myLog` should output `message` to the console with the appropriate
//     formatting.
  var myLog = function(message) {
    console.log("The Log Says: " + message); 
    // body...
  }


/******************************    DEFINING 3    ******************************/
// Use a function expression to define a function named `square`.
// `square` should accept one parameter named `number`.
// The function should square the number and both log and return the result.
var square = function  (number) {
  number = number * number;
  console.log( number);
  return number;
  // body...
}

//==========================//
  Exer.defining1 = three;   //
  Exer.defining2 = myLog;   //
  Exer.defining3 = square;  //
};  //======================//

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^    Parameters and Scopes    ^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/*****************************    Parameters 1    *****************************/
// Inside `Exer.parameters1` create a function named `spaceCubeDetector` that
//     accepts a length, width, and a height.
// When its length, width, and height are all equal, `spaceCubeDetector` should
//     return the correct string, otherwise the other string.
// `parameters1` should return `spaceCubeDetector`

Exer.parameters1 = function() {
var spaceCubeDetector = function(length, width, height){

  if(length === width && width === height && height != null){
      return "SPACE CUBE DETECTED!!";
    } else {
      return "THIS IS NO SPACE CUBE!";
    }
  }
    return spaceCubeDetector;

};  // end Exer.parameters1




/*****************************    Parameters 2    *****************************/
// Given spaceCubeDetector:
// Run it once with a length of 3, width of 5, and height of 3.14159265359
//     and log its return value.
// Run it once with a length of 7, width of 7, and height of 7 and log its
//     return value.
// Run it once with a length of 1, width of 2, and height of 3 and log its
//    return value.
//================================================//
Exer.parameters2 = function(spaceCubeDetector) {  //
//================================================//

var result = spaceCubeDetector(3,5, 3.14159265359);
console.log(result);
 var result1 = spaceCubeDetector(7,7, 7);
console.log(result1);
var result2 = spaceCubeDetector(1,2,3);
console.log(result2) ;



};  // wrapper end



//===============================    SCOPE    ================================//
//  For Scope exercises 1-5, read through the following code and find the     //
//  values for the variables where noted by the comments. Write your asnwers  //
//  as return values for the functions Exer.scope[1-5].                       //
//============================================================================//

Exer.scopeExample = function() {

  var foo = 2;
  var bar = 7;
  var quux = 11;

  var skip = function() {
    var foo = 5;
    console.log(foo); // Scope 1: What value of foo is logged?
    quux = foo *  bar;
    console.log(quux); // Scope 2: What value of quux is logged?
    return bar;
  };

  var scoop = function(quux) {
    console.log(quux); // Scope 4: What value of quux is logged?
  };

  var scrap = function() {
    console.log(quux); // Scope 5: What value of quux is logged?
  };

  foo = skip();
  scoop(foo); // Scope 3: What value of foo is passed to the function Scoop?
  scrap();

};

/********************************    SCOPE    *********************************/
//  Write your answers in this section

Exer.scope1 = function() {

  return 5 ;
  bar = 2;
};

Exer.scope2 = function() {
  return 35 ;
};

Exer.scope3 = function() {
  return 7 ;
};

Exer.scope4 = function() {
  return 7 ;
   
};

Exer.scope5 = function() {
  return 35 ;
};


/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    Nested Scope    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

//============================================================================//
//  For Nested Scope exercises 1-20, read through the following code and      //
//  find the values for the variables where noted by the comments. Write      //
//  your answers as the return values for functions Exer.nest[1-20].          //
//============================================================================//

Exer.nestExample = function() {

  var foo = 2;
  var bar = 5;
  var quux = 7;

  var nest = function(foo) {

    var bar = 11;

    var finch = function(foo) {
      console.log(foo); // Nest 8: What value of foo is logged?
      bar = foo;
      quux = foo;
    };

    console.log(bar); // Nest 4: What value of bar is logged?
    console.log(quux); // Nest 5: What value of quux is logged?

    var robin = function() {
      var bar = 13;
      quux = bar;
      console.log(quux); // Nest 11: What value of quux is logged?
    };

    console.log(bar); // Nest 6: What value of bar is logged?
    console.log(quux); // Nest 7: What value of quux is logged?

    var batman = function() {
      foo = 0;
      bar = 0;
      quux = 0;
      return "I AM THE NIGHT!!";
    };

    finch(17);

    console.log(bar); // Nest 9: What value of bar is logged?
    console.log(quux); // Nest 10: What value of quux is logged?

    robin();

      console.log(quux); // Nest 12: What value of quux is logged?

    if (batman()) {
      console.log(foo); // Nest 13: What value of foo is logged?
      console.log(bar); // Nest 14: What value of bar is logged?
      console.log(quux); // Nest 15: What value of quux is logged?
    }
  };

  console.log(foo); // Nest 1: What value of foo is logged?
  console.log(bar); // Nest 2: What value of bar is logged?
  console.log(quux); // Nest 3: What value of quux is logged?

  nest(19);

  console.log(foo); // Nest 16: What value of foo is logged?
  console.log(bar); // Nest 17: What value of bar is logged?
  console.log(quux); // Nest 18: What value of quux is logged?

};

/*****************************    Nested Scope    *****************************/
//  Write your answers in this section.

Exer.nest1 = function() {
  return  2 ;
};
Exer.nest2 = function() {
  return 5 ;
};
Exer.nest3 = function() {
  return 7 ;
};
Exer.nest4 = function() {
  return 11 ;
};
Exer.nest5 = function() {
  return 7 ;
};
Exer.nest6 = function() {
  return 11 ;
};
Exer.nest7 = function() {
  return 7 ;
};
Exer.nest8 = function() {
  return 17 ;
};
Exer.nest9 = function() {
  return 17 ;
};
Exer.nest10 = function() {
  return 17 ;
};
Exer.nest11 = function() {
  return 13 ;
};
Exer.nest12 = function() {
  return 13 ;
};
Exer.nest13 = function() {
  return 0 ;
};
Exer.nest14 = function() {
  return 0 ;
};
Exer.nest15 = function() {
  return 0 ;
};
Exer.nest16 = function() {
  return 2 ;
};
Exer.nest17 = function() {
  return 5 ;
};
Exer.nest18 = function() {
  return 0 ;
};

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^    Functions as Values    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/
// Nate

/*************************    Declaration Notation    *************************/
// Annalise

/****************************    The Call Stack    ****************************/
// Nate

/**************************    Optional Arguments    **************************/
// Annalise

/*******************************    Closure    ********************************/
// Nate

/******************************    Recursion    *******************************/
// Annalise

/**************************    Growing Functions    ***************************/
// Nate

/**********************    Functions and Side Effects    **********************/
// Annalise
