// // // // // Q11 Flatten a nested array one level deep.

// // // // // let arr = [ 10 ,20 , [30 ,40,] , [1,2,3] ];
// // // // // const  flattendArr = arr.flat();
// // // // // console.log(flattendArr);


// // // // // Q12  Write a function that returns a copy of an array with elements sorted in descending order.

// // // // function sortDescending(arr){
   
// // // // let newArr = [...arr];
// // // // return newArr.sort((a,b)=> b -a)
// // // // };
 
// // // // console.log(sortDescending([10,20,30,40]))

// // // // Q13
// // // // Create an object representing a book with title, author, and year properties.

// // // let book = {
// // //   title : "Mind Hacking ",
// // //   author : "Jhon Hargrave",
// // //   year  : 2016
// // // }

// // // console.log(book)

// // // Q14
// // // Access a property using both dot notation and bracket notation.

// // let person = {
// //     name : "Nitesh",
// //     age : 18,
// //     city : "Delhi"
// // }
// // console.log(person.name)
// // console.log(person["age"])



// // Q15
// // Add a new property to an existing object
// let person = {
//     name : "Nitesh",
//     age : 18,
//     city : "Delhi"
// }

// person.course = "Webdevlopment"
// console.log(person)


// // Q16
// // Delete a property from an object.
//  let person = {
//     name : "Nitesh",
//     age : 18,
//      city : "Delhi"
// }
// delete person.city
// console.log(person)

// Q17
// Write a function that takes an object and returns an array of its keys.

// function getKeys(obj){
//     return Object.keys(obj)
// }

//  let person = {
//     name : "Nitesh",
//     age : 18,
//      city : "Delhi"
// }

// console.log(getKeys(person))




// Q18
// // Write a function that returns an array of all values in an object.

// function getvalues(obj){
//     return Object.values(obj)
// }

//  let person = {
//     name : "Nitesh",
//     age : 18,
//      city : "Delhi"
// }

// console.log(getvalues(person));

// Q19
// Check if a specific key exists in an object.



//  let person = {
//     name : "Nitesh",
//     age : 18,
//      city : "Delhi"
// }
// console.log("age" in person);





// Q20
// Merge two objects into one new object.

//  let person1 = {
//     name : "Nitesh",
//     age : 18,
//      city : "Delhi"
// }

// let person2 = {
//     name2 : "Sunny",
//     age2 : 19,
//     city2 : "Delhi"
// };

// let newObj = {...person1  , ...person2 } ;
// console.log(newObj)