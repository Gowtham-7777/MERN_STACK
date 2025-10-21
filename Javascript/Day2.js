// == loose equality checks only the value
// === strict equality checks the value and the data type

var a=5;
var b="5";
if(a===b){
    console.log("Equal");
    
}else{
    console.log("Not Equal");
}

// Array
// Array is a collection of elements
// it is a list of different data types
// array can contain more than one data 
//Syntax
// var arr=[];
var arr=[10,20,"Revamp",true];
console.log(arr);
console.log(arr[2]);
console.log(typeof arr[0]);
console.log(arr.length);
arr[2]="Hello";
console.log(arr);
arr[4]=50;
console.log(arr);
// push (add at the End) and unshift (add at the Beginning)
arr.push("World");
console.log(arr);
arr.unshift("Hi");  
console.log(arr);

// pop (remove from the End) and shift (remove from the Beginning)
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

// objects
// objects is a collection of properties each property have unique keys and values can be duplicate
// objects is always enclosed with {} curly brackets
// syntax
// var obj={
//   key1:value1
// };
//To access the object values we have two methods
// 1. Dot Notation
// 2. Bracket Notation ["key value"]

var obj={
    name:"Gowtham",
    age:25,
    city:"Chennai",
    classmates:["revamp","suriya","karthi"],
    things:{mobile:"oneplus",laptop:"dell"}
};
console.log(obj["things"].mobile);

// Modifying the object values
obj.name="Revamp";
console.log(obj["name"]);

// Adding new property to the object
obj.country="India";
console.log(obj);

delete obj.age;
console.log(obj);

//arrow functions
// arrow functions are used to create anonymous functions

// syntax

var data=(a)=>{
    console.log(a);
};
data("Arrow Function");
