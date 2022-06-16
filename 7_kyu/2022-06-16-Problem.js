// 7 Kyu Problem - June 16th 2022
// Greet Me

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"
var greet = function(name) {
    let revised = name.split("").map((e, i) => {
          return i === 0 ? e.toUpperCase() : e.toLowerCase()
          }).join("")
    return `Hello ${revised}!`
  };
  
// Alternative Solution
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}
var greet = function(name) {
return "Hello " + name.capitalize() + "!";
};
// Alternative Solution
var greet = function(name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
  };
// Alternative Solution
var greet = function(name) {
    return "Hello " + name.substring(0,1).toUpperCase() + name.slice(1).toLowerCase()+"!";
};