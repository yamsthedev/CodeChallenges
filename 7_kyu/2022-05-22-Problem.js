// 7 Kyu Problem - May 22nd 2022
// Sum of a sequence 

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    let sumOfSeq = 0
    for(let start = begin; start <= end; start += step){
      sumOfSeq += start
    }
    return sumOfSeq;
  };

// Alternative Solution (using recursion)
const sequenceSum = (begin, end, step) => {
    if (begin > end) {
      return 0;
    }
    return begin + sequenceSum(begin + step, end, step);
  };