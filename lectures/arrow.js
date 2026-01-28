const user = { 
    username: "HITESH",
    price: 999,

    welcomemess: function(){
        console.log(`${this.username}, welcome to website`)
    }
}

// user.welcomemess()


// console.log(this); // {} --> no global context



/* but in browser 

console.log(this); ---> this wont be a empty {} as it will have window object

*/


/*******arrow finction *****/


// const chai = function(){
//     let username = "vishal"
//     console.log(username);
// }
// chai()


const chai = () => {
    let username = "vishal"
    console.log(this.username);
    console.log(this);
}
// chai()


/* "this" dont work in arrow function  */




const addtwo = (num1,num2) => {
    return num1+num2;
}

// { } --> we need to  write return



// const addt = (num1,num2)=> num1+num2;
// console.log(addt(1,2))

      /* or */

// const addt = (num1,num2)=> (num1+num2);
// console.log(addt(1,2))





/* for objects  ----> always use()*/
const addt = (num1,num2)=> ({username : "vishal"})

console.log(addt(1,2))




