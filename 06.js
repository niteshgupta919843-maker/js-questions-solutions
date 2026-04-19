// Q51
// Check if a number is divisible by both 3 and 5 using if/else.


// let num = 5;
// if(num %  3  ===0 &&  num %5 === 0){
//     console.log("true")
// }else{
//     console.log("false")
// }


// Q52
// Use a switch statement to return the name of a day given a number 1–7.
// function getDay(num) {
//   switch (num) {
//     case 1:
//       return "Sunday";
//     case 2:
//       return "Monday";
//     case 3:
//       return "Tuesday";
//     case 4:
//       return "Wednesday";
//     case 5:
//       return "Thursday";
//     case 6:
//       return "Friday";
//     case 7:
//       return "Saturday";
//     default:
//       return "Invalid day";
//   }
// }

// console.log(getDay(4)); 

// Q53
// Write a function using a ternary operator to return 'adult' or 'minor'.
// function check(age){
//     return age >= 18  ? "adult" : "minor"
// }

// console.log(check(18));


// Q54
// Use short-circuit evaluation (&&, ||) to provide a default value.
// let name = "";
// let finalName = name || "Nitesh";

// console.log(finalName); 

// Q55
// Write a login validator: checks both username and password are non-empty.

// let userName = prompt ("Enter your userName here..");
// let password = prompt("Enter your password here.. ");


// function checkLogin(){
//     if(userName != "" && password != ""){
//         return   "login succesfully"
//     }else{
//         return " userName of Password is Empty"
//     }
// }

// console.log(checkLogin())

// Q56
// Check if a year is a leap year using nested conditionals.

// let year =  prompt("Enter your year ")
// function checkLeapYear(year){
//     if(year % 4 === 0){
//         if(year % 100 === 0){
//             if(year % 400 === 0){
//                 return "Leap year"
//             }else{
//                 return "Not a leap year"
//             }
//         }else{
//             return "Leap year"
//         }
//     }else{
//         return "Not a leap year"
//     }
// }
// console.log(checkLeapYear())

// Q57
// Use nullish coalescing (??) to handle null and undefined gracefully.
// let name = null;
// console.log(name ?? "Nitesh")

// let age = 18;
// console.log(age ?? 20)


// Q58
// Write a function that classifies a triangle as equilateral, isosceles, or scalene.

// function checkTriangle(a,b,c){
//     if(a +b <= c || b +c <= a || c+a<=b){
//         console.log("This is not triangle")
//     }else if( a === b && b === c){
//         console.log("Equilateral")
//     }else if(a ===b || b=== c || c === a){
//         console.log("Isosceles")
//     }else{
//         console.log("Scalene")
//     }
// }

// checkTriangle(1,2,3)


// Q59
// Write a function declaration and a function expression that do the same thing.
// let values =  [10,20,30,40]
// let Sum = 0;
// function getSum(...values){
//     for(val of values){
//        Sum += val;

//     }
//     return Sum
// }
// console.log(getSum(10,20,30))

// let Sum = 0;
// let getSum =  function(...values){
//     for(let val of values){
//         Sum += val
//     }
//     return Sum;
// }
// console.log(getSum(10,20,30))

// Q60
// Write an arrow function that squares a number.

// const squares = (num)=> { return num * num }
// console.log(squares(2));