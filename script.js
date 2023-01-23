// 1-Execution Context 
function printName(){
    return 'Ahmad Alqaisi';
}
function findName(){
    return printName();
}
function sayMyName(){
    return findName();
}
//console.log(sayMyName());

// End of Execution Context

// 2-Lexical Enviroment
 /* Lexical means at compile time,Where is the code written? */

function findName2(){
    function a(){

    }
    return printName();
    /* function a is lexically inside the findName3 2 function */
    
    /*
        In javascript every time we have a function, it creates a new world for us inside of that function.
        Execution context tells us which lexical environment is currently running.
        
        In Js,our lexical scope (available data + variables where the function was defined) determines our 
        available variables. Not where the function is called (dynamic scope). 
    */

}
// End of Lexical Enviroment

// 3-Hoisting
/*console.log("1-------")
console.log(teddy);
var teddy="bear";
console.log("2-------")
console.log(sing());
 // function declaration
function sing(){//Hoisted
    console.log("ohhh la la la");
}
(function sing2(){// Not hoisted because ther is a () before the function keyword
    console.log("ohhh la la la");
})
 // function expression
var sing2=function(){
    console.log("uhhh la la la");
}*/
    /* Hoisting is the behavior of moving the variables or function declarations
    to the top of their respective.during the creation phase of our global execution context,
    Javascript engine allocates memory for the variables and functions that it sees 
    in your code before it executes it. (just if js sees at first var or function keyword)

    variables are partially hoisted, we hoist the variable, but not the right side,not the actual value
    we just assign it undeffined.Functions are fully hoisted that means the function declaration was 
    during the creation phase, assigned a location and memory

    */

    // var a=10;
    // function b(){
    //     console.log(a);
    //     var a=20;
    // }
    // b()

// End of Hoisting

// 4-Function Invocation/Call/Execution

var canada=function(){
    console.log("cold");
}//function expression => function defined at runtime when we actually run
 // the function or call the function or execute or evoke the function.

function india(){
    console.log("warm");
}//function declaration => function gets definde at parse time,when the compiler
 // initially looks at the code and starts hoisting and allocating memory.

// End of Function Invocation

// 5-Arguments Keyword

function marry(person1,person2){
    //arguments is not an array,it looks like an array but we can't used some
    // of array's methods on it,so we used Array.from() to convert arguments into array form
    console.log(arguments);
    console.log(Array.from(arguments));
    return `${person1} is now married to ${person2}.`;
}
//marry("Tim","Tina");

function marry2(...args){
    const [person1,person2]=args;
    console.log(args);
    console.log(Array.from(arguments));
    return `${person1} is now married to ${person2}.`;
}
//marry2("Tim","Tina");

// End of Arguments Keyword

// 6-Scope Chain

function sayMyName2(){
    var a='a';
    console.log(a);
    return function findName2(){
        var b='b';
        console.log(a,b);
        return function printName2(){
            var c='c';
            console.log(a,b,c);
            return 'Ahmad Alqaisi';
        }
    }
}
///sayMyName2()()();
// End of Scope Chain

// 7-This Keyword

    // this is the object that the function is a property of,this keyword is dynamically scoped

    /* When the global execution context starts during the creation phase
       we create the global object in this, In this case,The window object
       is our global object, This refers to what ever to the left of the dot. */

    const obj={
        name:"Veronica",
        sing(){
            return('lalala '+this.name);
        },
        singAgain(){
            return(this.sing()+"!");
        }
    }
    //obj.sing();
    

    //1: this gives methods access to their object
    //2: using this we can execute the same code for multiple objects

    function importantPerson(){
        console.log(this.name);
    }
    const name='Sunny';
    const obj1={
        name:'Cassy',
        importantPerson
    }
    const obj2={
        name:'Jacob',
        importantPerson
    }
    //importantPerson();
    const obj3={
        name:"Billy",
        sing(){
            console.log("a",this);
            var anotherFunc=()=>{
                console.log("b",this);
            }
            anotherFunc();
        }
    }
// End of This Keyword

// 8-Call , Apply , Bind
const wizard={
    name:"Merlin",
    health:75,
    heal(num1,num2){
        this.health+=num1+num2;
    }
}
const archer={
    name:"Robin Hood",
    health:30,
}
wizard.heal.call(archer,50,30);
wizard.heal.apply(archer,[50,30]);
archer.heal=wizard.heal.bind(archer,100,30)
    /* call,apply execute function from an object and make it refers to another object,
       the different between call and apply that apply takes array of args,
       we use bind to give us new function refer to a certain object without execute it immediatly */ 
    
var B={
    name:'Jay',
    say(){console.log(this)}
};
var C={
    name:"Jay",
    say(){return function(){console.log(this)}}
};
var D={
    name:"Jay",
    say(){return ()=>console.log(this)}
};
// End Call , Apply , Bind

/* Context vs. Scope
    
    Scope means what is the variable acess of a function when it is invoked,What is in the variable environment.

    Context,is more about object based context,says what is the value of the this keyword,which is a reference to the object 
    that owns that current executing code

    Context is most often determined by how a function is invoked with the value of this keyword,
    And scope refers to the visibility of variables
*/

// 9-Types in JS

/*
    Primitive Types
    --------------------
    1-Numbers
    2-Boolean
    3-String
    4-Undefined
    5-Null
    6-Sumbol
    7-Object

    Non-Primitive Types
    --------------------
    1-typeof {}
    2-typeof []
    3-typeof function(){}


    Primitive Type: It's a data that only represents a single value,a variable of a primitive type
    --------------  directly contains the value of that type.
    
    Non-Primitive Type: does not contain the value directly,It has a reference similar to a pointer to
    ------------------  somewhere in memory that object is held.

*/

// End of Types in js

// 10-Type Coercion

    /*
        It's something like this 1=="1",one equals to string one,and that equals to true
        Type coercion means that when the operands to left and to right of the operator(==) are different types,one 
        of them will be converted into an equivalent value by the javascript engine
    */

// End of Type Coercion

// 11-Functions

    /* 
        Function is a special type of object, It's a callable object where we have code that can be invoked

        
        Functions in Js are first class citizens:
        -----------------------------------

        1-Functions can be assigned to a variables and properties of objects.
            ex: var a=function b(){return "Test"};
        
        2-Functions can be passed as arguments into another functions
            ex: function a(fn){fn()};
            --- a(function(){console.log("hi there")});

        3-Functions can be returned as a value from other functions
            ex: function(){return ()=>console.log("hi there")};
            ---


        Higher Order Functions:
        -----------------------
        HOF are simply a function that can take a function as an argument 
        or a function that returns another function.

        function letAdamLogin(){
            let array=[];
            for(let i=0;i<1000000;i++){
                array.push(i);
            }
            return 'Access Granted to Adam';
        }

        function letEvaLogin(){
            let array=[];
            for(let i=0;i<1000000;i++){
                array.push(i);
            }
            return 'Access Granted to Eva';
        }

        We can make this code more easier and to not repeat our selves using HOF

        function authenticate(verify){
            let array=[];
            for(let i=0;i<verify;i++){
                array.push();
            }
            return true;
        }
        const giveAccessTo=(name)=>{
            return `Access Granted to ${name}`
        }
        function letPerson(person,fn){
            // What data to use +function.
            if(person.level==="admin"){
                fn(500000)
            }else if(person.level==="user"){
                fn(100000);
            }
            return giveAccessTo(person.name)
        }


        Closure:
        --------
        is a combination of function and the lexical enviroment from which it was declared,Closures allow
        a functions to access variables from an enclosing scope or environment,even after it leaves the scope
        in which it was declared.
        When the outerFunction return another function it got popped of the stack,normally when function popped out the stack
        it's variable environment got deleted by garbage collector,but in closure we keep the variable environment in the memory heap(just if the inner functions are using them) so it can be accessed by 
        the inner function because ther is a function referencing to the variable environment.
        The JavaScript engine will make sure that the function has access to all of the variables outside of the function with the closure box.
        So when function(has been inside of another functions) is refrecing to a variable,the javascript engine will look into the variable environment
        and then in the global environment and after that the closure box. 
        ex:
        ---
        const mulBy2=x=>(num=>x*num)(2);
        const countRuns=function(func){
    let i=0;
    let result=undefined;
    return function(...args){
        i++;
        console.log(`You run the function ${i} times`)
        if(result)
            console.log(`previous result is ${result}`);
        result=func(...args);
        console.log(`current result is ${result}`);
        
        }
    }
    const newMulBy2=countRuns(mulBy2);
    newMulBy2(10);
    newMulBy2(11)

    Clouser's Benefits:
    -------------------

    1-Memory efficient:

    function heavyDuty(index){
        const bigArray=new Array(7000).fill(":)");
        return bigArray[index];
    }
    heavyDuty2=(()=>{
        const bigArray=new Array(7000).fill(":) ");
        return function(index){
            return bigArray[index]+index;
        }
    })()


    2-Encapsulation

    const makeNuclearButton=()=>{
        let timeWithoutDestruction=0;
        const passTime=()=>timeWithoutDestruction++;
        const totalPeaceTime=()=>timeWithoutDestruction
        const launch=()=>{
            timeWithoutDestruction=-1;
            return "Boooom!";
        };
        setInterval(passTime,1000);
        return {
            launch,
            totalPeaceTime
        }
    }
    */

