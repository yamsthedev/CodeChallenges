// 7 Kyu Problem - August 2nd 2022
// Ordered Count of Characters

/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

var orderedCount = function (text) {
    let setOfChar = [...new Set(text)]
    return setOfChar.map((e,i) => [e, text.split("").filter(ele => ele === e).length])
}

// Alternative Solution using Array.from and new RegExp
var orderedCount = function (text) {
    return Array.from(new Set(text)).map(c => [c, text.match(new RegExp(c, 'g')).length]);
}

// Alternative Solution using string.split(characater).length - 1
const orderedCount = str => [...new Set(str)].map(char => [char, str.split(char).length - 1])

// Alternative Solution using Map Objects, map.prototype.get(key), map.prototype.set(key,value), new Map(), map.prototype.has(key)
var orderedCount = function (text) {
    return Array.from(text.split("").reduce((past,curr) => past.set(curr, past.has(curr) ? past.get(curr) + 1 : 1), new Map()))
    // past.has(curr)  --> see if the map object already has a key of the current element
    // past.get(curr)  --> gets the value of the key of curr
   }