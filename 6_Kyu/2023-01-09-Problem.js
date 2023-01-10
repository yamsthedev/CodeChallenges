// 6 Kyu Problem - January 9th 2023
// Adjacent repeated words in a string
// .split(), .toLowerCase(), for loop, .reduce()

/*
You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?

As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like "as" at the beginning of this sentence.

Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

Examples
"dog cat"                  -->  0
"dog DOG cat"              -->  1
"apple dog cat"            -->  0
"pineapple apple dog cat"  -->  0
"apple apple dog cat"      -->  1
"apple dog apple dog cat"  -->  0
"dog dog DOG dog dog dog"  -->  1
"dog dog dog dog cat cat"  -->  2
"cat cat dog dog cat cat"  -->  3
*/

// .split(), .toLowerCase(), for loop
function countAdjacentPairs(searchString) {
  let count = 0
  let ans = 0
  
  let arr = searchString.split(" ")
  
  for(let i = 0; i < arr.length-1; i++){
    if(arr[i].toLowerCase() == arr[i+1].toLowerCase()){
      count++
    }else{
      if(count > 0){
       ans++
       count = 0 
      }
    }
  }
  
  if(count > 0) ans++

  return ans
}

// .reduce()
function countAdjacentPairs(searchString) {
  let arr = searchString.toLowerCase().split(" ")
  return arr.reduce((acc,curr,i) => curr == arr[i+1] && curr != arr[i-1] ? [...acc, curr] : acc, []).length
}