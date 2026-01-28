// Immediately Invoked Function Expressions (IIFE) 


/* to stope teh global polution in this */

function chai(){
    console.log(`DB connected`);
}
// chai()

            // |
            // |
            // |
            // |
(function chai(){
    console.log(`DB11 connected`);
})();

/* ; --> is req after one IIFE */

((name)=>{
    console.log(`hello , ${name}`);
})("vishal")
