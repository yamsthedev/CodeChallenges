// 7 Kyu Problem - May 12th 2022
// Find the stray number

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    if(numbers.filter(element => element === numbers[0]).length === 1){
      return numbers[0]
    }else{
      return numbers.filter(element => element !== numbers[0])[0]
    }
  }

// Alternative Solution
function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
}

// Alternative Solution
const stray = nums => nums.reduce((a, b) => a ^ b);

// Alternative Solution
function stray(numbers) {
    var a = numbers.sort();
    
    if(a[0] != a[1]) {
      return a[0]
    } 
    return a[a.length-1]
  }

// Alternative Solution
function stray(nums){
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    return nums.filter(x => x == max).length == 1 ? max : min
  }

// Alternative Solution
const stray = (numbers) => numbers.filter(el => numbers.indexOf(el) === numbers.lastIndexOf(el))[0]