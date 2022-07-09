// 7 Kyu Probelm - July 8th 2022
// Flatten
// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

var flatten = function(array){
    return [].concat(...array)
}

// Alternative Solution
var flatten = function (array){
    return array.reduce((a,c) => {
      return a.concat(c)
    }, [])
  }

// Alternative Solution
var flatten = function (array){
    return [].concat.apply([],array)
  }
  
// Breakdown of using apply and concat and knowlege of prototypal inheritence together for flattening
//In javascript, every Array object has a .concat method:
// returns [1,2,3,"a","b","c",true,false]
/*[1,2,3].concat(['a','b','c'],[true,false]);
So [].concat would solve our problem, except that it takes arbitrarily many arguments, rather than another Array.

However, we are in luck: we can use [].concat.apply, although it's a little weird. It takes an Array object o an array [x1,x2,...] of arguments and applies the concat method for o to x1,x2,... taken as a list of arguments. For example:

// Same as  [1,2,3].concat(['a','b','c'],[true,false]);
[].concat.apply([1,2,3],[['a','b','c'],[true,false]]);
Or generically:

// Returns o.concat(x1,x2,x3);
[].concat.apply(o,[x1,x2,x3]);
It turns out that any concat method will do; the object it belongs to is ignored. So you can also write:

// Still the same as  [1,2,3].concat(['a','b','c'],[true,false]);
["javascript","ignores","this stuff"].concat.apply([1,2,3],[['a','b','c'],[true,false]])
But we all just used [] because we are lazy and don't like typing.

If you wanted, you could also use Array.prototype.concat; [] and ["javascript","ignores","this stuff"] inherit this method because Array is part of their _prototype chain_†:

// Once again, the same as  [1,2,3].concat(['a','b','c'],[true,false]);
Array.prototype.concat.apply([1,2,3],[['a','b','c'],[true,false]])
In fact, apply is very general: every Function object has it as a method. Using apply is common in functional programming, since one often wishes to pass around arguments as Arrays for use with some argument at some point.
*/
