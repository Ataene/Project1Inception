const readlineSync = require('readline-sync');


let password = "yourname";
let userName = readlineSync.question('Enter your password? ');

if(password === userName){
    console.log("You got it right");
} else{
    console.log("Sorry, try again.");
}