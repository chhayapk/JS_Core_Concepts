// program to show try...catch in a program

const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);

    // forgot to define variable a      
    console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}

//try...catch...finally Example
const numerator1= 100, denominator1= 'a';

try {
     console.log(numerator1/denominator1);
     console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally {
     console.log('Finally will execute every time');
}

//JavaScript try...catch in setTimeout
try {
    setTimeout(function() {
        // error in the code
    }, 3000);
} catch (e) {
  console.log( "won't work" );
}

//inside the function
setTimeout(function() {
    try {
        // error in the code
    } catch  {
        console.log( "error is caught" );
    }
}, 3000);

//JavaScript throw statement

const number = 40;
try {
    if(number > 42) {
        console.log('Success');
    }
    else {

        // user-defined throw statement
        throw new Error('The number is low');
    }

    // if throw executes, the below code does not execute
    console.log('hello');
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}

const numbe1 = 40;
try {
    if(numbe1 < 42) {
        console.log('Success');
    }
    else {

        // user-defined throw statement
        throw new Error('The number is low');
    }

    // if throw executes, the below code does not execute
    console.log('hello');
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}

//Note: You can also use other built-in error constructors for standard errors: TypeError, SyntaxError, ReferenceError, EvalError, InternalError, and RangeError.

//For example,

//throw new ReferenceError('this is reference error');

//rethrow an exception

const number1 = 5;
try {
     // user-defined throw statement
     throw new Error('This is the throw');

}
catch(error) {
    console.log('An error caught');
    if( number1 + 8 > 10) {

        // statements to handle exceptions
         console.log('Error message: ' + error); 
        console.log('Error resolved');
    }
    else {
        // cannot handle the exception
        // rethrow the exception
        throw new Error('The value is low');
    }
}

const number2 = 5;
try {
     // user-defined throw statement
     throw new Error('This is the throw');

}
catch(error) {
    console.log('An error caught');
    if( number2 + 3 < 10) {

        // statements to handle exceptions
         console.log('Error message: ' + error); 
        console.log('Error resolved');
    }
    else {
        // cannot handle the exception
        // rethrow the exception
        throw new Error('The value is low');
    }
}

//ES6

// variable declared using let
let name = 'Sara';
{
    // can be accessed only inside
    let name = 'Peter';

    console.log(name); // Peter
}
console.log(name); // Sara 

//The const statement is used to declare constants in JavaScript. For example,

// name declared with const cannot be changed
const name1 = 'Sara';

//JavaScript Arrow Function
//In the ES6 version, you can use arrow functions to create function expressions. For example,//

// function expression
let t = function(x, y) {
   return x * y;
}
//can be written as

// function expression using arrow function
let h = (x, y) => x * y;

//JS Classes
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const person1 = new Person('John');
  
  console.log(person1.name); // John

  //Parameter Values
  function sum(x, y = 5) {

    // take sum
    // the value of y is 5 if not passed
    console.log(x + y);
}
sum(5); // 10
sum(5, 15); // 20

//template literals
const first_name1 = "Jack";
const last_name1 = "Sparrow";

console.log('Hello ' + first_name1 + ' ' + last_name1);
//This can be achieved using template literal by:

const first_name2 = "Jack";
const last_name2 = "Sparrow";

console.log(`Hello ${first_name2} ${last_name2}`);