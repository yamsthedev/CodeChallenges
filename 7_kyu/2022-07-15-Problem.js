// 7 Kyu Problem - July 14th 2022
// Build a square
// .map(), [...Array(number)], str.repeat(integer), .join()

//I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(integer){
    return [...Array(integer)].map(_ => "+".repeat(integer)).join("\n")
}

// Alternative Solution
function generateShape(integer){
    return ("+".repeat(integer) + "\n").repeat(integer).trim()
}

// Alternative Solution
function generateShape(integer){
    let rowInt = ""
    for(let i = 0; i < integer; i++){
      for(let j = 0; j < integer; j++){
          rowInt += "+" 
        }
      i !== integer-1 ? rowInt += "\n" : ""
      }
      return rowInt
}