// 7 Kyu Problem - July 13th 2022
// Get key/value pairs as arrays
// Object.keys(obj), Object.values(obj), for(const values of iterable){}, for(const key in object){}, obj.hasOwnProperty('property')

// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

function keysAndValues(data){
    let keys = Object.keys(data)
    let values = keys.map(e => data[e])
    return [keys, values]
 }

// Alternative Solution 
function keysAndValues(data){
    return [Object.keys(data), Object.values(data)];
}

// Alternative Solution
function keysAndValues(data){
    // TODO: complete
    var keys = [],
        vals = [];
    for (key in data) {
      if(data.hasOwnProperty(key)){
        keys.push(key);
        vals.push(data[key]);
      }
    }
    return [keys, vals];
  }