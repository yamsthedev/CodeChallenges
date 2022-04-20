// 8 Kyu Problem - April 19th, 2022
// Total amount of points

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    let points = 0;
    games.forEach(game => {
      let x = game[0];
      let y = game[2];
      if(x>y){
        points += 3;
      }else if (x<y){
        points += 0;
      }else{
        points += 1;
      }
    });
    return points;
  }

//Alternative Solution
function points(games) {
    return games.reduce((acc, curr) => {
      return acc += curr[0]>curr[2] ? 3 : curr[0]===curr[2] ? 1 : 0;
    },0)
    // your code here
  }
