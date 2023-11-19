// if else
// nested if
// ladder if
// single line if else syntax
// switch


// falsy values
// false,0,-0,"",NULL , undefined,NaN, bigInt-> 0n

//truthy values
// "0",'false' , " ", true,{},[],function(){}

// to check whether object is empty or not

const myObj={}

if(Object.keys(myObj).length){
    // console.log("empty");
}


// Nullish coalescing operator (??) : null , undefined

let val1;
val1=null ?? 10;
console.log(val1); // 10


val1=undefined ?? 10;
console.log(val1); //10

val1=10 ?? 15;
console.log(val1); //10

val1=null ?? 10 ?? 20;
console.log(val1)  //10

