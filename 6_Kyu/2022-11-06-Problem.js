// 6 Kyu Problem - November 6th 2022
// Dashatize it
// Regexp, .replace(), beginning, end, OR, capturing group, capturing set, numbered group substitution, isNaN(num), .match(regexp), when you split() with 2 of the same, it creates empty element that you can .filter(), .join("")

/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function dashatize(num) {
  return isNaN(num) ? 'NaN' : num.toString().match(/[13579]|[02468]+/g).join("-")
};

function dashatize(num) {
  return num = num.toString().split("").map(function(c){
    return c % 2 ? "-" + c + "-" :  c ;
  }).join("").split("-").filter(e => e !== "").join("-")
};