// 6 Kyu Problem - January 17th 2023
// Change it up
// .indexOf(), str.charCodeAt(), String.fromCharCode(), .map(), .split(), .toUpperCase(), .join(), .replace(), RegExp, character sets, .toLowerCase()

/*
Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note:

the alphabet should wrap around, so Z becomes A
in this kata, y isn't considered as a vowel.
So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

// .indexOf(), str.charCodeAt(), String.fromCharCode(), .map(), .split(), .toUpperCase(), .join()
function changer(str) { 
  
    let ans = ""
    let vowels = "aeiou"
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    str = str.toLowerCase()
  
    for(let i = 0; i < str.length; i++){
      if(alphabet.indexOf(str[i]) !== -1){
        ans += str[i] == "z" ? "a" : String.fromCharCode(str.charCodeAt(i)+1)
      }else{
        ans += str[i]
      }
    }
    
    return ans.split("").map(e => vowels.indexOf(e) !== -1 ? e.toUpperCase() : e).join("")
  }

// .replace(), RegExp, character sets, .toLowerCase()
function changer(str) { 
  return str.toLowerCase()
            .replace(/[a-z]/g, m => {
               return m == "z" ? "a" : String.fromCharCode(m.charCodeAt(0)+1)
            }).replace(/[aeiou]/g, n => n.toUpperCase())
}

// workaround by making own string
const letters = "abcdEefghIijklmnOopqrstUuvwxyzA";
const changer = s => s.replace( /[a-z]/gi, c => letters[ letters.indexOf(c.toLowerCase())+1 ] );