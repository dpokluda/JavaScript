// Simple
console.log('Hello, World!');

// Variables
console.log(carId); // undefined
var carId = 42; 

// console.log(carId2); // error
let carId2 = 42; 

// closures
let app = (function() {
  let carId = 123;
  let getId = function() {
    return carId;
  };
  return {
    getId: getId
  };
})();
console.log(app.getId());

// JQUEERY
// // import $ from 'jquery';

// let url = "https://dummy.restapiexample.com/api/v1/employees";
// console.log("Calling REST service: " + url);
// let promise = $.get(url);

// promise.then(
//   data => console.log('success: ', data),
//   error => console.log('error: ', error)
// );
