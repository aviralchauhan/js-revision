// immediately invoked functions expression
// study why iife is used?
// IIFE always end with a semicolon
//named iife
(function chai(){
    console.log("Im an IIFE function")
})();

// simple/unnamed iife
( ()=>{
    console.log("Im an iffe function with arrow functions");
})();
