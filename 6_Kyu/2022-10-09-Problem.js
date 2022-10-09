// 6 Kyu Problem - 
// Write Number in Expanded Form
// .split(), .toString(), .repeat(), .reverse(), .map(), .filter(), .join()

/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  return num
    .toString()
    .split("")
    .reverse()
    .map((e,i,a) => e * Math.pow(10,i))
    .reverse()
    .filter(x => x !== 0)
    .join(" + ")
}

function expandedForm(num) {
  let split = num.toString().split("")
  let ans = ""
  for(let i = 0; i < split.length; i++){
    let x = split[i] * (1 + "0".repeat(split.length - i - 1))
    if(x){
      ans += x.toString() + " " + "+" + " "
    }
  }
  return ans.slice(0,-3)
}