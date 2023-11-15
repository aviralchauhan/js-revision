// singleton
// object.create

const mySym=Symbol("key1"); // symbol declaration

const myObj={
    name:"aviral",
    "fullname":"aviral chauhan",
    [mySym]:123,
    age:23,
    location:"dehradun",
    isLoggedIn:false,
    loggedDays:["monday","saturday"],
}

// accessing object 
console.log(myObj.name);
console.log(myObj["name"]);// best way to access object property
console.log(myObj["fullname"]); 
console.log(myObj[mySym]); // accessing symbol property

