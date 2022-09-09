function FIB(){
    const memo={};
    return function fib(n){
        let result;
        if(memo[n])
            return memo[n];
        if(n<=1)
            result=n;
        else
            result=fib(n-1)+fib(n-2);
        memo[n]=result;
        return result;
    }
}

const fib=FIB();
fib(10); // 55aef

/*

A function that saves the past results of fibonacci sequence to make it more efficient when calculating the sequence for different numbers

*/
