// 6 Kyu Problem - October 3rd 2022
// Build Tower
// .repeat(count), .push(), Array.from({length:n}, (e,i) => ...)

/*
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

// .push(), for loop, str.repeat(count)
function towerBuilder(nFloors) {
  // 1,3,5
  // 1, 1+2, 3+2
  
  let ans = []
  let units = 1
  
  for(let i = 1; i <= nFloors; i++){
    if(i === nFloors) {
      ans.push("*".repeat(units))
    }
    else {
      ans.push(" ".repeat((nFloors - i)) + "*".repeat(units) + " ".repeat((nFloors - i)))
      units += 2
    }
  }
  
  return ans
}

function towerBuilder(nFloors) {
  //1,3,5
  // 0*2+1, 1*2+1, 2*2+1
  // spaces on each side: 2,1,0
  var tower = [];
  for (let i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

// Array.from({length:n}, (e,i) => ...)
function towerBuilder(nFloors) {
  // 1,3,5
  // 0*2+1, 1*2+1, 2*2+1
  // spaces on each side: 2,1,0
  return Array.from({length:nFloors}, (_,i) => {
     let spaces = " ".repeat(nFloors - i - 1)
     return spaces + "*".repeat(i*2+1) + spaces
  })
}