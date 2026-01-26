// console.log("V")
// console.log("i")
// console.log("s")
// console.log("H")
// console.log("a")
// console.log("l")



/* to print this multiple times is a headache */


/* so we have functions */

function saymyname(){
    console.log("V");
    console.log("i");
    console.log("s");
    console.log("H");
    console.log("a");
    console.log("l");
}
// saymyname --> refernce and ()--> for execution
// saymyname()
// saymyname()
// saymyname()



// function addtwono(num1,num2){
//     console.log(num1+num2);
// }

// addtwono(2,3);


/* 

function addtwono(num1,num2){
    console.log(num1+num2);
}


here num1 and num2 are parameters



and 
addtwono(2,3);

here 2 and 3 are arguments


*/



function addtwono(num1,num2){
    let result = num1 + num2;
    return result;
}

const result = addtwono(2,3);
console.log(result)
