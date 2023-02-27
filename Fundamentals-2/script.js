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