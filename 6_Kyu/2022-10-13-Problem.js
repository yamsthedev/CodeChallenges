// 6 Kyu Problem - October 13th 2022
// The Supermarket Queue
// arr.fill(value ,startindex, endindex), Array.from({length:n}, e=>e=0), .sort(), for loop, for...of loop, Math.min(...x), Math.max(...x)

/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool
*/


/* Explaination:
    Create a separate array full of zeros to count usage per till by using Array(n).fill(0) or Array.from({length:n}, e => e=0).
    Then, in a for loop, add customer to first element in the "0" array.
    Then, sort the separate array to get the empty till to the front.
    Then add the next customer to the first element of the "0" array
    Return the last number in the separate array.
*/
function queueTime(customers, n) {
    // Array(n).fill(0)
    let queue = Array.from({length:n}, e => e = 0)
    for(let i = 0; i < customers.length; i++){
      queue[0] += customers[i]
      queue.sort((a,b) => a - b)
    }
    return queue[queue.length - 1]
}

/* Explaination:
    Create a separate array full of zeros to count usage per till by using Array(n).fill(0) or Array.from({length:n}, e => e=0).
    Then, in a for...of loop for the customer array, find the index of the lowest number in the separate array.
    Then, add the customer value to the element with the index of the lowest number in the seperate array.
    Return the max/largest number in the separate array.
*/
function queueTime(customers, n) {
  let x = new Array(n).fill(0)
  for(let element of customers){
    let idx = x.indexOf(Math.min(...x))
    x[idx] += element
  }
  return Math.max(...x)
}