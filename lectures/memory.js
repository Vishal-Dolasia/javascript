// stack (Primitive)  && heap (Non-Primitive)
let a = 10
let b = a
a = 11
console.log(a);
console.log(b);

// copy is  used Here
/******************/


//** refernece */
let obj1   = { 
    email:"V"
}
let obj2 = obj1 

obj2.email = "change"

console.log(obj1.email);
console.log(obj2.email);
