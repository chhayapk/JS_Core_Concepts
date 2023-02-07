

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

