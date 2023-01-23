//Scope in Javascript

//Global Scope
//A variable declared at the top of a program or outside of a function is considered a global scope variable.

let a = "hello";

function greet () {
    console.log(a);
}

greet();

//this is a global variable. means it can be used anywhere in the program.

//value of 'a' can be changed now (for example)


function greet(){
    a = "world"
    console.log(a);
}

greet();

//Above the value of a was 'hello' after that in the greet function we changed it to 'world'.
//So we should avoid using global variables as they can be changed anywhere in the program.

//we also use variable without declaring

function greet(){
    a = "smile"
    console.log(a);
}
greet();

//And the variable without declaring is considered as global

//so we use strict mode in javascript through which no variable is used without declaring.

//Local Scope :

 a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
console.log(a + b);

//in above code 'a' is global scope whereas 'b' is local scope hence and b can be accessed only inside the function and outside it will give error.

// program showing block-scoped concept
// global variable
 a = 'Hello';

function greet() {

    // local variable
    let b = 'World';

    console.log(a + ' ' + b);

    if (b == 'World') {

        // block-scoped variable
        let c = 'hello';

        console.log(a + ' ' + b + ' ' + c);
    }

    // variable c cannot be accessed here
    console.log(a + ' ' + b + ' ' + c);
}

greet();