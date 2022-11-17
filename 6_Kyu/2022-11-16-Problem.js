// 6 Kyu Problem - November 16th 2022
// Lottery Ticket
// .filter(), .split(), .some(), .charCodeAt(), .forEach(), .includes(), String.fromCharCode(num1, num2, ... numN)

/*
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/

// using .filter(), .split(), .some(), .charCodeAt()
function bingo(ticket, win){
 return ticket
          .filter(tick => tick[0].split("").some(letter => letter.charCodeAt(0) === tick[1]))
          .length >= win ? "Winner!" : "Loser!"
}


// using .forEach(), .includes(), String.fromCharCode(num1, num2, ... numN)
function bingo(ticket, win){
  let count = 0
  
  ticket.forEach(mini => {
    if(mini[0].includes(String.fromCharCode(mini[1]))){
       count++
      }
  })
  
    return count >= win ? "Winner!" : "Loser!"
}