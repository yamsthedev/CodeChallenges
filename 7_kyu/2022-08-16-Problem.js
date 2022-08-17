// 7 Kyu Problem - August 16th 2022
// Elasped Seconds
// Date.getTime()

/*
Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

Tips:
The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
The start time will always be before the end time.
*/

//new Date(year, monthIndex, day, min, sec, milli)
// day is 0-6 with 0 being sunday

// Using Date.prototype.getTime() which returns back the date in milliseconds
function elapsedSeconds(startDate, endDate){
    return (endDate.getTime() - startDate.getTime()) /1000
}

// same as: 
// Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
function elapsedSeconds(startDate, endDate){
    return (endDate - startDate) / 1000
  }