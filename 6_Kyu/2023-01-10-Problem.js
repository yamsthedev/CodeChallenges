// 6 Kyu Problem - January 10th 2023
// Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
//.map(), spread syntax, new Set(), .filter(), for of loop, for in loop, Number.MAX_VALUE, Math.max(), Math.min(), .reduce(), Objects

/*
You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

Your task is to return either:

true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];
your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.

Notes:

The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
The input array will always be valid and formatted as in the example above.
Each of the 3 programming languages will always be represented.
*/

// for of loop, for in loop
function isLanguageDiverse(list) {
  var counts = {}
  ,     min = Number.MAX_VALUE
  ,     max = 0;
  
  for (var dev of list) 
    counts[dev.language] = (counts[dev.language] || 0) + 1;
      
  for (var lang in counts) {
    min = Math.min(counts[lang], min);
    max = Math.max(counts[lang], max);
  }

  return max <= 2 * min;
}

// Number.MAX_VALUE
// Math.max(), Math.min(), .reduce(), Objects
function isLanguageDiverse(list) {
  // Python, Ruby, JavaScript
  let obj = list.reduce((acc,curr) => {
    acc[curr.language] ? acc[curr.language]++ : acc[curr.language] = 1
    return acc
  }, {})
  
  let min = Number.MAX_VALUE
  let max = 0
  
  for (var lang in obj) {
    min = Math.min(obj[lang], min);
    max = Math.max(obj[lang], max);
  }
  
  return max <= 2 * min;
}


// .map(), spread syntax, new Set(), .filter()
function isLanguageDiverse(list) {
  
  list = list.map(dev => dev.language);
  
  // creating an array with the 3 unique languages
  // then replacing each language with the count from the original list
  
  const num = [...new Set(list)].map(el => list.filter(e => e === el).length);
  
  // using spread syntax
  return Math.max(...num) / Math.min(...num) <= 2;
}