console.log("Page is loaded!");
var age = 14;
const addNumber = function(a,b){
    return a+b;
}

// if we dont write module.exports thing 
// then the age we have used in our server
//  file will be shown as undefined in the ouput
module.exports = {
    age,
    addNumber
}