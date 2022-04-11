// 8 Kyu Problem - April 10th 2022
// Removing Elements

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    return arr.filter((elem, ind) => ind%2 === 0);
}

//Alternative Solution
function removeEveryOther(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      if(i === 0){
        newArr.push(arr[i])
      }
      else if(i % 2 === 0){
        newArr.push(arr[i])
      }
    }
    return newArr
  }

  //Alternative Solution (by others)
  function removeEveryOther(arr){
    var newArr=[];
  for (var i = 0; i < arr.length; i+=2){
    newArr.push(arr[i]);
    }
  return newArr;
  }