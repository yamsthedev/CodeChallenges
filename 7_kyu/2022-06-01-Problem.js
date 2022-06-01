// 7 Kyu Problem - June 1st 2022
// FizzBuzz

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n)
{
  let ans = [];
  
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0) ans.push("FizzBuzz");
    else if(i % 3 === 0 ) ans.push("Fizz");
    else if( i % 5 === 0) ans.push("Buzz");
    else ans.push(i)
}
  
  return ans
  
  }

//Alternative Solution
function fizzbuzz(n)
{
  var i = 1, arr = [];
  while(i <= n) {
    var fizz = (i % 3 == 0);
    var buzz = (i % 5 == 0);
    if(fizz || buzz) {
      arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
    }
    else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

var fizzify = fizzbuzz;

//Alternative Solution
var fizzify = fizzbuzz = function(n)
{
  return Array.apply(null, new Array(n)).map(function(e, i){
    return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
  }); 
}

//Alternative Solution
function fizzbuzz(n) {
    var fizzified = [];
    for (var i = 1; i <= n; i++) {
      var val = '';
      if (i % 3 == 0) val += 'Fizz';
      if (i % 5 == 0) val += 'Buzz';
      fizzified.push(val || i);
    }
    return fizzified;
  }
  
  function fizzify(n) {
    return fizzbuzz(n);
  }