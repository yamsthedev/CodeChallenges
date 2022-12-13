// 6 Kyu Problem - December 12th 2022
// Statistics for an Athletic Association
// functions, .forEach(), .split(), Math.floor(), String(), Number(), .push(), Array.from(), .reduce(), Using Objects, Class, Constructors, Methods, for of loop, this, , new Date() object, Date.setSeconds(), Date.toISOString(), Math.max(), Math.min(), function.apply()

/*
You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by ,  or ,.

To compare the results of the teams you are asked for giving three statistics; range, average and median.

Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

Mean or Average : To calculate mean, add together all of the numbers and then divide the sum by the total count of numbers.

Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

Your task is to return a string giving these 3 values. For the example given above, the string result will be

"Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`

where hh, mm, ss are integers (represented by strings) with each 2 digits.

Remarks:
if a result in seconds is ab.xy... it will be given truncated as ab.
if the given string is "" you will return ""
*/

function stat(strg) {
    // hours | minutes | seconds
  if(strg == "") return "" 
    
    function converter(timeInSeconds){  
      let timeHours = Math.floor(timeInSeconds/3600)
      let timeMinutes = Math.floor(timeInSeconds%3600/60)
      let timeSeconds = Math.floor(timeInSeconds%3600%60)
      
      timeHours = String(timeHours).length !== 2 ? "0" + String(timeHours) : String(timeHours)
      timeMinutes = String(timeMinutes).length !== 2 ? "0" + String(timeMinutes) : String(timeMinutes)
      timeSeconds = String(timeSeconds).length !== 2 ? "0" + String(timeSeconds) : String(timeSeconds)
      
    return `${timeHours}|${timeMinutes}|${timeSeconds}`
    }

// Converting each times into seconds    
    let timesInSeconds = []
    
    strg.split(", ").forEach(time => {
      let arr = time.split("|")
      timesInSeconds.push(Number(arr[0]*60*60) + Number(arr[1]*60) + Number(arr[2]))
    })
    
  // Sorted Array (least to greatest)
  // Have to make a copy of the array before sorting, used Array.from(arr)
    let sortedArr = Array.from(timesInSeconds).sort((a,b) => a-b)
  
  // Range Value in Seconds  
    let rangeInSeconds = sortedArr[sortedArr.length-1] - sortedArr[0]
  
  // Median Value in Seconds
    let medianInSeconds = sortedArr.length % 2 !== 0 ? sortedArr[Math.floor(sortedArr.length/2)] : (sortedArr[sortedArr.length/2] + sortedArr[sortedArr.length/2 - 1]) / 2
    
  // Mean Value in Seconds
    let meanInSeconds = sortedArr.reduce((acc,curr) => acc + curr)/sortedArr.length
    
  return `Range: ${converter(rangeInSeconds)} Average: ${converter(meanInSeconds)} Median: ${converter(medianInSeconds)}`
}

// Alternate Answer
// Using Objects, Class, Constructors, Methods, for of loop, .split(), .push(), this, , new Date() object, Date.setSeconds(), Date.toISOString(), Math.max(), Math.min(), function.apply()
function stat(strg) {
    if (strg === '') {
      return strg;
    }
    const teamStats = new teamStatistics(strg);
    return 'Range: ' +  teamStats.getRange() + ' Average: ' + teamStats.getAverage() + ' Median: ' + teamStats.getMedian();
}

class teamStatistics {
  constructor(teamScores) {
    this.teamScoresInArray = teamScores.split(', ');
    this.teamTimesInSeconds = [];
    
    for(let singlePerson of this.teamScoresInArray) {
      const hoursToSeconds = Number(singlePerson.split('|')[0] * 60 * 60);
      const minutesToSeconds = Number(singlePerson.split('|')[1] * 60);
      const seconds = Number(singlePerson.split('|')[2]);
      this.teamTimesInSeconds.push(hoursToSeconds + minutesToSeconds + seconds);
    }
  }
  
  getFormatedTime(timeInSeconds) {
    const date = new Date(null);
    date.setSeconds(timeInSeconds);
    
    return date.toISOString().substr(11, 8).replace(/:/g, '|');
  }
  
  getAverage() {
    let arraySum = 0;
    let average = 0;
    const arrayLength = this.teamTimesInSeconds.length;
    
    for (let number of this.teamTimesInSeconds) {
      arraySum += number;
    }
    
    return this.getFormatedTime(arraySum / arrayLength);
  }
    
  getMedian() {
    this.teamTimesInSeconds.sort( function(a,b) {return a - b;} );

    var half = Math.floor(this.teamTimesInSeconds.length/2);

    if(this.teamTimesInSeconds.length % 2) {
      return this.getFormatedTime(this.teamTimesInSeconds[half]);
    } else {
      return this.getFormatedTime((this.teamTimesInSeconds[half-1] + this.teamTimesInSeconds[half]) / 2.0);
    }
  }
  
  getRange() {
    const biggest = Math.max.apply(Math, this.teamTimesInSeconds);
    const smallest = Math.min.apply(Math, this.teamTimesInSeconds);
    return this.getFormatedTime(biggest-smallest);
  }

}