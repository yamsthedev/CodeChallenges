// 7 kyu Problem - September 12th 2022
// Calculating Averages
// rest parameters, method, arguments, .reduce(), Math.max(), for loop

/*
Let's build a calculator that can calculate the average for an arbitrary number of arguments.

The test expects you to provide a Calculator object with an average method:

Calculator.average()
The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

It expects Calculator.average(3,4,5) to return 4.
*/

// Using arguments
var Calculator = {
    average: function() {
     let arr = Array.from(arguments)
     if(arr.length <= 0) return 0
     return arr.reduce((acc,curr) => acc+curr,0) / arr.length
    }
   };

// Using Rest Parameters
var Calculator = {
 average: function(...args) {
  return args.length <= 0 ? 0 : args.reduce((acc,curr) => acc+curr)/args.length
 }
};

// Using a for loop
var Calculator = {
    average: function() {
      var sum = 0;
      for (var i = 0; i < arguments.length; i++) {
         sum += arguments[i];
      }
      let avg = sum / Math.max(arguments.length, 1);
      return avg;
    }
   };
