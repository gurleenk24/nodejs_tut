console.log("Hellllllloooooooo!!!!!!!");

// console.log("server file is running!!!!");

/* ********************************************************************************************** */
/* LEARNING NUMBER OF WAYS TO WRITE FUNCTIONS */

// function add(a,b){
//     return a+b;
// }

// var add = function(a,b){
//     return a+b;
// }

// var add = (a,b) => { return a+b;}

// var add = (a,b) => a+b;

// var ans = add(2,5);
// console.log(ans);

// (function(){
//     console.log("Hello world");
// })();



/* ********************************************************************************************* */
/*LEARNING CALLBACK FUNCTIONS */

// A callback function is a function that is passed 
// as an argument to another function and is executed
// later, usually after some operation completes.
// In JavaScript (and many other languages), callbacks 
// are used for handling asynchronous operations, 
// event listeners, and function execution control.


// function callback(){
//     console.log("Addition is successfully done!");
// }

// const add = function(a, b, callback){

//     process.stdout.write("Adding");

//     let dots = "";
//     let cnt = 0;

//     let interval = setInterval(()=>{
//         dots += ".";
//         process.stdout.write(".");
//         cnt++;

//         if(cnt === 3){
//            clearInterval(interval);

//             setTimeout(()=>{
//                 let ans = a+b;
//                 console.log("\nResult is : " + ans);
//                 callback();
//             },500);
//         }
//    } ,500);

// };

// add(4,5,callback);



/* ******************************************************************************************* */
/* LEARNING FUNCTIONALITIES OF NODEJS */

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n', ()=> console.log("file is created!"))




/* ******************************************************************************************* */
/* LEARNING HOW TO IMPORT */

// const notes = require('./notes.js');
// console.log("Server file is available");

// var age = notes.age;
// var ans = notes.addNumber(age + 18, 10);
// console.log(age);
// console.log(ans);



/* ******************************************************************************************* */
/* LEARNING LOADASH : A JS UTILITY LIBRARY */

// const notes = require('./notes.js');
// var _ = require('lodash');

// var arr = ["person", "person", 1,2,3,1,4, 'name', 'age', '2'];
// var filtered = _.uniq(arr);
// console.log(filtered);

// app.post('/person', (req, res) => {
//   const data = req.body;  // getting the data from the request body
//   // create a new Person document using Mongoose model
//   const newPerson = new Person(data); // to avoid all the things down there we directly pass data to it!
  
//   // we're using the async & await instead of callback
//   newPerson.save((err, savedPerson) => {
//     if (err) {
//       console.log("Error saving the person :/", err);
//       res.status(500).json({ error: "Internal Server Error" });
//     } else {
//       console.log("Person saved successfully");
//       res.status(200).json(savedPerson);
//     }
//   })
// })



// {
    // "name": "Alice",
    // "age": 28,
    // "work": "chef",
    // "mobile": "123-456-7890",
    // "email": "alice@example.com",
    // "address": "123 Main St. City",
    // "salary": 60000
// }