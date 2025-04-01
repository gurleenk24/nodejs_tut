// console.log("server file is running!!!!");

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

// A callback function is a function that is passed 
// as an argument to another function and is executed
// later, usually after some operation completes.
// In JavaScript (and many other languages), callbacks 
// are used for handling asynchronous operations, 
// event listeners, and function execution control.


function callback(){
    console.log("Addition is successfully done!");
}

const add = function(a, b, callback){

    process.stdout.write("Adding");

    let dots = "";
    let cnt = 0;

    let interval = setInterval(()=>{
        dots += ".";
        process.stdout.write(".");
        cnt++;

        if(cnt === 3){
           clearInterval(interval);

            setTimeout(()=>{
                let ans = a+b;
                console.log("\nResult is : " + ans);
                callback();
            },500);
        }
   } ,500);

};

add(4,5,callback);
