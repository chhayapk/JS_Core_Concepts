

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

//JavaScript Destructuring
//The destructuring syntax makes it easier to assign values to a new variable. For example,

// before you would do something like this
const person2 = {
    name2: 'Sara',
    age2: 25,
    gender2: 'female'    
}

let name2 = person2.name2;
let age2 = person2.age2;
let gender2 = person2.gender2;

console.log(name2); // Sara
console.log(age2); // 25
console.log(gender2); // female

//Using ES6 Destructuring syntax, the above code can be written as:
const person = {
    name3: 'Sara',
    age3: 25,
    gender3: 'female'    
}

let { name3, age3, gender3 } = person;

console.log(name3); // Sara
console.log(age3); // 25
console.log(gender3); // female

//Promises
// returns a promise
let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected'); 
 });
 
 // executes when promise is resolved successfully
 countValue.then(
     function successValue(result) {
         console.log(result); // Promise resolved
     },
  )

  //rest parameter
  function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
  }
  
  show('one', 'two', 'three', 'four', 'five', 'six')

  //spread Operator
  let arr1 = ['one', 'two'];
let arr2 = [...arr1, 'three', 'four', 'five'];
console.log(arr2); // ["one", "two", "three", "four", "five"]

//Arrow Function

// function expression
let e = function(x, y) {
   return x * y;
}

// using arrow functions
let f = (x, y) => x * y;

//Arrow Function with No Argument
let greet = () => console.log('Hello');
greet(); // Hello

//Arrow Function with One Argument
let greet1 = x => console.log(x);
greet1('Hello'); // Hello 

//Arrow Function as an Expression
let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby

//Multiline Arrow Functions
let sum1 = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum1(5,7);
console.log(result1); // 12

//inside an arrow function
function Person3() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

//Arguments Binding

//Regular functions have arguments binding. 
const x = new Person3();
x.sayName();

let m = function () {
    console.log(arguments);
}
m(4,6,7); // Arguments [4, 6, 7]


//Arrow functions do not have arguments binding. It gives errors. So we use spread syntax
let r = (...n) => {
    console.log(n);
}

r(4,6,7); // [4, 6, 7]


// ES6
//asyncFunction()
//.then(() => asyncFunction1())
//.then(() => asyncFunction2())
//.then(() => finish);

//The concept of default parameters is a new feature introduced in the ES6 version of JavaScript. This allows us to give default values to function parameters. Let's take an example,

//default parameters
function sum(x = 3, y = 5) {

    // return sum
    return x + y;
}

console.log(sum(5, 15));  // 20 
console.log(sum(7));        // 12
console.log(sum());          // 8


//Passing Parameter as Default Values
function sum_1(a = 1, b = a,  c = a + b) {
    console.log( a + b + c );
}

sum_1(); // 4

//If you reference the parameter that has not been initialized yet, you will get an error
//function sum( x = y, y = 1 ) {
//    console.log( x + y);
//}

//sum(); 

//Passing Function Value as Default Value
// using a function in default value expression

const sum_2 = () => 15;

const calculate = function( x, y = x * sum_2() ) {
    return x + y;
}

const result = calculate(10);
console.log(result);            // 160


//Passing undefined Value
//In JavaScript, when you pass undefined to a default parameter function, the function takes the default value. For example,

function test(x = 1) {
    console.log(x);
  }
  
  // passing undefined
  // takes default value 1
  test(undefined); // 1

  //Template literals
const name_1 = 'Jack';
console.log(`Hello ${name_1}!`); // Hello Jack!

//Template Literals for Strings
const str1 = `This is a string`;
const str2 = `This is a string with a 'quote' in it`;
const str3 = `This is a string with a "double quote" in it`;

//Multiline Strings Using Template Literals
const message1 = `This is a long message
that spans across multiple lines
in the code.`

console.log(message1)

//Expression Interpolation
const name_3 = 'Jack';
console.log(`Hello ${name_3}`); 

const result_3 = 4 + 5;
const result_4 = 10 + 5;

// template literals used with expressions
console.log(`The sum of 4 + 5 is ${result_3}`);

console.log(`${result_3 < 10 ? 'Too low': 'Very high'}`)
console.log(`${result_4 < 10 ? 'Too low': 'Very high'}`)

//tagged templates
const name_4 = 'Jack';
const greet_4 = true;

function tagExample(strings, nameValue) {
    let str0 = strings[0]; // Hello
    let str1 = strings[1]; // , How are you?

    if(greet) {
        return `${str0}${nameValue}${str1}`;
    }
}

// creating tagged literal
// passing argument name
const result_5 = tagExample`Hello ${name_4}, How are you?`;

console.log(result_5);