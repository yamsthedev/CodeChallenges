// 7 Kyu Problem - June 25th 2022
// Building Strings from a Hash

// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

function solution(pairs){
    let ans = ""
    for(let key in pairs){
      ans += `${key} = ${pairs[key]},`
    }
    return ans.slice(0, -1)
}

// Alternative Solution
function solution(pairs){
    return Object.keys(pairs)
      .map(function(k) { return k + ' = ' + pairs[k] })
      .join(',');
  }

// Alternative Solution
function solution(pairs){
    var array = [];
    for (var pair in pairs){
      array.push((pair+' = '+pairs[pair]));
    }
    return array.join(',');
  }