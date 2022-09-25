// 6 Kyu Problem - September 25th 2022
// Unique In Order
// spread syntax, for loop, .push(), .filter()

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// Spread Syntax, .filer()
var uniqueInOrder=function(iterable){
  return [...iterable].filter((e,i) => e !== iterable[i-1])
}

// .push(), for loop
var uniqueInOrder=function(iterable){
  let ans = []
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i-1] !== iterable[i]){
      ans.push(iterable[i])
    }
  }
  return ans
}