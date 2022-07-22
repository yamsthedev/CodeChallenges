// 7 Kyu Problem - July 22nd 2022
// Unpacking Arguments
// rest parameter, func.apply(this,args), Function.prototype.apply()

/*
You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

eg:

spread(someFunction, [1, true, "Foo", "bar"] ) 
// is the same as...
someFunction(1, true, "Foo", "bar")
*/

function spread(func, args) {
    return func(...args);
  }

// Alternative Solution (could also do null instead of this)
function spread(func, args) {
    return func.apply(this, args);
  }