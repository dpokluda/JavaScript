// import $ from 'jquery';

let url = "https://dummy.restapiexample.com/api/v1/employees";
console.log("Calling REST service: " + url);
let promise = $.get(url);

promise.then(
  data => console.log('success: ', data),
  error => console.log('error: ', error)
);
