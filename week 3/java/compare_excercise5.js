"use strict"


function guess (){
    var secretNumber = Math.floor(Math.random()*11);
    console.log (secretNumber);
    var counter= 0;
    while (counter < 3) {
        var number = prompt("Guess the number 1-10");
        if (number==secretNumber) {
            console.log ("You guessed the number!");
            return;
        }
        if (number==secretNumber) {
            console.log ("")
        }
    counter++;
}    
}

guess();

