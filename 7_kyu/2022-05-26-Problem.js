// 7 Kyu Problem - May 26th 2022
// Maximum Length Difference

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

function mxdiflg(a1, a2) {
    let ans = -1;
    if(a1 === [] || a2 === []){
      return ans
    }else{
    let a1Lengths = a1.map(str => str.length)
    let a2Lengths = a2.map(str => str.length)
    for(let i = 0; i < a1Lengths.length; i++){
      for(let j = 0; j < a2Lengths.length; j++){
        if(Math.abs(a1Lengths[i] - a2Lengths[j]) > ans){
          ans = Math.abs(a1Lengths[i] - a2Lengths[j])
            }
          }
        }
      return ans
    }
  }

  //Alternative Solution
  function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
  }

//Alternative Solution
function mxdiflg(a1, a2) {
  a1 = a1.sort(function(a,b){return a.length-b.length});
  a2 = a2.sort(function(a,b){return a.length-b.length});
  return a1.length * a2.length ? Math.max(
    Math.abs(a1[0].length - a2[a2.length-1].length),
    Math.abs(a2[0].length - a1[a1.length-1].length)
  ) : -1;
}

//Alternative Solution
function mxdiflg(a1, a2) {
    var max = -1;
    for(var A1 of a1)
      for(var A2 of a2)
        max = Math.max(max, Math.abs(A1.length - A2.length));
    return max;
  }