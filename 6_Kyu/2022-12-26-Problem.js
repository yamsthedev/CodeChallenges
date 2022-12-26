// 6 Kyu Problem - December 26th 2022
// Simple Sentences
// .trim(), .replace(), regexp, .join(), .reduce()

/*
Implement a function, so it will produce a sentence out of the given parts.

Array of parts could contain:

words;
commas in the middle;
multiple periods at the end.
Sentence making rules:

there must always be a space between words;
there must not be a space between a comma and word on the left;
there must always be one and only one period at the end of a sentence.
Example:

makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.'
*/

// .trim(), .replace(), regexp, .join()
// .replace() creates a new string
// have to do \. in regexp to match for the "." character
function makeSentence(parts) {
    let str = parts.join(" ")
    let ans = str.replace(/ , /g, ", ")
                 .replace(/\./g, "")  
    return ans.trim() + "."
}

function makeSentence(parts) {
	return (parts.join(' ') + '.').replace(/ \./g, '.').replace(/ ,/g, ',').replace(/\.+$/, '.');
}

// using reduce()
function makeSentence(parts) {
  return parts.reduce(function(a,b){
    return b === ","? a + b : b === "."? a + "" : a + " " + b;
  }) + ".";
}