// 7 Kyu Problem - April 22nd, 2022
// Shortest Word
// Second problem of the day

//Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let arrOfLengths = [];
    s.split(" ").forEach(word => arrOfLengths.push(word.length));
    return Math.min(...arrOfLengths)
  }

//ALternative SOlution 1:
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

//ALternative SOlution 2:
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

//ALternative SOlution 3:
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;