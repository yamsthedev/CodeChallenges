// 7 Kyu Problem - August 11th 2022
// Area of a Circle
// Number.prototype.toFixed(numberOfDigits), isNan(somthing), Math.round(number * 100) / 100 to get rounded to 2 decimal places, Math.pow(), Math.PI

/*
Complete the function circleArea so that it will return the area of a circle with the given radius. Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.

Example:

circleArea(-1485.86);    //returns false
circleArea(0);           //returns false
circleArea(43.2673);     //returns 5881.25
circleArea(68);          //returns 14526.72
circleArea("number");    //returns false
*/

var circleArea = function(radius) {
    return radius > 0 && radius !== NaN ? Number((Math.PI*radius**2).toFixed(2)) : false
  };

// Could have also done
 // isNaN(radius) return false instead of radius !== NaN 
 var circleArea = function(radius) {
    if(isNaN(radius) || radius <= 0) return false;
    return Math.round(Math.PI * Math.pow(radius, 2) * 100) / 100;
  };