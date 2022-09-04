// 7 Kyu Problem - September 4th 2022
// Name Array Capping
// .map(), .toLowerCase(), .toUpperCase(), .slice(), .substring(), .charAt()

/*
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/

function capMe(names) {
    return names.map( e => e[0].toUpperCase() + e.slice(1).toLowerCase() )
}

// Using String.prototype.charAt() and String.prototype.substring()
function capMe(names) {
    return names.map(function (n) { return n.charAt(0).toUpperCase() + n.substring(1).toLowerCase(); });
}