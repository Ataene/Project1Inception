const readlineSync = require('readline-sync');

//Entering the Names of the players
let firstName = readlineSync.question('Enter your name please ');
console.log("Hello " + firstName + " welcome to the game!");

let secondName = readlineSync.question('Enter your name please ');
console.log("Hello " + secondName + " welcome to the game!");

//Entering first player scores

let firstScore = readlineSync.question(firstName + ' please enter your score: ');
let addfirstPerson = Math.floor((Math.random()* 100) + 1);
console.log("Your random number is : " + addfirstPerson);

let addfirstScore = Number(Number(firstScore) + Number(addfirstPerson));
console.log("Your total number is : " + (addfirstScore));


//Entering second player scores

let secondScore = readlineSync.question(secondName + ' please enter your score: ');
let addsecondPerson = Math.floor((Math.random()* 100) + 1);
console.log("Your random number is : " + addsecondPerson);

let addsecondScore = Number(Number(secondScore) + Number(addsecondPerson));
console.log("Your total number is : " + (addsecondScore));












if(firstScore > 50 && addfirstPerson > 50 ){

    console.log(`Your score is : ${firstScore + addfirstPerson}`);

} else if (firstScore < 50 && addfirstPerson < 50 ){

    console.log(`Your score is : ${firstScore + addfirstPerson}`);
}

// function firstPerson(){

//     let addfirstPersion = Math.floor((Math.random()* 100) + 1);

//     if(firstScore < addfirstPersion ){
//         console.log("Please enter another number");
//     } else if (addfirstPersion === 50 ){
//         console.log(firstScore + "You passed the obstacle");
//     } else {
//         console.log("Try again");
//     }
// }


