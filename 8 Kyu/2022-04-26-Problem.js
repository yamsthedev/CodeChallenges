// 8 Kyu Problem - April 26th 2022
// Third Angle of a Triangle

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
    return 180 - a - b;
  }

//Alternative Solution
function otherAngle(a, b) {
    return 180-(a+b);
}