// 7 Kyu Problem - April 24, 2022
// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


function isIsogram(str){
    let letters = new Set(str.toUpperCase())
    console.log(letters)
    return letters.size == str.length;
  }

// Alternative Solution
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
}

/* The string is converted to a set, so we now have a list of characters which are completely unique.
Then there's a comparison between the size of the set and the length of the string.
If the lengths are equal, there's no repeating characters within the string, thus the string is an isogram.
*/

// Alternative Solution
function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }