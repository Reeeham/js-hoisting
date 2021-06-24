

console.log(typeof variable)//undefined

console.log(variable)//referenceError 

//all functions and variable declarations are hoisted to the top of their scope
//undeclared variables don't exist until code assigning them is executed


//assigning value to undeclared variable implicitly creates it as a global variable
//all undeclared variables are global variables

function hoist(){
    a =20;
    var b =100;
}

hoist();
console.log(a)//20 global var
console.log(b)//reference error


console.log(hoist); //undefined declared but not assigned yet

var hoist = 'The variable has been hoisted';


function hoist(){
    var message;
    console.log(message);
    message = 'Hoisting is all the rage!'
}

hoist()// undefined


function hoist() {
    var message='Hoisting is all the rage!'
    return (message);
  }
  
  hoist(); // Ouput: Hoisting is all the rage!



  //strict mode
  'use strict';

  console.log(hoist);//reference error
  hoist = 'Hoisted';

  //let and const block scoped not function scoped like var
  console.log(hoist)//reference error hoist is not defined
  let hoist = 'The variable has been hoisted';

  let hoist;
  console.log(hoist)//undefined
  hoist = 'Hoisted'

  //const immutable variable
  const PI = 3.142;
  PI = 22/7;
console.log(PI)//typeerror: assignment to constant variables

console.log(hoist);//referencerror
const hoist = 'The variable has been hoisted'


function getCircumference(radius) {
    console.log(circumference)
    circumference = PI*radius*2;
    const PI = 22/7;
  }
  
getCircumference(2) // ReferenceError: circumference is not defined

//a constant variable must be both declared and initialised before use.
const PI;
console.log(PI); // Ouput: SyntaxError: Missing initializer in const declaration
PI=3.142;


//Hoisting functions
//function declarations vs function expressions

hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');
};


expression(); //Output: "TypeError: expression is not a function

var expression = function() {
  console.log('Will this work?');
};

expression(); // Ouput: TypeError: expression is not a function

var expression = function hoisting() {
  console.log('Will this work?');
};


//Variable assignment over function declaration
var double = 22;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: number


//Function declarations over variable declarations
//Even if we reversed the position of the declarations, 
//the JavaScript interpreter would still consider double a function.
var double;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: function


//Hoisting classes
var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo); // Output: ReferenceError: Hobbit is not defined

class Hobbit {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}

///Hobbit was used before it is declared, 
//which is illegal for class variables
//So, as far as class declarations go, to access the class declaration, you have to declare first.


class Hobbit {
    constructor(height, weight) {
      this.height = height;
      this.weight = weight;
    }
  }
  
  var Frodo = new Hobbit();
  Frodo.height = 100;
  Frodo.weight = 300;
  console.log(Frodo); // Output: { height: 100, weight: 300 }

  //Class expressions
//Much like their function counterparts, class expressions are not hoisted.

var Square = new Polygon();
Square.height = 10;
Square.width = 10;
console.log(Square); // Output: TypeError: Polygon is not a constructor

var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};


var Polygon = class Polygon {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  
  var Square = new Polygon();
  Square.height = 10;
  Square.width = 10;
  console.log(Square);