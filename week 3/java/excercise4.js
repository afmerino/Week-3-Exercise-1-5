"use strict"

function Amaris (name, age) {
    console.log (name + age);
}
Amaris (2, 4);

function Merino (month, year) {
    console.log (month * year);
}

Merino (5, 6);

function Loop (start, end) {
    while (start <= end) {
        console.log (start++ );  
    }
}

Loop (1, 7);

var global = 8;
function add (x){
    global += x;
    return console.log("Test run")
}
add (8);

(function (){
    return console.log("Log success")
})();


