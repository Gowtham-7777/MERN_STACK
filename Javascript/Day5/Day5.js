// console.log("step 1");
// console.log("step 2");

//async
// setTimeout(() => {
// console.log("step 3");
// },2000);

// async function order(){
//     var data = await "step 3";
//     console.log(data);
// }
// order();

// console.log("step 4");

// fetch method
// old method
// json is also a async method
// fetch("https://dummyjson.com/users").then ((response) =>{
//     console.log();
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log("error");    
// })

// the json data is always in the form of array of objects

var users = [{"id": 1,
      "firstName": "Emily",
      "lastName": "Johnson",
      "maidenName": "Smith",
      "age": 28,"hair": {
        "color": "Brown",
        "type": "Curly"},"address": {
        "address": "626 Main Street",
        "city": "Phoenix",
        "state": "Mississippi",
        "stateCode": "MS",
        "postalCode": "29112",
        "coordinates": [
          "lat : -77.16213",
          "lng: -92.084824"]}},{},{},{}];

// new method  
async function fetchData(){
    try{
        const response =await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log(users[0].address.coordinates[1]);
    }
    catch(error){
        console.log(error);
    }
}
fetchData();