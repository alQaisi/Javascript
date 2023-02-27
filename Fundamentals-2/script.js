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

a=10;
console.log(a);