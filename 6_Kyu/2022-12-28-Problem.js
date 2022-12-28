// 6 Kyu Problem - December 28th 2022
// Alphabet War - Airstrike - Letters Massacre
// .replace(), .split(), .reduce(), Objects, OR operator, ? quantifier, regexp, .split(), .forEach(), .indexOf()

/*
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters called airstrike to help them in war - dashes and dots are spreaded everywhere on the battlefield.

Task
Write a function that accepts fight string consists of only small letters and * which means a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3 
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3 
 d - 2
 z - 1
The other letters don't have power and are only victims.
The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

Example
alphabetWar("s*zz");           //=> Right side wins!
alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
alphabetWar("zzzz*s*");       //=> Right side wins!
alphabetWar("www*www****z");  //=> Left side wins!
*/

// .replace(), .split(), .reduce(), Objects, OR operator, quantifier, regexp
// have to escape * character using \*
// ? quantifier matches between 0 and 1 of the preceding character
function alphabetWar(fight)
{
  let powers = {
    // left side
      "w" : 4,
      "p" : 3,
      "b" : 2,
      "s" : 1,
    // right side
      "m" : -4,
      "q" : -3,
      "d" : -2,
      "z" : -1
  }

  let ans = fight.replace(/[a-z]?\*[a-z]?/g, "")
                 .split("")
                 .reduce((acc,curr) => {
                    return acc + (powers[curr] || 0)
                 }, 0)

  return ans > 0 ? "Left side wins!" : ans < 0 ? "Right side wins!" : "Let's fight again!"
}
// .split(), .forEach(), .indexOf()
function alphabetWar(fight){
   fight = fight.replace(/[a-z]\*[a-z]|[a-z]\*|\*[a-z]/g,"")
    var l = 0;
    var r = 0;
    fight.split("").forEach(i=>"0sbpw".indexOf(i)>0?l+="0sbpw".indexOf(i):l)
    fight.split("").forEach(j=>"0zdqm".indexOf(j)>0?r+="0zdqm".indexOf(j):r)
    if(l==r){return "Let's fight again!"}
    return l>r ? "Left side wins!" : "Right side wins!";
}