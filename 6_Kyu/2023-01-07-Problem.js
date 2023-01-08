// 6 Kyu Problem - January 7th 2023
// Regexp Basics - is it IPv4 address?
// Regexp, quantifiers, negative lookahead, alternations, regexp.test(str), .split(), arr.every(function), unary plus operator, character sets, capturing groyps

/*
Implement String#ipv4_address?, which should return true if given object is an IPv4 address - four numbers (0-255) separated by dots.

It should only accept addresses in canonical representation, so no leading 0s, spaces etc.
*/

String.prototype.ipv4Address = function() {
  // unary plus, .split(), .every(), .toString()
  
  let ss = this.split(".");

  return ss.length == 4 && ss.every((s) => {
      let n = +s;
      return s == n.toString() && n >= 0 && n < 256;
    });
};

String.prototype.ipv4Address = function() {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(this);
};