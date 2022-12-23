// 6 Kyu Problem - December 22nd 2022
// Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
// .every(), .some(), new Set(), .map(), Set.prototype.size, .includes(), .indexOf(), for of loop, .push()

/*
You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];
your function should return true as there is at least one developer from the required 5 geographic zones.

Notes:

The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.

*/

// Using .indexOf(), for of loop, .push()
function allContinents(list) {
    let tracking = []
    for(let obj of list){
      if(tracking.indexOf(obj.continent) == -1){
        tracking.push(obj.continent)
      }
    }
    return tracking.length == 5
  }

  // using .every(), .some()
function allContinents(list) {
   return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(e => list.some(y => e == y.continent))
}

// using new Set(), .map(), Set.prototype.size
function allContinents(list) {
  return new Set(list.map(e => e.continent)).size == 5
}

// using .includes()
function allContinents(list) {
  const continents = list.map(x => x.continent)
  return continents.includes('Africa' && 'Americas' && 'Asia' && 'Europe' && 'Oceania')
}
