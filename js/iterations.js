// for loop

for (let i = 0; i < 10; i++) {
    // console.log("hello " + i);
    // const element = array[index];
    
}

const myArr=["batman","aviral","superman","hulk"];
for(let i=0; i<myArr.length; i++){
    // console.log(myArr[i]);
}

//break and continue 

// do while and while loop same as in other languages



//higher order loops
// for of loop


const arr=[1,2,3,4,5,6,7]
for (const num of arr){
    // console.log(num);
}

const greetings="hello how are you?"
for(const greet of greetings){
    // console.log(greet)
}


// maps 

const map1=new Map()

map1.set("IN","India")
map1.set("Fr","france")
map1.set("It","Italy")

for (const [key,value] of map1){
    // console.log(key+" = "+value)
} 

// for of loop cannot be used to iterate over objects

// for in loop

const myObj={
    game1:"NFS",
    game2:"GTA"
}

for(const key in myObj){
    // console.log(`${key} = > ${myObj[key]}`)
}

const pro=["js","cpp" , "py", "java"]

for (const key in pro){
    // console.log(key) // this will print the index(keys) of array
    // console.log(pro[key]) // this will print the values of array
}

//maps cannot be iterated through for in
// learn maps vs objects




// for each
// does'nt return anything

// const coding=["js","cpp" , "py", "java"]

// coding.forEach(function (element){
//     console.log(element)
// })


const myNums=[1,2,3,4,5,6,7,8,9,10];
// const newNums=myNums.filter( (num) => num > 4)
// console.log(newNums)

const newNums=[]
myNums.forEach ( ( num) => {
    if( num >4 ){
        newNums.push( num);    
    }
})

console.log(newNums)