const user={
    username:"aviral",
    price:999,

    welcomeMessage:function(){

        console.log(`${this.username}, welcome to the page`);
    }
}
// user.welcomeMessage();
// user.username="suhani";
// user.welcomeMessage();


// const user1=function (){
//     console.log("user1")
//     console.log(this);
// }
// user1();

// function user2(){
//     console.log("user2")
//     console.log(this);
// }
// user2();

// const user3=()=>{
//     console.log("user3")
//     console.log(this);
// }
// user3();


// ***************learn more about this **********************



// arrow function'

const add=(a,b)=>{
    return a+b;  // explicit return
}

add(2,3);

const add2=(a,b) => (a+b)  // implicit return

add2(2,3);
