// 6 Kyu Problem - January 13th 2023
// Simple Simple Simple String Expansion
// for loop, .split(), .push(), Number(), .join(), RegExp, .repeat(), .replace(), .slice()

// RegExp, .repeat(), .replace(), .slice()
function stringExpansion(s) {
    return s.replace(/\d\D*/g, m => m.slice(1).replace(/./g, n => n.repeat(m[0])))
    // * means 0 or more of the preceding token
    // .replace() a function or string
  }
  
  // for loop, .split(), .push(), Number(), .join()
  function stringExpansion(s) {
    let arr = s.split('')
    let newArr = []
    let multiplier = 1
    
    for(let i = 0; i < s.length; i++){
      if(arr[i] % 1 == 0){
        multiplier = Number(arr[i])
      }else{
        newArr.push(arr[i].repeat(multiplier))
      }
    }
    return newArr.join('')
  }
  