// 7 Kyu Problem - June 6th 2022
// Sum of numbers from 0 to N
// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0
var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      let sum = 0
      let output = 0
      if(count === 0){
        return "0=0"
      }else if(count < 0){
        return `${count}<0`
      }else{
        for(let i = 1; i <= count; i++){
        sum = i + sum
        output = output + "+" + i
        }
        return `${output} = ${sum}`
      }
    };
    return SequenceSum;
  })();

//Alternative Solution
var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      var sum = 0;
      var str = "";
      if (count === 0) {
        return "0=0";
      } else if (count < 0) {
        return count + "<0";
      } else {
        for (var i = 0; i < count; i++) {
          sum += i;
          str += i + "+";
        };
      sum += count;
      str += count + " = " + sum;
      return str;
      };
    };
  
    return SequenceSum;
  
  })();