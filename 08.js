// Q71
// Write a function that accepts a callback and calls it after logging a message.
// function myFunction(callback){
//  console.log("function is running") 
//  callback();
// }

// function sayHello(){
//     console.log("Hello from callback")
// }

// myFunction(sayHello);


// Q72
// Pass an anonymous function as a callback to setTimeout.

// setTimeout(function(){
//   console.log("Helli after 3sec")
// } , 3000)


// Q73
// Write a forEach loop using a named callback function.

// function printElement(element) {
//     console.log(element);
// }

// let numbers = [1, 2, 3, 4, 5]
// numbers.forEach(printElement);


// Q74
// Implement your own version of Array.map using a callback.
// function myMap(arr, callback) {
//     let result = []

//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i, arr))
//     }

//     return result;
// }

// function double(x) {
//     return x * 2;
// }
// let numbers = [1, 2, 3, 4, 5];
// let output = myMap(numbers, double);
// console.log(output)



// Q75
// Implement your own version of Array.filter using a callback.
// function myFilter(arr, callback) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }


// function isEven(x) {
//     return x % 2 === 0;
// }


// let numbers = [1, 2, 3, 4, 5];


// let output = myFilter(numbers, isEven);

// console.log(output);


// Q76
// // Write a function that calls a callback with an error or result (Node.js style).

// function myFunction(num, callback) {
//     if (num < 0) {
//         callback("Error: number negative hai", null);
//     } else {
//         callback(null, num * 2)
//     }
// }

// myFunction(5, function(err, result) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// })

// Q77
// Demonstrate callback hell with three nested async callbacks, then discuss the problem.

// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 done");
//         callback(null, "Data from step 1");
//     }, 1000);
// }

// function step2(data, callback) {
//     setTimeout(() => {
//         console.log("Step 2 done with", data);
//         callback(null, "Data from step 2");
//     }, 1000);
// }

// function step3(data, callback) {
//     setTimeout(() => {
//         console.log("Step 3 done with", data);
//         callback(null, "Final result");
//     }, 1000)
// }

// step1(function(err, result1) {
//     if (err) {
//         console.log(err);
//     } else {
//         step2(result1, function(err, result2) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 step3(result2, function(err, result3) {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(result3);
//                     }
//                 })
//             }
//         })
//     }
// })


// Q78
// Use callbacks to simulate an async data fetch with setTimeout.
// function fetchData(callback) {
//     setTimeout(() => {
//         let data = "User data mil gaya";
//         callback(null, data)
//     }, 1000)
// }

// fetchData(function(err, result) {
//     if (err) {
//         console.log("Error:", err);
//     } else {
//         console.log("Data:", result);
//     }
// })


// Q79
// Write a function that accepts a transformation callback and applies it to each item in an array.
// function transformArray(arr, callback) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i]))
//     }

//     return result;
// }

// function square(x) {
//     return x * x;
// }

// let numbers = [1, 2, 3, 4];

// let output = transformArray(numbers, square);

// console.log(output);

// Q80
// Write a retry function that calls a callback up to N times until it succeeds.
// function retry(fn, maxAttempts, finalCallback) {
//     let attempts = 0

//     function attempt() {
//         attempts++

//         fn(function(err, result) {
//             if (!err) {
    
//                 finalCallback(null, result);
//             } else if (attempts < maxAttempts) {
  
//                 console.log("Attempt", attempts, "fail hua... retry kar rahe hain");
//                 attempt();
//             } else {

//                 finalCallback("Failed after " + attempts + " attempts", null);
//             }
//         });
//     }

//     attempt(); 
// }

// function unstableTask(cb) {
//     let success = Math.random() > 0.7;

//     if (success) {
//         cb(null, "Success ho gaya");
//     } else {
//         cb("Error aaya", null);
//     }
// }


// retry(unstableTask, 5, function(err, result) {
//     if (err) {
//         console.log("Final Error:", err)
//     } else {
//         console.log("Final Result:", result);
//     }
// })