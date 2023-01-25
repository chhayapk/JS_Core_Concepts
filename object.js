//JS Objects

// object
const student = {
    firstName: 'ram',
    class: 10
};

//Here, student is an object that stores values such as strings and numbers.

// object creation
const person = { 
    name: 'John',
    age: 20
};
console.log(typeof person); // object

//we can define it in single line
const person_1 = { name: 'John', age: 20 };

//Key values are called properties, eg (name: 'John', age: 20)

//Using dot Notation
// syntax of dotnotation : objectName.key

//for example

const person_2 = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person.name); // John

//Using bracket Notation : objectName["propertyName"]

const person_3 = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person["name"]); // John

//nested object
// nested object
const student_1 = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student_1 object
console.log(student_1.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student_1.marks.science); // 70

//Object Methods
//In JavaScript, an object can also contain a function. For example,

const person_4 = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') }
}

person_4.greet(); // hello



const person5 = {
    name: 'Tanya',
    age: 25,
    // using function as a value
    meet: function() { 
        console.log('happy') ;
        let age = 24;
    if (age == 25){
        alert("Awesome");
    }
        else{
            console.log('below 25');

        }
        
    }
    };

person5.meet(); // hello - accessing method
person5.name; // accessing method

//You can access an object method using a dot notation. The syntax is: "objectName.methodKey()""

//Built-In Methods

let number = '23.32';
let result = parseInt(number);

console.log(result); // 23

//this Keyword :To access a property of an object from within a method of the same object, you need to use the this keyword.

const per = {
    name: 'John',
    age: 30,

    // accessing name property by using this.name
    greet: function() { console.log('The name is' + ' ' + this.name); }
};

per.greet();

const per_1 = {
    name: 'John',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};

per_1.greet();

//constructor function

//In JavaScript, you can create multiple objects from a constructor function

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23,

     this.greet = function () {
        console.log('hello');
    }
}

// create objects
const person1 = new Person();
const person2 = new Person();
const person3 = new Person();



// constructor function parameters
function Person (person_name, person_age, person_gender) {

    // assigning  parameter values to the calling object
    //Object Prototype
     this.name = person_name,
     this.age = person_age,
     //this.gender = person_gender,

     //You can also add properties and methods to a constructor function using a prototype.
     Person.prototype.gender = 'Male';
 
     this.greet = function () {
         return ('Hi' + ' ' + this.name);
     }
 }
 
 
 // creating objects
 const pers1 = new Person('John', 23, 'male');
 const pers2 = new Person('Sam', 25, 'female');
 
 // accessing properties
 console.log(pers1.name, pers1.age, pers1.gender); // "John"
 console.log(pers2.name, pers2.age, pers2.gender); // "Sam"

/* using object literal
let person = {
    name: 'Sam'
}
// using constructor function
function Person () {
    this.name = 'Sam'
}

let person1 = new Person();
let person2 = new Person(); */

//Built-in Constructors

let a = new Object();    // A new Object object
let b = new String();    // A new String object
let c = new Number();    // A new Number object
let d = new Boolean();   // A new Boolean object

//In JavaScript, strings can be created as objects by:
const name = new String ('John');
console.log(name); // "John"

//In JavaScript, numbers can be created as objects by:

const number1 = new Number (57);
console.log(number1); // 57

//In JavaScript, booleans can be created as objects by:

const count = new Boolean(true);
console.log(count); // true

//You should not declare strings, numbers, and boolean values as objects because they slow down the program.


//Getter

const stud = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(stud.firstName); // Monica

// accessing getter methods
console.log(stud.getName); // Monica

// trying to access as a method
console.log(stud.getName()); // error

//Setter

const stud1 = {
    firstName: 'Monica',
    
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(stud1.firstName); // Monica

// change(set) object property using a setter
stud1.changeName = 'Sarah';

console.log(stud1.firstName); // Sarah



//Arrays

const words = ['hello', 'world', 'welcome'];
