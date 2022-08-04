// 7 Kyu Problem - August 4th 2022
// Simple remove duplicates
// lastIndexOf(), indexOf, filter()

/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]
*/

// new Set() will list the unique elements in order of which it is inputted/seen
function solve(arr) {
    return [...new Set(arr.reverse())].reverse()
  }

//Alternative Solution using lastIndexOf method
function solve(arr) {
    return arr.filter((e,i) => arr.lastIndexOf(e) === i)
  }

// Alternative Solution using .indexOf() === -1
function solve(arr){
    let a = [];
    let revArr = arr.reverse();
    for (var i=0; i < revArr.length; i++)
      if (a.indexOf(revArr[i]) === -1)
        a.push(revArr[i]);
    return a.reverse();
  }