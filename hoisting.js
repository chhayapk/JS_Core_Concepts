//Hoisting

//Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

// using test before declaring
console.log(test);   // undefined
var test;

//Variable Hoisting
//In terms of variables and constants, keyword 'var' is hoisted and 'let' and 'const' does not allow hoisting.




// program to print the text
greet();

function greet() {
    console.log('Hi, there.');
}

//In the above program, the function greet is called before declaring it and the program shows the output. This is due to hoisting.

//Hoisting can cause undesirable outcomes in your program. And it is best to declare variables and functions first before using them and avoid hoisting.

//In the case of variables, it is better to use let than var.