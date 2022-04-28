// 8 Kyu Problem - April 27, 2022
// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.split("").filter(element => element != "!").join("")
}

// Alternative Solution
function removeExclamationMarks(s) {
    return s.split('!').join('');
  }