// End of Functions

// Prototypal Inheritance

    /**
        Inheritance is an object getting access to the properties and methods of another object,
        As an example,the array object gets access to the properties and methods of the object in js.
        
        The facts that objects can share prototypes means that you can have objects with properties that are
        pointing to the same place in memory,thus being more efficient
    */

// End of Prototypal Inheritance

// 12-Constructor Functions
    /*
        function elf(name,weapon){
            this.name=name;
            this.weapon=weapon;
        }
    */
// End of Constructor Functions

/*

        Pillars of Object oriented:
        ---------------------------
        1-Abstraction: is used to hide background details or any unnecessary implementation about the data so that users only see the required information. 

        2-Encapulation: the bundling of data, along with the methods that operate on that data, into a single unit
        
        3-Polymorphism: the ability of a message to be displayed in more than one form.Polymorphism allows us to perform a single action in different ways. 
        
        4-Inheritance: new class is created from an existing class.

*/

/* Important

        Make your code:
        ---------------
        1-Clear + understandable
        2-Easy to Extend
        3-Easy to Maintain
        4-Memory Efficient
        5-DRY

*/

// Functional Programming
/*

    The Main Pillar of functional programming is Pure Functions
                                                 --------------
    The idea here is that ther's a seperation between data of a program and the behavior of a programm,And
    all object created in functional programming are immutable(once something is created,it can not be changed).
/*
    Pure Functions:
    ---------------
    A function has to always return the same output,given the same input,
    And the function cannot modify anything outside of itself(no side effects).

    
    --Side effects:what does the function modify outside of itself.

    --Referential Transparency:if the input are the same, It's always going to give me the same output.
    
    The idea with pure functions is that it makes functions very easy to test,compose and 
    it avoids a lot of bugs because we have no mutatuins,no shared state, We have these predictable functions that minimize the bugs in our code.

    The goal of functional programming is not to make everything pure functions,the goal is to minmize side effects,
    The idea is to organize your code where there is a specific part that has side effects,But when you have a bug, you know 
    right away to go to that spot, because that's where the side effects are happening,The rest of your code are just pure functions.

    Purity is more of a confidence level,It can not be one hundred percent.
    Side effects & mutability is not necessarily bad,But the goal is to organize your code in a way so that you isolate 
    these side effects, these database calls,API calls,input and output to a certain location in your program
    so that your code becomes predictable and easier to bug

    Perfect Function:
    -----------------
    1-Has one task
    2-Return statement
    3-Pure
    4-No shared state
    5-Immutable State
    6-Composable
    7-Predictable


    Idempotence:
    ------------
    The idea of idemptence is a function that always returns or does what we epected to do
    
    function notGood(num){
        return Math.abs(Math.abs(num));
    }

    Imperative vs Declarative:
    -------------------------

    1-Imperative: is code that tells the machine what to do and how to do it.

    2-Declarative: tells it what to do and what should happen,It does not tell the computer how to do things.

    Example of Imperative vs Declarative:
    -------------------------------------
    The idea of foor loops where we have this structure(imperative)
        for(let i=0;i<5;i++){
            console.log(i);
        } Here,We tell the programm how many times it should loop and we tell it to increase 'i' every loop
    To make it declarative
        [1,2,3,4,5].forEach(item=>console.log(item)); Here,we did not tell the programm what to do or how to do it.


    
    Immutability:
    -------------
    Means not changing the data,not changing the state,The idea is not changing the state, but instead making copies of the state
    and  returning a new state every time

    Closure:
    --------
    clouseres in javascript are a mechanism for containing some sort of state, We create a clouser
    whenever a function accesses a variable defined outside of the immediate function scope, That is the scope of the parent.
    Clousures only make a function impure if we modified the closed over variable


    Currying:
    ---------
    It is the translating the evaluation of a functions that takes multiple arguments
    into evaluating a sequence of functions each with a single argument.

    const multiply=(a,b)=>a*b;
    -------------------------
    const multiply=a=>b=>a*b;

    Partial Application:
    --------------------
    It's a process of producing a function with a smaller number of parameters.

    const multiply=(a,b,c)=>a*b*c;

    const partialMultiplyBy5=(a)=>(b,c)=>a*b*c;
    partialMultiplt(5);

    const partialMultiplyBy7=multiply.bind(null,7);

    Partial is expects to take all or rest of argument, but Currying expects one argument at a time.

    Memoization ~~~ Cashing:
    ------------------------
    Caching is a way to save values so that you can use them later.

    Memoization is a specific form of caching that we will talk about because we use it a lot 
    with dynamic programming


    Compose:
    --------
    Composition is the idea that any sort of data transformation that we do should be obvious.
    
    Composibility is a system design princeple that deals with this relationship of components.

    const compose=(fn1,fn2,fn3)=>data=>fn1(fn2(fn3(data)));
    const pipe=(fn1,fn2,fn3)=>data=>fn3(fn2(fn1(data)));

    function composeFunction(...fns){
        return function(data){
            return fns.reduceRight((acc,fn)=>fn(acc),data)
        }
    }
    const composeFunction2=(...fns)=>data=>fns.reduceRight((acc,fn)=>fn(acc),data)


    Arity:
    ------
    It's mean the number of arguments that function takes

*/


