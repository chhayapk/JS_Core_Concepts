//Arrays

const words = ['hello', 'world', 'welcome'];

//Using an array literal is the easiest way
const array1 = ["eat", "sleep"];

//examples
// empty array
const myList = [ ];

// array of numbers
const numberArray = [ 2, 4, 6, 8];

// array of strings
const stringArray = [ 'eat', 'work', 'sleep'];

// array with mixed data types
const newData = ['work', 'exercise', 1, true];

//You can also store arrays, functions and other objects inside an array. For example,

const newData1 = [
    {'task1': 'exercise'},
    [1, 2 ,3],
    function hello() { console.log('hello')}
];

//Access Elements of an Array

const myArray = ['h', 'e', 'l', 'l', 'o'];

// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[4]); // "e"

//You can use the built-in method push()  to add elements to an array.

let dailyActivities = ['eat', 'sleep'];

// add an element at the end
dailyActivities.push('exercise');

console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']

//You can use the built-in method unshift() to add elements to an array.

let dailyActivities1 = ['eat', 'sleep'];

// add an element at the end
dailyActivities1.unshift('exercise');

console.log(dailyActivities1); //  ['eat', 'sleep', 'exercise']

//Change the Elements of an Array

let dailyActivities2 = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 2 index
dailyActivities2[2] = 'exercise';

console.log(dailyActivities2); // ['eat', 'sleep', 'exercise']

let dailyActivities3 = [ 'eat', 'sleep'];

// add an element at index 3 (fourth element), the third element will be undefined.
dailyActivities3[3] = 'exercise';

console.log(dailyActivities3); // ['eat', 'sleep', 'exercise']

//Remove an Element from an Array - pop()

let dailyActivities4 = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities4.pop();
console.log(dailyActivities4); // ['work', 'eat', 'sleep']

// remove the first element
dailyActivities4.shift();
console.log(dailyActivities4); // ['eat', 'sleep']

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities4.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities4);  // ['eat']

//arrays length

const dailyActivities5 = [ 'eat', 'sleep', 'work'];

// this gives the total number of elements in an array
console.log(dailyActivities5.length); // 3

//Working of JavaScript Arrays

let arr = ['h', 'e', 'f'];
let arr1 = arr;
arr.name = 'John';
arr1.push('1');

console.log(arr);
console.log(arr1);
console.log(arr.name);
console.log(arr['name']);
console.log(arr.length);


// multidimensional array
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];

let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];

let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

// multidimensional array
let studentsData1 = [student1, student2, student3];

let x = [
    ['Jack', 24],
    ['Sara', 23], 
    ['Peter', 24]
    ];

    console.log(x[1][1]);

    //add an element to multidimesional data

    let studentsData2 = [['Jack', 24], ['Sara', 23],];
studentsData2.push(['Peter', 24]);

console.log(studentsData2); //[["Jack", 24], ["Sara", 23], ["Peter", 24]


// using index notation
let studentsData3 = [['Jack', 24], ['Sara', 23],];
studentsData3[1][2] = 'hello';
studentsData3[1].push('hello');

console.log(studentsData3); // [["Jack", 24], ["Sara", 23, "hello"]]


let studentsData5 = [['Jack', 24], ['Sara', 23],];

for (let i of studentsData5) {
  for (let j of i) {
    console.log(j);
  }
}

let studentsData4 = [['Jack', 24], ['Sara', 23],];

// looping outer array elements
for(let i = 0; i < studentsData4.length; i++){

    // get the length of the inner array elements
    let innerArrayLength = studentsData4[i].length;
    
    // looping inner array elements
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(studentsData4[i][j]);
    }
}

//Strings

//strings example
const name = 'Peter';
const name1 = "Jack";
const result = `The names are ${name} and ${name1}`;

//Access String Characters
//One way is to treat strings as an array
const a = 'hello';
console.log(a[1]); // "e"
console.log(a[3]);

//Another way is to use the method charAt()
const s = 'hello';
console.log(s.charAt(1)); // "e"
console.log(s.charAt(4));

//Strings are immutable
let c = 'hello';
c[0] = 'H';
console.log(c); // "hello"

//Case-Sensitive
const d = 'a';
const e = 'A'
console.log(d === e); // false

//Multiline Strings
// using the + operator
const message1 = 'This is a long message ' +
    'that spans across multiple lines' + 
    'in the code.'

// using the \ operator
const message2 = 'This is a long message \
that spans across multiple lines \
in the code.'

console.log(message1.length); //String Length

//String Objects
const f = 'hello';
const b = new String('hello');

console.log(f); // "hello"
console.log(b); // "hello"

console.log(typeof f); // "string"
console.log(typeof b); // "object"

//string methods
const text1 = 'hello';
const text2 = 'world';
const text3 = '  JavaScript  ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); // "el"

//string() function
const g = 225; // number
const h = true; // boolean

//converting to string
const result6 = String(g);
const result7 = String(h);

console.log(result6); // "225"
console.log(result7); // "true"

//Escape Character
const name2 = 'My name is \'Peter\'.';
console.log(name2);

//JavaScript for...in loop
//Iterate Through an Object
const student = {
    name: 'Monica',
    class: 7,
    age: 12
}

// using for...in
for ( let key in student ) {

    // display the properties
    console.log(`${key} => ${student[key]}`);
}

//update values of properties
const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}

//for...in with Strings
const string = 'code';

// using for...in loop
for (let i in string) {
    console.log(string[i]);
}

//for...in with Arrays
// define array
const arr2 = [ 'hello', 1, 'JavaScript' ];

// using for...in loop
for (let x in arr2) {
    console.log(arr2[x]);
}

//Number Objects
const j = 45;

// creating a number object
const k = new Number(45);

console.log(j); // 45
console.log(k); // 45

console.log(typeof j); // "number"
console.log(typeof k); // "object"

//Number Methods
// check if a is integer
const l = 12;
console.log(Number.isInteger(l)); // true

// check if b is NaN
const m = NaN;
console.log(Number.isNaN(m)); // true

// display upto two decimal point
const n= 5.1234;
console.log(n.toFixed(2)); // 5.12

//Number Function
const v = '23'; // string
const p = true; // boolean

//converting to number
const result8 = Number(v);
const result9 = Number(p);

console.log(result8); // 23
console.log(result9); // 1

// two symbols with the same description
const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false

//symbol Description :To access the description of a symbol, we use the . operator
const o = Symbol('hey');
console.log(o.description); // hey

//symbol as an object key
let id = Symbol("id");

let person = {
    name: "Jack",

    // adding symbol as a key
    [id]: 123 // not "id": 123
};

console.log(person); // {name: "Jack", Symbol(id): 123}

//Symbols are not included in for...in Loop
//The for...in loop does not iterate over Symbolic properties. For example,

let id1 = Symbol("id");

let person1 = {
    name: "Jack",
    age: 25,
    [id]: 12
};

// using for...in
for (let key in person1) {
    console.log(key);
}

//Symbol Methods
// get symbol by name
let sym = Symbol.for('hello');
let sym1 = Symbol.for('id');

// get name by symbol
console.log( Symbol.keyFor(sym) ); // hello
console.log( Symbol.keyFor(sym1) ); // id