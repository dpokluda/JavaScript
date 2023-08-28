import User from "./user";
console.log("JavaScript is running on Simple Test index.html page.");

var rootElement = document.getElementById("root");
if (rootElement) {
  const tsUser = new User("David");
  rootElement.innerText = tsUser.greeting();
}
