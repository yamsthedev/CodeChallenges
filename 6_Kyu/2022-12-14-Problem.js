// 6 Kyu Problem - December 14th 2022
// Once
// Functional Programming, function.apply(thisArg, args), arguments, rest parameters, function in a function

/*
You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function should have no effect (and should return undefined).

For example:

logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect
*/

// rest parameters, function in a function
function once(fn){
    let count = 0
    return function(...args){
        count++
        return count > 1 ? undefined : fn(...args)
    }
}

// function.apply(thisArg, args), arguments
function once(fn){
    let count = true
    return function(){
      if(count){
        count = false
        return fn.apply(this, arguments)
      }
    }
}