const mulBy=x=>y=>x*y;

const count=(func)=>{
    let i=0;
    return function(...args){
        i++;
        console.log(`Function invoked ${i} times`);
        return func(...args);
    }
}

const mulBy2=count(mulBy(2));

/*

This is an example of how closure works.

In this example I've built a function that takes a function as an argument, the purpose of doing this is to benefit from 
closure to know how many times the function has been invoked.

*/

const person=function(name,age,major){
    const setName=(newName)=>name=newName;
    const setAge=(newAge)=>age=newAge;
    const setMajor=(newMajor)=>major=newMajor;
    const getName=()=>name;
    const getAge=()=>age;
    const getMajor=()=>major;
    const info=()=>`Hi, my name is ${name}, I'm ${age} years old, I work in ${major} field.`;
    return {
        setName,
        setAge,
        setMajor,
        getName,
        getAge,
        getMajor,
        info
    }
}

const ahmad=person("Ahmad",23,"cs");

/*

In this one, we can use closure to encapsulate data

*/
