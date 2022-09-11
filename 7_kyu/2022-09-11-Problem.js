// 7 Kyu Problem - Septmeber 11th 2022
// Convert an array of strings to array of numbers
// strings to numbers - parseFloat, .map(), Number, unary plus operator

/*
Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/

function toNumberArray(stringarray){
    return stringarray.map(e => Number(e))
  //   return stringarray.map(e => parseFloat(e))
  //   return stringarray.map(e => +e)
}

function toNumberArray(stringarray){
    return stringarray.map(Number)
  //   return stringarray.map(parseFloat)
}