const name="Ahmad Hamed Alqaisi";

function composeFuntion(...fns){
    return function(data){
        return fns.reduceRight((acc,fn)=>fn(acc),data)
        }
}

const fullName="Ahmad Hamed Alqaisi";

/*
We will use composition to create a function that converts a full name into a name that looks like url (firstname-secondname-lastname)
*/

function split(fullName){
    return fullName.split(" ")
}
/*
we will use this function to make an array from a fullname.
*/

function lowerCase(fullName){
  return fullName.map(name=>name.toLowerCase());
}

function join(fullName){
    return fullName.join("-");
}
/*
we will use this function to combine array items into one string.
*/

composeFuntion(join,lowerCase,split)(name); // will return 'ahmad-hamed-alqaisi'
