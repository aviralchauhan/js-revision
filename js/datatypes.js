//primative data types

// these datatypes are call by value types

// string
// number
// boolean
// null
// undefined
// object
// bigInt
// symbol
//console.log(typeof null);  null is object
// console.log(typeof undefined) its type is undefined
// console.log(typeof Symbol);

// Non primative data types (reference types)
// array objects functions

// *************************************************************************
// types of memory
// stack ->used in primaitve data types
// heap -> used in non primative data types

// let heros="ironman";
// let marvel=heros;
// marvel="hulk"
// console.log(heros);
// console.log(marvel);

let myObj={
    name:"aviral",
    age:20
}
let anotherObj=myObj;
anotherObj.name="bhuhh"
console.log(myObj);
console.log(anotherObj);