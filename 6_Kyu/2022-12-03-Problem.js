// 6 Kyu Problem - December 3rd 2022
// Fold an array
// .pop(), .map(), .slice(), .filter(), recursion instead of while loop, .push(), .shift(), while loop, Array.from(arr)

/*
In this kata you have to write a method that folds a given array of integers by the middle x-times.

An example says more than thousand words:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -> [9,6]
As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.

The input array should not be modified!
*/

// .slice(), .map(), .pop(), .filter()
function foldArray(a, n) {
  a = a.slice();
  a = a.map((e,i) => a[i+1] === undefined ? e : e + a.pop())  
  return --n ? foldArray(a.filter(e=>e!==undefined),n) : a.filter(e=>e!==undefined);
}

// .pop(), .shift(), .slice(), while loop
function foldArray(a, n) {
  let ans = []
  let copy = a.slice()
  while(copy.length){
      ans.push(copy.shift() + (copy.pop() || 0))
  }
  return n - 1 ? foldArray(ans,n-1) : ans
}

// for loop
function foldArray(array, runs) {
  if (!runs) return array;
  var result = [];
  // new Array
  for (var i = 0; i < Math.ceil(array.length / 2); i++) {
    result[i] = array.length -i - 1 === i ? array[i] : array[i] + array[array.length - i - 1];
  }
  return foldArray(result, runs - 1);
}

function foldArray (array, runs) {
    let arrayToFold = Array.from(array);
    while (runs > 0) {
        let resultArray = [];
        while (arrayToFold.length > 1) {
            let firstElement = arrayToFold.shift();
            let lastElement = arrayToFold.pop();
            resultArray.push(firstElement + lastElement);
        }
        arrayToFold = [...resultArray, ...arrayToFold];
        runs--;
    }
    return arrayToFold;
};