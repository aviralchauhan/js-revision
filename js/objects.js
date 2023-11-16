// singleton
// object.create

// const mySym=Symbol("key1"); // symbol declaration

// const myObj={
//     name:"aviral",
//     "fullname":"aviral chauhan",
//     [mySym]:123, // try to use symbol property without square brackets and with square brackets
//     age:23,
//     location:"dehradun",
//     isLoggedIn:false,
//     loggedDays:["monday","saturday"],
// }

// accessing object 
// console.log(myObj.name);
// console.log(myObj["name"]);// best way to access object property
// console.log(myObj["fullname"]); 
// console.log(myObj[mySym]); // accessing symbol property

// myObj["location"]="delhi" // to change object property 
// console.log(myObj);
// Object.freeze(myObj); // freeze object (now values can't be changed)

// myObj.greeting= function(){
//     console.log("hello");
    
// }
// myObj.greeting();



// const tinderUser=new Object(); // singleton object
const tinderUser={}; // object literal

tinderUser.name="aviral";
tinderUser.id=123
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

// we can also define object inside another object

// combone two objects

const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"d",5:"e",6:"f"};

// const obj3={...obj1,...obj2} // this is the best practice
// const obj3=Object.assign(obj1,obj2);
const obj4=Object.assign({},obj1,obj2); // {} this is used when there are more then 2 objects  and this {} act as a target object

// console.log(obj3);
// console.log(obj4);

const userData=[
    { id:12,
      email:"lyhxr@example.com",  
    },
    { id:12,
      email:"lyhxr@example.com",  
    },
    { id:12,
      email:"lyhxr@example.com",  
    },
    { id:12,
      email:"lyhxr@example.com",  
    }
]

// console.log(Object.keys(tinderUser)); // to extract all the keys from object
// console.log(Object.values(tinderUser)); // to extract all the values from object
// console.log(Object.entries(tinderUser)); // to extract all the entries from object
// console.log(tinderUser.hasOwnProperty("name")); // to check if the object has the property

//object destructuring

const course={
    courseName:"javascript",
    author:"aviral",
    rating:4.5,
}

const {courseName:name}=course;
console.log(name); // now name variable can be used to access the property courseName