"use strict"

var i = 0;
/*
for (i = 0; i < 51; i++) {
    console.log (i);
}
*/

/*
while (i < 51) {
    console.log (i);
    i += 2;
}
*/

// single line comment


while (i < 101) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log (i + " fizzbuzz");
    }
    else if (i % 3 === 0) {
        console.log (i + " fizz");
    }
    else if (i % 5 === 0){
        console.log (i + " buzz");
    }
   

    i++;
}

