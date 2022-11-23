// 6 Kyu Problem - November 22nd 2022
// Put the exclamation marks and question marks on the balance - are they balanced?
// Nested Ternary Operators, .split(), spread syntax, .reduce()

/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

function balance(left,right){
 let l = [...left].reduce((a,c) => a + (c === "!" ? 2 : 3), 0)
 let r = [...right].reduce((a,c) => a + (c === "!" ? 2 : 3), 0)
 return r > l ? "Right" : r < l ? "Left" : "Balance"
}

function balance(left,right){
  function count(side){
    return side.split("").reduce((acc,curr) => {
     return acc + (curr === "!" ? 2 : 3)
    }, 0)
  }
  if(count(left) - count(right) > 0){
    return "Left"   
  }else if(count(left) - count(right) < 0){
    return "Right"
  }else{
    return "Balance"
  }
}