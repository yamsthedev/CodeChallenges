// 7 Kyu Problem - August 10th 2022
// Unlucky Days
// new Date(year, monthIndex, day, hour, min, sec, millisec), Date.getDay(), Date.setMonth(i), Array.from({length:5}) creates an array with 5 items that are "undefined", Date Time String Format

/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

function unluckyDays(year){
    let count = 0
    let testDate = new Date(year, 0, 13)
    for(let i = 0; i < 12; i++){
      testDate.setMonth(i)
      if(testDate.getDay() === 5){
       count++ 
      }
    }
    return count
  }

// Alternative Solution by making an array first of undefined's
// Not bad, but have to make a new Date object everytime which isnt ideal
function unluckyDays(year){
    return Array.from({length:12}).filter((_,i) => new Date(year, i, 13).getDay() === 5).length
}
