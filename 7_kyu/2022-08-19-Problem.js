// 7 Kyu Problem - August 19th 2022
// Max Diff - Easy
// spread syntax, Math.min(), Math.min()

/*
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
*/

function maxDiff(list) {
    return list.length ? Math.max(...list) - Math.min(...list) : 0
  };

// Alternative Solution
function maxDiff(list) {
    if(list.length <= 1) return 0
    list.sort((a,z) => a - z)
    return list[list.length-1] - list[0] 
  };