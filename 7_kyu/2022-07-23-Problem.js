// 7 Kyu Problem - July 23rd 2022
// Switcheroo
// .split(), .map(), nested conditional (ternary) operator, RegExp, String.prototype.replace()

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
// Example:
// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
    return x.split('').map((e) => e === 'a' ? 'b' : e === 'b' ? 'a' : e).join('');
  };

//Alternative Solution using RegExp and replace
const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")