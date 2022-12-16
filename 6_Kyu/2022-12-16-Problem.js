// 6 Kyu Problem - December 16th 2022
// The Deaf Rats of Hamelin
// string.match(), Regex, boolean OR in regexp, .slice(), .indexOf(), for loop, .reverse(), .filter()

/*
Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats

ex2 P O~ O~ ~O O~ has 1 deaf rat

ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/

var countDeafRats = function(town) {
  let arr = town.match(/~O|O~|P/g)
  let idx = arr.indexOf("P")
  
  let leftOfP = arr.slice(0,idx)
  let rightOfP = arr.slice(idx+1)
  
  let count = 0
  
  for(let i = 0; i < leftOfP.length; i++){
    if(leftOfP[i] == "O~") count++
  }
  
  for(let j = 0; j < rightOfP.length; j++){
    if(rightOfP[j] == "~O") count++
  }
  
  return count
}


var countDeafRats = function(town) {
  let deafs = 0
  let ident = 'O'
  for ( let i = 0; i < town.length; i++){
     if ( town[i] === 'P' ){
      ident =  '~'
     }
     if (town[i] === ident){
       deafs++
     }
     if (town[i] === '~' || town[i] === 'O'){
      i++
     }
   }
  return deafs;
}

// Using .reverse(), .filter()
var countDeafRats = function(town) {
  // Your code here
  if(town != null){
    [left,right] = town.split('P');
    console.log([left,right])
        var a = left+right.split('').reverse().join('');
    console.log(a)
        var b = (a.match(/O~|~O/gi)||[]).filter(v=>v=='O~').length;
         return b;
  }
  return 0
}