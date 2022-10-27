// 6 Kyu Problem - October 27th 2022
// Encrypt this!
// Regex, placeholders, capturing groups, .replace(pattern, replacement), .split(), .join(), .map(), .charCodeAt()

/*
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function(text) {
  return text.split(" ").map(word => {
    return word.split("").map((e,i,a) => {
    if(i === 0){ 
      return e.charCodeAt(0)
    }
    else if(i === 1){
      return a[a.length - 1]
    }
    else if(i === a.length - 1) {
      return a[1]
    }
    else { 
      return e
    }
  }).join("")
}).join(" ")
}

// Using Regex
const encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');

/*
Explanation:

For this regex /(^\w)(\w)(\w*)(\w$)/:

(^\w) = Represents $1 and the value must initialize with a letter(a or A)

  //hello => true   //2ello => false
  
(\w) = Represents $2 and the value must have a second letter (a or A)

  // hello => true   //h2llo => false
  
(\w*) = Represents $3 and the value could have many letters after the first two letters(a or A);

  //hello => true  //hel2o => false  //hell222o => false
  
(\w$) = Represents $4 and the value must end with a letter (a or A);

  //hello => true  //hell4 => false  //hellooooooooo5 => false

'$1$4$3$2' represents the order of matches, Let's see an example:

'Helllooo' :
'H' => (^\w) => $1
'e' => (\w) => $2
'llloo' => (\w*) => $3
'o' => (\w$) => $4

Apply '$1$4$3$2' :
'H' => $1
'o' => $4
'llloo' => $3
'e' => $2

Result : Holllooe

Apply '$1$3$4$2'
'H' => $1
'llloo' => $3
'o' => $4
'e' => $2
Result : Hllloooe

Conclusion:
(^\w)(\w)(\w*)(\w$) = "hello" => true, let's replace it;

(^\w)(\w)(\w*)(\w$) = "h2llo" => false

(^\w)(\w)(\w*)(\w$) = "worl3" => false

(^\w)(\w)(\w*)(\w$) = "A" => true, let's replace it

(^\w)(\w)(\w*)(\w$) = "R _t3" => very false
*/