// 7 Kyu Problem - May 4th 2022
// String ends with?

//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    return (str.slice(-ending.length) === ending || ending === '');
    }

// Alternative Sol'n    
function solution(str, ending){
    return str.endsWith(ending);
  }