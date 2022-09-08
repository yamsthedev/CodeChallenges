// 7 Kyu Problem - September 8th 2022
// Counting Array Elements
// objects, .reduce(), comma operator, .forEach(), OR Operator, Undefined when calling a property that doesnt exist, in operator, for of loop

/*
Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}
*/

function count(array){  
  return array.reduce((acc,curr) => {
    if(acc[curr]){
      return acc[curr]++, acc
    }else{
      return acc[curr] = 1, acc
    }
},{})
}

// Alternative Solution using arrow function
function count(array){
    return array.reduce((acc,curr) => {
      return acc[curr] ? acc[curr] += 1 : acc[curr] = 1, acc
      }, {})
}

// Using For Each and || Or Operator and .forEach()
function count(array){
    let names = {};
    array.forEach(item => names[item] = (names[item] || 0) + 1)
    return names;
}

// For Loop and Undefined when calling a property that doesnt exist in the object.
function count(array){
    let counter = {};
    for (let i=0; i<array.length; ++i)
    {
      if (counter[array[i]] == undefined)
        counter[array[i]] = 1;
      else
        counter[array[i]] ++;
    }
    return counter;
  }

// in operator, for of loop
function count(array) {
    const obj = {}
    for(let element of array){
      if(element in obj){
        obj[element]++
      }else{
        obj[element] = 1
      }
    }
    return obj
}