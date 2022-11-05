// 6 Kyu Problem - November 5th 2022
// The Vowel Code
// string.replace(regex, function), .indexOf(), regexp, str.charAt(), .split(), .map(), OR, .join(), Object as parameter in function

/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

let vowelsArr = ["a","e","i","o","u"]
let vowels = /[aeiou]/g

function encode(string) {
  return string.replace(vowels, function(letter){
    return vowelsArr.indexOf(letter) + 1
  })
}

function decode(string) {
  return string.replace(/\d/g, function(number){
    return vowelsArr[number-1]
  })
}

// Alternative Answer
function encode(string){
  var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
  return codeStringGivenMapping(string, vowelMapping);
}

function decode(string){
  var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
  return codeStringGivenMapping(string, vowelMapping); 
}

function codeStringGivenMapping(string, mapping){
  return string.split('').map(function(char){
    return mapping[char] || char;
  }).join(''); 
}

// Alternative Answer
// turn vowels into numbers
function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}

// Alternative Answer
const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')