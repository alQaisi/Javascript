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

// Operators

const now=2037;
const ageAhmad=now-1999;
const ageMohammad=now-2018;
console.log(ageAhmad,ageMohammad);
console.log(ageAhmad*2,ageAhmad/10,2**3)

const firstName2="Ahmad";
const lastName2="Alqaisi";
const fullName=`${firstName2} ${lastName2}`;//(firstName2+" "+lastName2)
console.log(fullName);

let x=10+5;
x+=10; // x=x+10;
x*=4; // x=x*4;
x++; // x=x+1;
++x; // x=x+1; immediately change


// Comparison Operators

console.log(ageAhmad>ageMohammad);
console.log(ageMohammad>=18);

const isFullAge=ageMohammad>=18;

// Operator Precedence

console.log(now-1991>now-2018) //  subtraction happens before the comparison operator

console.log(25-10-5);

let y;
x=y=25-10-5;
console.log(x,y);

const avgAge=(ageAhmad+ageMohammad)/2
console.log(ageAhmad,ageMohammad,avgAge);


// String & Template Literals

const firstName3="Ahmad";
const job="Programmer";
const birthYear=1999;
const year2=2037;

const ahmad="I'm "+firstName2+', a '+(year2-birthYear)+" years old " +job+"!";
console.log(ahmad);

const ahmadNew=`I'm ${firstName2}, a ${year2-birthYear} years old ${job}!`;
console.log(ahmadNew);

console.log("String with \n\
emultiple\n\
lines");

console.log(`String with
multiple lines
`);

// Taking Decisions / if/else Statements

const age=19;
const isOldEnough=age>=18;

if(isOldEnough){
    console.log("Ahmad can start driving license");
}else{
    const yearsLeft=18-age;
    console.log(`Ahmad can't start driving license. Waith another ${yearsLeft} years.`)
}
let century;
const birthYear2=1999;
if(birthYear2<=2000){
    century=20;
}else{
    century=21;
}
console.log(century);


// Type conversion and coercion

// Type conversion
// ---------------
const inputYear=1999;
console.log(inputYear);
console.log(+inputYear+18);
console.log(Number(inputYear)+18);

console.log(Number("Ahmad"));

console.log(String(23),23);

// Type coercion
// -------------
console.log("I'am "+23+" years old");
console.log("23"-"10"-3);
console.log("23"/"2");

let n="1"+1;
n=n-1;
console.log(n);

// Truthy and Falsy Values

/* Falsy values
   ------------

   1-0
   2-""\''
   3-undefined
   4-null
   5-NaN

*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Ahmad"));
console.log(Boolean(""));
console.log(Boolean({}));

const money=0;
if(money){
    console.log("Dont't spend it all");
}else{
    console.log("You should get a job!");
}

let height;
if(height){
    console.log('Height is defined');
}else{
    console.log('Height is UNDEFINED');
}