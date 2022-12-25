// 6 Kyu Problem - December 25th 2022
// The Shell Game
// .reduce(), .includes(), .find(), .forEach()

/*
"The Shell Game" involves cups upturned on a playing surface, with a ball placed underneath one of them. The index of the cups are swapped around multiple times. After that the players will try to find which cup contains the ball.

Your task is as follows. Given the cup that the ball starts under, and list of swaps, return the location of the ball at the end. Cups are given like array/list indices.

For example, given the starting position 0 and the swaps [(0, 1), (1, 2), (1, 0)]:

The first swap moves the ball from 0 to 1
The second swap moves the ball from 1 to 2
The final swap doesn't affect the position of the ball.
So

swaps = [[0,1], [1,2], [1, 0]]
find_the_ball(0, swaps) == 2
There aren't necessarily only three cups in this game, but there will be at least two. You can assume all swaps are valid, and involve two distinct indices.
*/

function find_the_ball(start,swaps) {
  // ball can be in any of the 2 indices in the element of the swaps array
  return swaps.reduce(function(ball, swap) {
    if(ball == swap[0]){
      ball = swap[1]
    }else if(ball == swap[1]){
      ball = swap[0]
    }
    return ball
  }, start)
}

// One-Liner Version using .reduce()
function findTheBall(start, swaps) {
    return swaps.reduce((acc,curr) => acc == curr[0] ? curr[1] : acc == curr[1] ? curr[0] : acc, start)
  }


// Using .reduce(), .includes(), .find()
const find_the_ball = (start, swaps) =>
  swaps.reduce((pre, val) => val.includes(pre) ? val.find(val => val !== pre) : pre, start);

// Using .forEach()
const find_the_ball = (start, swaps) => {
    let ball = start;
    swaps.forEach(s => {
        if (s[0] == ball) {
            ball = s[1]
        } else if (s[1] == ball) {
            ball = s[0];
        }
    });
    return ball;
}