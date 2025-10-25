// callback function
//      if the function is passed as an argument to the another function is called callback function 
//      it has no name
//      this can be used as both delcarative or arrow function

// function add(a, b){
//     console.log(a,b());
// }

// add(10, () => {
//     return "Callback Function";
// })
// Schedulers 
//   This are used to schedule the execution of a callback function.
//   setInterval(),setTimeout()

var count = 0;
var setI = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(setI);
}, 6000)
