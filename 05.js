// Q41
// Use a do...while loop that runs at least once even if condition is false.
// let  i = 10;
// do{
//     console.log(i);
//     i++
// }while(i <= 5);

// Q42
// Write a loop that prints a multiplication table for a given number.
// let num = 10;
// for(let i =1; i<=10; i++){
//     console.log(`${num} x ${i} = ${num * i}`)
// }


// Q43
// Use nested loops to print a 5x5 grid of asterisks.

// for(let i = 1;  i<=5; i++){
//     let row = " ";
//     for(let j =1; j<=5; j++ ){
//         row += "*"
//     }
//     console.log(row)
// }


// Q44
// Write a loop that skips multiples of 3 using continue.
// for(let i =1; i<=16; i++){
//     if(i % 3 ===0){
//         continue
//     }
//     console.log(i)
// };


// Q45
// Write a loop that stops when it finds a specific value using break.
// let num = 10;
// for(let i = 0; i <= num; i++){
//     if(i === 5){
//         break;
//     }
//     console.log(i)
// }

// Q46
// Use a loop to reverse a string character by character.

// let name = "Nitesh";
// for(let i = name.length-1; i>=0; i--){
//     console.log(name[i])
// }

// Q47
// Write a loop that counts how many times a character appears in a string.


// let name = "Nitesh Gupta";
// let count  = 0;
// let char = "a"
// for(let i = 0; i < name.length; i++){
//     if(name[i] === char){
//         count++
//     }
    
// }

// console.log(count);


// Q48
// Implement a basic bubble sort using nested loops.

// let arr = [10, 20, 4, 5, 7, 40];

// for(let i = 0; i < arr.length - 1; i++){
//     for(let j = 0; j < arr.length - 1 - i; j++){
//         if(arr[j] > arr[j + 1]){
         
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log(arr);


// Q49
// Write a function that returns 'positive', 'negative', or 'zero' based on a number.
// function checkNumber(num){
//     if(num > 0){
//         return "positive";
//     } else if(num < 0){
//         return "negative";
//     } else {
//         return "zero";
//     }
// }

// console.log(checkNumber(10));  
// console.log(checkNumber(-5));  
// console.log(checkNumber(0));    

// Q50
// Write a grade calculator: A (90+), B (80+), C (70+), D (60+), F otherwise.

function getGrade(marks){
    if(marks >= 90){
        return "A";
    } else if(marks >= 80){
        return "B";
    } else if(marks >= 70){
        return "C";
    } else if(marks >= 60){
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(95)); 
console.log(getGrade(82))
console.log(getGrade(74))
console.log(getGrade(61))
console.log(getGrade(40))