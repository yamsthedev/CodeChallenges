// 6 Kyu Problem - September 21st 2022
// Counting Duplicates
// Set(), .indexOf(), .lastIndexOf(), .split(), .filter(), Objects.keys(obj), .reduce(), .toLowerCase()

/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// Set(), .indexOf(), .lastIndexOf()
function duplicateCount(text){
  let lower = text.toLowerCase()
  let unqLower = [...new Set(lower)]
  let count = 0
  for(let i = 0; i < unqLower.length; i++){
    if(lower.indexOf(unqLower[i]) !== lower.lastIndexOf(unqLower[i])){
        count++
    }    
  }
  return count
}

// .indexOf(), .lastIndexOf(), .split(), .filter(), .toLowerCase()
function duplicateCount(text){
  return text.toLowerCase().split("").filter((e, i, a) => {
    return a.indexOf(e) == i && a.lastIndexOf(e) !== i
  }).length 
}

// Using Object, .reduce(), Object.keys(obj), .filter(), .split()
function duplicateCount(text){
  let obj = text.toLowerCase().split("").reduce((acc,curr) => {
    acc[curr] ? acc[curr] += 1 : acc[curr] = 1
    return acc
  }, {})
  return Object.keys(obj).filter(key => obj[key] >= 2).length
}