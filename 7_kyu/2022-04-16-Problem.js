//7 Kyu Problem - April 16th, 2022
//Disemvowel Trolls

//Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let compareArr = ["o", "u", "i", "a", "e"]
    return str.split("").filter((element) => {
     return compareArr.indexOf(element.toLowerCase()) === -1
    }).join("")
  }

//Alternative Solution
function disemvowel(str) {
    let newStrArr = []
    str.split("").forEach((element, index) => {
      if(element !== "o" && element !== "O" && element !== "i" && element !== "I" && element !== "e" && element !== "E" && element !== "a" && element !== "A" && element !== "u" && element !== "U"){
        newStrArr.push(element)
      }
    })
    return newStrArr.join("");
  }