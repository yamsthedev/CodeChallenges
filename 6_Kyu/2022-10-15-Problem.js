// 6 Kyu Problem - October 15th 2022
// CamelCase Method
// this, str.charAt(), .split(), .map(), .toUpperCase(), .slice()

/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

String.prototype.camelCase=function(){
  return this.split(" ").map(e => {
    if(e[0]) return e[0].toUpperCase() + e.slice(1)
  }).join("")
}

String.prototype.camelCase=function(){
    return this.split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join("")
  }