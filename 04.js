// Q31
// Use forEach() to log each element with its index. isme karna kya hai 

// let nums = [10 ,20, 30, 40, 50];
// nums.forEach((element , index) =>{
//   console.log(index ,":" , element)
// })


// Q32
// Use map() and filter() together to get squares of even numbers.
// let nums = [1,2,3,4,5,6,7,8];
// let result = nums
// .filter(num => num % 2 === 0)
// .map (num => num * 2) ;

// console.log(result)

// Q33
// Use reduce() to find the maximum value in an array.
//  let nums = [1,2,4,10,20,6,7,8];
//  let  max  = nums.reduce((a, b )=>{
//       return  a > b ? a : b
//  })
//  console.log(max)




// Q34
// Use flat() to flatten a two-level nested array.

// let arr = [1,2 ,3 , [5] , [10, 20]]
// let flattenArr = arr.flat();
// console.log(flattenArr)

// Q35
// Use findIndex() to locate the position of a specific value.

// let arr =  [ 10 ,20,30,50,60]

//  let findIndex = arr.findIndex(n => n === 30)
//  console.log(findIndex)


// Q36
// Use reduce() to group an array of objects by a property.

// let users = [
//     {name : "Nitesh"  , age : 18 },
//     {name : "Sunny " , age : 19},
//     {name : "Sunil" , age  : 19},
//     {name : "Rahul" , age : 18},
//     {name  : 'Satyam ' , age : 19}

// ]

// let groupByAge = users.reduce((acc , curr)=>{
//     let key = curr.age;

//     if(!acc[key]){
//         acc[key] = []
//     }
//     acc[key].push(curr)
// return acc; 
// }, {}

// )

// console.log(groupByAge)


// Q37
// Print numbers 1 to 20 using a for loop.

// for(let i = 0; i <= 20; i++){
//     console.log(i)
// }

// Q38
// Print all even numbers between 1 and 50 using a while loop.

// for(let i = 0; i<50; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }


// Q39
// Use a for...of loop to iterate over an array of strings.

// let cars = [ "Defender" , "Gwagon" , "BMW" , "Thar"];
// for(let  car of cars ){
//     console.log(car)
// }


// Q40
// Use a for...in loop to iterate over an object's properties.

// let user  = {
//     name : "Nitesh" ,
//     age : 18,
//     city : "Delhi"

// }

// for(let key in user  ){
//     console.log(key ,  user[key])
// }