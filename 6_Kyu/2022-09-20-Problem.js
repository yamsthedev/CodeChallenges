// 6 Kyu Problem - September 20th 2022
// Array.diff
// for loop, .filter(), .indexOf(), .push(), .includes()

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
// Using for loop and .filter()
function arrayDiff(a, b) {
    for(let i = 0; i<b.length;i++){
      a = a.filter(e => e !==b[i])
    }
    return a
  }

// Using .filter() and .includes()
function arrayDiff(a, b) {
  return a.filter(e => !b.includes(e))
}

// Using .filter() and .indexOf()
function arrayDiff(a, b) {
  return a.filter(e => b.indexOf(e) === -1)
}

// Using .push() and .indexOf()
function arrayDiff(a, b) {
  let arr = []
  for(let i = 0; i < a.length; i++){
    if(b.indexOf(a[i]) === -1){
      arr.push(a[i])
    }
  }
  return arr
}

// Set, Set.prototype.has()
function arrayDiff(a,b){
  b = new Set(b)
  return a.filter(e => b.has(e))
}