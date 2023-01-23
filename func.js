//Functions

//Declaring a Function
function nameOfFunction () {
    // function body   
}

// declaring a function named greet()
function meet() {
    console.log("Hello there");
}

// calling a function
meet();

//Function with Parameters :
// declaring a function
function meet(name) {
    console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
meet(name);

//When a value is passed when declaring a function, it is called parameter. And when the function is called, the value passed is called argument.


//Add Two Numbers
// program to add two numbers using a function
// declaring a function
function add(a, b) {
    console.log(a + b);
}

// calling functions
add(3,4);
add(2,9);

//Notice that you can call a function as many times as you want. You can write one function and then call it multiple times with different arguments.

add(10,15)

//Function Return
//The return statement denotes that the function has ended. Any code after return is not executed.

// declaring a function
function add(a, b) {
    return a + b;
}

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add(number1,number2);

// display the result
console.log("The sum is " + result);

//In the above program, the sum of the numbers is returned by the function using the return statement. And that value is stored in the result variable.

//Benefits of Using a Function
//Function makes the code reusable. You can declare it once and use it multiple times.
//Function makes the program easier as each small task is divided into a function.
//Function increases readability.