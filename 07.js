// Q61
// Write a function with default parameter values.

// function  add (a=10 , b= 15){
//     return   a + b; 
// }
// console.log(add(2,3))
// console.log(add(2))
// console.log(add())

// Q62
// Write a function that accepts a variable number of arguments using rest parameters.
// let Sum = 0;
// function sumOfAll(...nums){
//     for(let num of nums){
        // Sum += num
//     }

//     return Sum;
     
// }
// console.log(sumOfAll(10,10,10,20))

// Q63
// Write a pure function that does not modify its input.

// function doubleArray(arr){
//      return arr.map(num => num * 2)
    

// }

// let num  = [1,2,3,4,5];
// console.log(doubleArray(num))

// Q64
// Write a higher-order function that takes a function as an argument.
// function greet(name){
//     return "Hello " + name
// } 


// Q65
// // Write a function that returns another function (closure).

// function counter (){
//      let count = 0;

//      return function(){
//         count ++;
//        return count;
//     }
// }

// const c = counter();
// console.log(c());
// console.log(c())

// Q66
// Use a closure to create a counter with increment and reset methods.

// function counter(){
//    let count = 0;
// return{
//      increament: function(){
//          count ++;
//          return count;

//      },
//      reset: function(){
//         count = 0;
//         return count;
//      }

// }
// }

// const c = counter();
// console.log(c.increament());
// console.log(c.increament())
// console.log(c.reset());
// console.log(c.increament())   

// Q67
// Write a recursive function to calculate factorial.

// function factorial(n){
//     if(n===0  || n === 1) return 1;
//     return n * factorial(n-1);
// }

// console.log(factorial(4))


// Q68
// Write a recursive function to compute the nth Fibonacci number.
// function fibonacci(n){

//      if (n===0) return 0
//      if (n ===1) return 1
//      return    fibonacci(n-1 )  +  fibonacci(n-2);

// }

// console.log(fibonacci(6)) 
// console.log(fibonacci(10))

// Q69
// Write a memoized version of an expensive function.
// const memo = { };
// function expansiveFunction(n){
//    if(memo[n]){
//         console.log("From cashe");
//         return memo[n];
//    }else
//    console.log("Calculated");
//    let result = n * 2;

//    memo[n] = result;
//    return result;
// }

// console.log(expansiveFunction(2));
// console.log(expansiveFunction(5));
// console.log(expansiveFunction(2));

// lQ70
// Create an IIFE (Immediately Invoked Function Expression) and explain when to use it.
let LIFE = function greet() {
    console.log("IIFE executed");
};

LIFE(); // call