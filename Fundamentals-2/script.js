'use strict';

// strict mode will fire an error if we try to assign or use an undefined variable
// strict mode will fire an error if we try to create a variable without using var,let or const
// strict mode intorduces a short list of variable names that are reserved for features that might be added to the language later

let hasDriversLicense=false;
const passTest=true;

// if(passTest)
//     hasDriversLicense=true; 

if(passTest)
    hasDriversLicense=true; 

if(hasDriversLicense)
    console.log('I can drive :D')

// const interface="audio";
// const private=545

// a=10;
// console.log(a);

/* Functions

    Function: is a piece of code that we can reuse over and over in our code. A variable holds value, but a function
    --------- can hold one or more complete lines of code.

    when we run a function, we can pass data to it, and additionally, a funciton can also return data as well

    Parameters: parameters are like variables that are specific only to this function and 
    ----------- they will get defined once we call the function, they represent the input data of the function.
                function parameters are the names listed in the function's definition

    Arguments: function arguments are the real values passed to the function.(Parameters are initialized to the values of the arguments supplied)
    ----------

*/

function logger(){
    console.log("My name is Ahmad");
}
logger(); // this process here of basically using the function is called invoking,running or calling the function.
logger();
logger();

function frituProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice=`Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const myJuice=frituProcessor(5,7);
console.log(frituProcessor(5,4));

// Function Declarations VS. Expressions

const age3=calcAge1(1999);
// const age4=calcAge2(1999); Reference error

function calcAge1(birthYear){ // this is a function declaration
    const age=2023-birthYear;
    return age;
}
const age1=calcAge1(1999);

const calcAge2=function(birthYear){ // this is a function expression (expression produces a value) or an anonymous function, it's just a variable that holds a function
    return 2023-birthYear;
}
const age2=calcAge2(1999);

console.log(age1,age2);

/*

The main practical difference between function declaration and function expression is that we can actually call
function declaration before they are defined in the code (hoisting)

we can use arrow functions in the form of function expression but we cant use them in function declaration

*/

// Arrow Functions

/*

Arrow Function: is a special form of function expression that is shorter and therefore faster to write
---------------

Arrow functions do not get a so-called "this" keyword

*/

const calcAge3=(birthYear)=>2023-birthYear; // If we don't use curly braces in arrow function then the return actually happens implicitly but we must return an expression

const yearsUntilRetirement=birthYear=>{
    const age=2023-birthYear;
    const retirement=60-age;
    return retirement;
}
console.log(yearsUntilRetirement(1999));

const fib=(num)=>num<=1?num:fib(num-1)+fib(num-2);
console.log(fib(10))

// Functions calling other functions

// Arrays -- START

/*
    Array: array is one of javascript data structures, it is like a big container
    ------ into which we can throw variables and then later refrence them.
*/

const friends=['Michael','Steven','Peter'];
console.log(friends);

const years=new Array(1991,1984,2008,2020);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);// the exact size of the array (how many elements in the array)
console.log(friends[friends.length-1]);

friends[2]='Jay';
console.log(friends);

const ahmad=["Ahmad","Alqaisi",2023-1999,"Programmer",friends];
console.log(ahmad);

// Javascript has some built-in functions that we can apply directly on arrays, And these are called methods


    /*  Array Methods:

        1-push: adds elements to the end of an array // it returns the new length of the array
        -------

        2-unshift: adds elements to the beginning of an array // it returns the new length of the array
        ----------

        3-pop: removes elements from the end of an array // it returns the deleted element
        ------

        4-shift: removes elements from the beginning of an array // it returns the deleted element
        --------

        5-indexOf: returns the index of a specific element // it returns -1 if the elements does not exist
        ----------

        6-includes: returns a boolean that indicates if a specific element does exist in an array
        -----------

    */

friends.push("Osama"); // if we console.log this line it will return the new length of the array
console.log(friends);

const newLength=friends.unshift("Mohammad");
console.log(newLength,friends);

console.log(friends.pop());
console.log(friends);

console.log(friends.shift());
console.log(friends);

console.log(friends.indexOf("Jay"));
console.log(friends.indexOf("ahmad"));

console.log(friends.includes("ahmad"));
console.log(friends.includes("Michael"));

// Arrays -- END