// 6 Kyu Problem - January 11th 2023
// Casino Chips
// Mathematics, Math.floor(), .sort(), Math.min(), cutting fractional digits

/*
You are given three piles of casino chips: white, green and black chips:

the first pile contains only white chips
the second pile contains only green chips
the third pile contains only black chips
Each day you take exactly two chips of different colors and head to the casino. You can choose any color, but you are not allowed to take two chips of the same color in a day.

You will be given an array representing the number of chips of each color and your task is to return the maximum number of days you can pick the chips. Each day you need to take exactly two chips.

Examples (input -> output)
* [1,1,1] -> 1, because after you pick on day one, there will be only one chip left
* [1,2,1] -> 2, you can pick twice; you pick two chips on day one then on day two
* [4,1,1] -> 2
More examples in the test cases. Good luck!

Brute force is not the way to go here. Look for a simplifying mathematical approach.
*/

// Mathematics, Math.floor(), .sort()
function solve(arr){
    let result = arr.sort((a, b) => b - a)
    let a = result[0] // highest number of chips
    let b = result[1] // middle number of chips
    let c = result[2] // lowest number of chips
    
    console.log(a,b,c)
    
    if(a > (b+c)){
      return b+c
    } else {
      return Math.floor((a+b+c) / 2)
    }
}

function solve(arr){
    var [a,b,c] = arr.sort((x,y)=>x-y)
    // ~~ cuts all fractional digits
    // a is smallest number
    // b is middle number
    // c is largest number
    return Math.min(a+b,~~((a+b+c)/2))
}

solve=([a,b,c])=>Math.min(a+b,a+c,b+c,(a+b+c)/2|0)