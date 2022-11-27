// 6 Kyu Problem - November 27th 2022
// Decipher this!
// Regexp, .replace(), Capturing groups, String.fromCharCode(), .split(), .join(), .slice(), .match()

/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

function decipherThis(str) {
  return str.split(" ").map(e => {
              return e.replace(/^\d+/, c => String.fromCharCode(c))
                      .replace(/^(.)(.)(.*)(.)$/,"$1$4$3$2")
            }).join(" ")
}; 


// using .match(), .slice() and multiple functions
const swap = str => {
  return str.length >= 2
    ? str.slice(-1) + str.slice(1, -1) + str.slice(0, 1)
    : str;
};

const translateWord = word => {
  const initial = word.match(/^\d+/)[0];
  const rest = word.replace(/^\d+/, '');

  return `${String.fromCharCode(initial)}${swap(rest)}`;
};

const decipherThis = str => {
  return str.split(' ')
    .map(word => translateWord(word))
    .join(' ');
};