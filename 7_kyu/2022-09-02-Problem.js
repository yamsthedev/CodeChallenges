// 7 Kyu Problem - September 2nd 2022
// Nickname Generator
// RegExp, .test(str), character set, ignore case-sensitivity flag, String.prototype.includes(searchString, position), 1+true = 2, .slice(), .toLowerCase(), .indexOf() when false is -1, RegExp.prototype.test(str)

/*
Nickname Generator

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
If the 3rd letter is a vowel, return the first 4 letters.

nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
If the string is less than 4 characters, return "Error: Name too short".

Notes:

Vowels are "aeiou", so discount the letter "y".
Input will always be a string.
Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
The input can be modified
*/

function nicknameGenerator(name){
  
    let vowels = "aeiou"
    
    if (name.length > 3){
      if(vowels.includes(name[2]) === true){
        return name.slice(0,4)
      }else{
        return name.slice(0,3)  
      }
    }else{
      return "Error: Name too short"
    } 
  }

// Knowing 1 + true = 1, true is 1, false is 0
function nicknameGenerator(name){
    return name.length > 3 ? name.slice(0, 3+"aeiou".includes(name[2])) : "Error: Name too short"
}

// Using .indexOf() when false is equal to -1
function nicknameGenerator(name) {
    if (name.length < 4) {
      return "Error: Name too short";
    } else if ("aeiou".indexOf(name[2].toLowerCase()) != -1) {
      return name.slice(0, 4);
    } else {
      return name.slice(0, 3);
    }
  }

// Using regexp, .test(str), character set, ignore case-sensitivity flag
function nicknameGenerator(name) {
    if(name.length <= 3) {return 'Error: Name too short';}
    return !/[aeiou]/i.test(name[2]) ? name.slice(0,3) : name.slice(0,4);
  }