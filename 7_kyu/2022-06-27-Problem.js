// 7 Kyu Problem - June 27th 2022
// Training on Alphabet War

// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

function alphabetWar(fight)
{
   const map = {w:-4,
               p:-3,
               b:-2,
               s:-1,
               m:4,
               q:3,
               d:2,
               z:1
               }
   let value = fight.split("").reduce((acc,curr) => acc + (map[curr] || 0),0)
   return value ? (value < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!"
}

// Alternative Solution 
function alphabetWar(fight)
{
  let left = {
       w:4,
       p:3,
       b:2,
       s:1
  }
  let right = {
       m:4,
       q:3,
       d:2,
       z:1
  }
  
  const leftArr = ["w", "p", "b", "s"]
  const rightArr = ["m", "q", "d", "z"]
  let fightArr = fight.split("")
  let rightContains = fightArr.filter((e,i,a) => rightArr.indexOf(e) !== -1)
  let leftContains = fightArr.filter((e,i,a) => leftArr.indexOf(e) !== -1)
  let rightSum = 0
  let leftSum = 0
  
  rightContains.forEach(e => rightSum += right[e])
  leftContains.forEach(e => leftSum += left[e])
  
  if(rightSum > leftSum){
    return "Right side wins!"
  }else if(leftSum > rightSum){
    return "Left side wins!"
  }else{
    return "Let's fight again!";
  }  
}