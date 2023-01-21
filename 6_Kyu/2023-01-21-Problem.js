// 6 Kyu Problem - January 21st 2023
// String Breakers
// RegExp, quantifiers, .replace(), .push(), .slice(), .join(), .split(), .trim()

/*
I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

Example: 

N = 5;

String = "This is an example string";

Return value:
Thisi
sanex
ample
strin
g

Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'
*/

function stringBreakers(n, string){
    let result = [];
    
    string = string.replace(/\s/g, "");
    
    for (let i = 0; i < string.length; i += n) {
      result.push(string.slice(i, i+n));
    }
  
    return result.join("\n");
}

function stringBreakers(n, s){
  return s.replace(/\s/g,'').replace(new RegExp('.{'+n+'}','g'),'$&\n').trim()
}