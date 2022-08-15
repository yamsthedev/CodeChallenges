// 7 Kyu Problem - August 15th 2022
// Is it a vowel
//Regexp basics, ^ and $ anchors, Regexp.prototype.test(), / /, i flag (case-insenstive), String.prototype.match(regexp)

/*
Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.
*/

String.prototype.vowel = function() {
    return /^[aeiou]$/i.test(this)
  }

// Alternative Solution
String.prototype.vowel = function() {
    return /^[aeiouAEIOU]$/.test(this);
  };

// Alternative Solution using String.prototype.match(regexp)
String.prototype.vowel = function() {
    return this.match(/[aeiou]/gi) && this.length <= 1 ? true : false;
  };