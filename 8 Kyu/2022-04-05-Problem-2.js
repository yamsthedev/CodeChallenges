//8 Kyu Problem - April 5th, 2022
//Are You Playing Banjo?

// Problem Description:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    // Implement me
    return name[0] === 'R' || name[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
  }

//Alternative solution
function areYouPlayingBanjo(name){
    return name + (name[0].toLowerCase() === "r" ? " plays" : " does not play") + " banjo";
}