// // // // // // // Q21
// // // // // // // Write a function that counts how many properties an object has.

// // // // // // // function countProperties(obj){
// // // // // // //      return Object.keys(obj).length;
// // // // // // // }

// // // // // // // const user = {
// // // // // // //     name : "Nitesh Gupta",
// // // // // // //     age  : 18,
// // // // // // //     city : "Delhi"
// // // // // // // };

// // // // // // // console.log(countProperties(user));

// // // // // // // Q22
// // // // // // //  Create an array of objects representing students, then find a student by name.
// // // // // // const students = [
// // // // // //     { name: "Nitesh", age: 18 },

// // // // // //     { name: "Rahul", age: 20 },
// // // // // //     { name: "Sunny", age: 19 }
// // // // // // ]

// // // // // // function findByName(name) {
// // // // // //     return students.find(student => student.name === name);
// // // // // // }

// // // // // // console.log(findByName("Rahul"))



// // // // // // Q23
// // // // // // Write a function that deep-copies a simple (non-nested) object.



// // // // // // function deepCopy(obj) {
// // // // // //     return { ...obj };
// // // // // // }

// // // // // // const user = {
// // // // // //     name: "Nitesh",
// // // // // //     age: 18
// // // // // // };

// // // // // // const copy = deepCopy(user);

// // // // // // copy.name = "Rahul";

// // // // // // console.log(user)
// // // // // // console.log(copy)

// // // // // // Q24
// // // // // // Convert an array of key-value pairs into an object.
// // // // // const person = [
// // // // //     ["name", "Nitesh"],
// // // // //     ["age", 18],
// // // // //     ["city", "Delhi"]
// // // // // ]

// // // // // function convertToObject(arr) {
// // // // //     return Object.fromEntries(arr);
// // // // // }

// // // // // const result = convertToObject(person);
// // // // // console.log(result);

// // // // // Q25
// // // // // Use map() to double every number in an array.

// // // // // const numbers = [1, 2, 3, 4, 5];
// // // // // function doubleNumbers(arr) {
// // // // //     return arr.map(num => num * 2)
// // // // // }

// // // // // const result = doubleNumbers(numbers);
// // // // // console.log(result)



// // // // // Q26 
// // // // // Use filter() to return only even numbers from an arra
// // // // const numbers = [1, 2, 3, 4, 5, 6]
// // // // function getEvenNumbers(arr) {
// // // //     return arr.filter(num => num % 2 === 0);
// // // // }

// // // // const result = getEvenNumbers(numbers);
// // // // console.log(result)




// // // // Q27
// // // // Use reduce() to calculate the sum of an array.

// // // const numbers = [1, 2, 3, 4, 5];
// // // function getSum(arr) {
// // //     return arr.reduce((acc, curr) => acc + curr, 0)
// // // }

// // // const result = getSum(numbers)
// // // console.log(result)





// // // Q28
// // // Use find() to return the first number greater than 10.

// // // const numbers = [1, 2 ,3 , 10, 12, 5, 20]
// // // function findGreaterThan10(arr) {
// // //     return arr.find(num => num > 10);
// // // }

// // // const result = findGreaterThan10(numbers)

// // // console.log(result)


// // // Q29
// // // Use some() to check if any element is negative.

// // const numbers = [5, 3, -2, 8]
// // function hasNegative(arr) {

// //     return arr.some(num => num < 0)
// // }

// // const result = hasNegative(numbers)

// // console.log(result)


// // Q30
// // Use every() to check if all elements are positive.

// const numbers = [2, 5, 8, 10]
// function allPositive(arr) {
//     return arr.every(num => num > 0)

// }

// const result = allPositive(numbers)

// console.log(result)