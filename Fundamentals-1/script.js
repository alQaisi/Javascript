let js="Javascript Fundamentals";

console.log(40+8+23-10);

let firstName="Ahmad";
console.log("Ahmad");

// What is a value??

/*

A value is basically the smallest unit of information in Javascript
we can store values in variables which means Declaration
                                             -----------
*/
let job1='programmer';
let job2="teacher";

let country="Jordan",continent="Asia",population=11*10**6;
console.log("Country:",country);
console.log("Continent:",continent);
console.log("Population:",population);

// Data Types

/*

In javascript, every value is either an object or a primitive value

*/

// Primitive Values:

/*

1-Number: Floating point numbers, used for decimals and integers
---------

2-String:Sequence of characters, used for text
---------

3-Boolean:Logical type that can only be true or false, used for taking decisions
----------

4-Undefined:Value taken by a variable that is not yet defined ('empty value')
------------

5-Null:Also means 'empty value'
-------

6-Symboll:Value that is unique and cannot be changed
----------

7-BigIn:Larger integers than the number type can hold
--------

*/

// Javascript has dynamic typing: We do not have to manually define the data type
// ------------------------------ of the value stored in a variable. Instead, data types are determined automatically.

// In Javascript, value has type,NOT variable!

let javascriptIsFun=true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof "Ahmad");

javascriptIsFun="YES!";
console.log(javascriptIsFun);
console.log(typeof "Ahmad");

let year;
console.log(year);
console.log(typeof year)

year=1999;
console.log(typeof year);

console.log(typeof null)

/*

Let vs Var vs Const
-------------------

-Const is used for storing a variable that will not changed

- Both Let & Var can store a vairable and change it or re-assign it

*/