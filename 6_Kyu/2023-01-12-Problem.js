// 6 Kyu Problem - January 12th 2023
// Trim a String
// .replace(), Regexp, strings

String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, '');
};
