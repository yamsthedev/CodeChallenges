// 6 Kyu Problem - January 8th 2023
// More Zeros than Ones
// .split(), .filter(), .map(), .charCodeAt(), String.fromCharCode(), new Set(), spread syntax, .replace(), RegExp

/*
Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
    
'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
*/

function moreZeros(s){
  
  function moreZeros(ascii){
    return ascii.split("").filter(x => x == 0).length > ascii.length/2
  }
  
  let arr = s.split("")
  
  // how to convert letter to binary?
  // letter.charCodeAt().toString(2)
  let x = arr.map(e => e.charCodeAt(0).toString(2))
  
  let y = x.map(e => moreZeros(e))
  
  let z = arr.filter((e,i,a) => y[i] == true)
  
  return [...new Set(z)]
}

function moreZeros(s){
    return [...new Set([...s].filter((qure)=>{
       let f=qure.charCodeAt(0).toString(2).replace(new RegExp('0','g'),'').length,
           g=qure.charCodeAt(0).toString(2).replace(new RegExp('1','g'),'').length;
       return g>f
    }))]
  }