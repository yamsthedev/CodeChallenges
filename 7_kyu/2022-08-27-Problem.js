// 7 Kyu Problem - August 27th 2022
// JavaScript class-like objects
// Creating Classes, class is a special function, constructor method 

/*
For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in. It should also allow the name property to be set.

The following is an example of how the final code would be used and what the expected return values should be:

var dog = new Animal('Max', 'dog');
dog.toString(); // should return 'Max is a dog'
dog.type; // should == 'dog'
dog.name; // should == 'Max'
dog.name = 'Lassie'; // should set name to 'Lassie'
*/

//The chief advantage of using prototype is that all the objects will share the same method instead of a new one being created for each instance. You can find a more detailed difference here: https://stackoverflow.com/questions/9772307/declaring-javascript-object-method-in-constructor-function-vs-in-prototype/9772864#9772864
let Animal = function(name, type){
    this.name = name
    this.type = type
}
Animal.prototype.toString = function(){
    return `${this.name} is a ${this.type}`
}

// See alternative w/o prototype
let Animal = function(name, type){
    this.name = name
    this.type = type
    this.toString = function() {
      return `${this.name} is a ${this.type}`
    }
}
let x = new Animal("Max", "dog")
console.log(x.name)
console.log(x.toString())


// Using class function and constructor method
class Animal {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
    toString() {
      return `${this.name} is a ${this.type}`;
    }
  }