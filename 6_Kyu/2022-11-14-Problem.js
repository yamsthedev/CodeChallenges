// 6 Kyu Problem - November 14th 2022
//
// Regex, .replace(), .toLowerCase(), .trim(), Objects, .split(), .filter(), .map(), .toUpperCase(), OR

/*
The idea for this kata came from 9gag today:

The lyrics to "Never gonna give you up" by Rick Astley encoded in the NATO phonetic alphabet

Task
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace
*/

// .trim(), Objects
function to_nato(words) {
  
let table = {
  'A': 'Alfa',
  'B': 'Bravo',
  'C': 'Charlie',
  'D': 'Delta',
  'E': 'Echo',
  'F': 'Foxtrot',
  'G': 'Golf',
  'H': 'Hotel',
  'I': 'India',
  'J': 'Juliett',
  'K': 'Kilo',
  'L': 'Lima',
  'M': 'Mike',
  'N': 'November',
  'O': 'Oscar',
  'P': 'Papa',
  'Q': 'Quebec',
  'R': 'Romeo',
  'S': 'Sierra',
  'T': 'Tango',
  'U': 'Uniform',
  'V': 'Victor',
  'W': 'Whiskey',
  'X': 'Xray',
  'Y': 'Yankee',
  'Z': 'Zulu',
}

let ans = ""
words = words.split(" ").join("")

for(let i = 0; i < words.length; i++){
  table[words[i].toUpperCase()] ? ans += table[words[i].toUpperCase()] + " " : ans += words[i] + " "
}

console.log(ans)

return ans.trim()
}

// Or could have done:
// .split(), .filter(), .map(), .toUpperCase()
function to_nato(words) {
  return words.split('').filter(c => c !== ' ').map(c => table[c.toUpperCase()] || c).join(' ');
}

// Regex, .replace(), .toLowerCase()
function to_nato(words) {
return words.replace(/\s/g, "").toLowerCase().split("").map((e,i) => NATO[e] || e).join(" ")
}