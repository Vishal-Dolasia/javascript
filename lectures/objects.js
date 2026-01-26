/* Singleton */
// Object.create


/* object literals */
const mySym = Symbol("key1")

const jsuser = {
    name : "Hitesh",
    [mySym]:"mykey2",
    age: 18,
    location: "Jaipur",
    email: "vishald@gmail.com",
    isLoggedIn: false,
    LastLoginDays:["Monday","sat"]
}
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser);



/* Object.freeze(jsuser) */









const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj3 = {obj1 , obj2}
// console.log(obj3);

// output
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4);



const course = {
    course : "js in hindi",
    price : "999",
    course_instructor : "vishal"
}

/*  one way */
console.log( course.course_instructor)

/* another way */

const {course_instructor:instructor} = course
console.log(instructor)





 
