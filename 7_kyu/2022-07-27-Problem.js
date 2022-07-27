// 7 Kyu Problem - July 26th 2022
// Return the Missing Element
// Array.prototype.indexOf(), Array.prototype.includes(), Array.prototype.reduce()

/*
Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/
function getMissingElement(superImportantArray){
    return superImportantArray.sort((a,z) => a - z).filter((e,i) => e !== i)[0] - 1
  }

// Alternative Solution (using a for loop with Array.prototype.indexOf())
function getMissingElement(superImportantArray){
    for(let i=0; i < 10; i++){
      if(superImportantArray.indexOf(i) === -1){
        return i
      }
    }
  }
// Alternative Solution (using Array.prototype.includes())
function getMissingElement(superImportantArray){
    for(let i=0; i < 10; i++){
      if(!superImportantArray.includes(i)){
        return i
      }
    }
  }

// Alternative Solution (using Array.prototype.reduce())
  function getMissingElement(superImportantArray) {
    return superImportantArray.reduce(function (sum, value) {return sum - value;}, 45);
  }