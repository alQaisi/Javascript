const usersUrl="https://jsonplaceholder.typicode.com/users";
const postsUrl="https://jsonplaceholder.typicode.com/posts";
const commentsUrl="https://jsonplaceholder.typicode.com/comments";

const urls=[usersUrl,postsUrl,commentsUrl];

async function getData1(){
    
    const [users,posts,comments]=await Promise.all(urls.map(url=>fetch(url).then(res=>res.json())));
    console.log("getData1",{users,posts,comments});
}
// getData1();

async function getData2(){
    const [users,posts,comments]=await Promise.all(urls.map(async url=>{
        const res=await fetch(url);
        return res.json();
    }));
    console.log("getData2",{users,posts,comments});
}
// getData2();

async function getData3(){
    const users=await fetch(usersUrl).then(res=>res.json());
    const posts=await fetch(postsUrl).then(res=>res.json());
    const comments=await fetch(commentsUrl).then(res=>res.json());
    console.log("getData3",{users,posts,comments});
}
// getData3();

function myPromise(item,delay){
    const newPromise=new Promise((res,rej)=>{
        setTimeout(()=>res(item),delay);
    });
    return newPromise;
}

const A=()=>myPromise("Ahmad",1000);
const B=()=>myPromise("Hamed",2000);
const C=()=>myPromise("Alqaisi",3000);

async function parallel(){
    const promises=[A(),B(),C()];
    const [one,two,three]=await Promise.all(promises);
    return(`parallel is done ${one} ${two} ${three}`);
}
async function race(){
    const promises=[A(),B(),C()];
    const one=await Promise.race(promises);
    return `race is done : ${one}`;
}
async function sequence(){
    const one=await A();
    const two=await B();
    const three=await C();
    return `sequence is done ${one} ${two} ${three}`;
}

// sequence().then(console.log);
// parallel().then(console.log);
// race().then(console.log);


// Handle Error in Promises & Async functions

Promise.
    reject("aef").
    then(console.log).
    catch(()=>console.log("Opps !"));

Promise.
    resolve("Testing nested promises")
    .then(response=>{
        Promise.resolve().then(()=>{
            throw new Error("Nested Promise Error")
        }).catch(console.log);
        return "Response :)"
    })
    .then(response=>console.log(response))
    .catch(err=>console.log("err",err));

async function handleAwaitErrors(){
    try{
        await Promise.reject("error")
    }catch(err){
        console.log("Caught it !");
    }
}
handleAwaitErrors();