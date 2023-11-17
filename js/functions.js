// function add(a,b){
//     console.log(a+b);
// }
// add(1,5);

// function addTwo(a,b){
//     return a+b;
// }

// const result =addTwo(4,5)
// console.log(result)

// function name(name){
//     return name;
// }
// name();// if in parameterized function no arguments is passed then by default undefined is passed


// set a default value for a given parameter 

// function fun(name = "sam"){
//     console.log(`hello ${name} how are you`);
// }
// fun();// hello sam how are you
// fun("aviral") // hello aviral how are you


function calculateCartPrice(...num){ // here ... is called as rest operator -> used to pass multiple parameters to a function
    console.log(num);
}
calculateCartPrice(10,50,60); 

const myobj={
    username:"admin",
    price:99
}
function objectHandler(anyObject){
    console.log(`hello this is ${anyObject.username} and its price is ${anyObject.price}`);
}

objectHandler(myobj);

// similarly array can also be passed as arguments