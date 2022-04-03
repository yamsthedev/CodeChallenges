//8 Kyu Problem 2 - April 3rd, 2022
//Reversed sequence

//Description:
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]


const reverseSeq = n => {
    let arr = [];
    let x = n;
    for(let i = 0; i < n; i++){
      arr.push(x)
      x -= 1;
    }
    return arr
  };

//Could have also done:
// const reverseSeq = n => {
//     let arr = [];
//       for (let i=n; i>0; i--) {
//         arr.push(i);
//         } 
//     return arr;
// };