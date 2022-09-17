// 6 Kyu Problem - September 17th 2022
// Duplicate Encoder
// .lastIndexOf(), .indexOf(), .map(), .split(), .toLowerCase(), .replace(pattern, replacement), regexp /./g, .some()

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word){
    let ans = ""
    let lowerWord = word.toLowerCase()
    for(let i = 0; i < word.length; i++){
      if(lowerWord.indexOf(lowerWord[i]) === lowerWord.lastIndexOf(lowerWord[i])){
        ans += "("
      }else{
        ans += ")"
      }
    }
    return ans
}

// using regexp and .replace()
function duplicateEncode(word){
    let lowerWord = word.toLowerCase()
    return lowerWord.replace(/./g, e => lowerWord.indexOf(e) === lowerWord.lastIndexOf(e) ? "(" : ")")
}

// using .some()
function duplicateEncode(word){
    let lowerWord = word.toLowerCase().split("")
    return lowerWord.map((e,i) => {
      return lowerWord.some((ex,j) => ex === e && j !== i) ? ")" : "("
    }).join("")
}