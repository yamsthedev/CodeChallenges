// 6 Kyu Problem - October 17th 2022
// Give me a Diamond
// Math.abs(), .repeat(), .push(), .slice(), .reverse(), .join(), Math.floor(), spread syntax

/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

// Using str.repeat(), .push(), .slice(), .reverse(), .join(), Math.floor()
function diamond(n){
  if(n <= 0 || n % 2 === 0) return null
  let diam = []
  for(let i = 1; i <= n; i+=2){
    diam.push(" ".repeat((n-i)/2) + "*".repeat(i) + "\n")
  }
  if(n!==1){
    diam.push(...diam.slice(0,Math.floor(n/2)).reverse())
  }
  return diam.join("");
}

// Using math, Math.abs(), .repeat()
function diamond(n){
  if(n % 2 === 0 || n <= 0) return null
  let diam = ""
  for(let i = 0; i < n; i++){
    let x = Math.abs((n-1-i*2)/2)
    diam += " ".repeat(x)
    diam += "*".repeat(n-2*x)
    diam += "\n"
  }
  return diam;
}