function multiplyByx(x){
    return function(num){
        return x*num;
    }
}
function log(fun){
    let i=undefined;
    return function(...data){
        if(i!=undefined)
            console.log(`previous result is: ${i}`);
        i=fun(...data);
        console.log(`current result is: ${i}`);
        return i;
    }
}
const composeFunction2=(...fns)=>data=>fns.reduceRight((acc,fn)=>fn(acc),data);
const mulBy2=composeFunction2(log,multiplyByx)(2);

const ahmad={"my name":"is","Ahmad":"And","I'am":"developer"};
const getEntries=obj=>Object.entries(obj);
const join=arr=>arr.join(" ");
const split=text=>text.split(",")


Array.prototype.reduce2=function(func,initial=0){
    let acc=initial;
    for(let i=0;i<this.length;i++){
        acc=func(acc,this[i],i);
    }
    return acc;
}
Array.prototype.map2=function(func){
    const newArray=[];
    for(let i=0;i<this.length;i++){
        newArray[i]=func(this[i],i,this);
    }
    return newArray;
}

// Data Structures

/*

    A data structure is a collection of values.
    The values can have relationships among them, and they can have functions apply to them.
    Each one is different in what it can do and what it is best used for.
    A data structure is simply a file cabinet of different types.
    Arrays and Objects in Javascript are each a form of a data structure that allows us to store information.
    Based on different senarios, data needs to be stored in a specific format.

    Algorithms are the steps or processes we put into place to manipulate these collection of values.

    Data Structures + Algorithms = Programs

*/