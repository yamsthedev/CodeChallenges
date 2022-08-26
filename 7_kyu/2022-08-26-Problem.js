// 7 Kyu Problem - August 26th 2022
// Last
// .slice() for creating shallow copy, typeof operator, String.prototype.charAt(index), Array.prototype.pop(), || OR Operator, Undefined is falsy, arguments object, rest parameter 

/*
Find the last element of the given argument(s).

Examples
last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4
In javascript and CoffeeScript a list will be an array, a string or the list of arguments.
*/

function last(...list){
    let last = list[list.length - 1];
    return last[last.length - 1] || last
}

//Could have also used arguments object instead of rest parameter. Also used || or operator. Undefined is falsy.
function last(list){
    var last = arguments[arguments.length - 1];
    return last[last.length - 1] || last;
}

// Use .slice() (nothing in the brackets) to create a shallow copy of the array so that when we use .pop(), the original array doesnt get effected.
// Also used, arguments object, typeof operator, String.prototype.charAt(index), Array.prototype.pop()

function last(list) {
    if (arguments.length > 1) {
      return arguments[arguments.length - 1];
    }
    if (Array.isArray(list)) {
      return list.slice().pop();
    } else if (typeof list == 'string') {
      return list.charAt(list.length - 1)
    } else {
      return list;
    }
}